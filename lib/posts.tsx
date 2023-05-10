import {compileMDX} from 'next-mdx-remote/rsc';

type Filetree = {
    "tree": [
        {
            "path": string,
        },
    ],
}


export async function getPostByName(fileName: string): Promise<BlogPost | undefined> {
    const res = await fetch(`https://raw.githubusercontent.com/ellui/next-build-0005-blog/main/${fileName}`, {
        headers: {
            'Accept': 'application/vnd.github+json',
            'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        },
    })

    // test the response for errors
    if (!res.ok) {
        return undefined
    }

    // get raw response body
    const rawMDX = await res.text();

    // if the file is not found, return undefined
    if (rawMDX === '404: Not Found') {
        return undefined
    }

    // get the metadata and content from the MDX file
    const {frontmatter, content} = await compileMDX<{ title: string, date: string, tags: string[] }>({

        source: rawMDX,
        options: {
            parseFrontmatter: true,
        }
    })

    // remove the .mdx extension from the file name
    const id = fileName.replace(/\.mdx$/, '');

    // create a container for the metadata and content
    return {meta: {id, title: frontmatter.title, date: frontmatter.date, tags: frontmatter.tags}, content};
}


    export async function getPostsMeta(): Promise<Meta[] | undefined> {

        const res = await fetch('https://api.github.com/repos/ellui/next-build-0005-blog/git/trees/main?recursive=1', {
            headers: {
                'Accept': 'application/vnd.github+json',
                'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
                'X-GitHub-Api-Version': '2022-11-28',
            }
        })

        // test the response for errors
        if (!res.ok) {
            console.error(res.statusText)
            return undefined
        }

        // get raw response body
        const repoFiletree: Filetree = await res.json();

        // filter the tree for only .mdx files
        const filesArray = repoFiletree.tree.map(obj => obj.path).filter(path => path.endsWith('.mdx'));

        // create a container for the metadata
        const posts: Meta[] = [];

        // loop through the files and get the metadata
        for (const file of filesArray) {
            const post = await getPostByName(file);
            if (post) {
                const {meta} = post;
                posts.push(meta);
            }
        }

        // sort post by date
        return posts.sort((a, b) => a.date < b.date ? 1 : -1);
    }