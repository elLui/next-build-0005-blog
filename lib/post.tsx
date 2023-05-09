import path from "path";
import fs from "fs";
import matter from "gray-matter";
import {remark} from "remark";
import html from "remark-html";

// create a path the content directory holding posts
const postsDirectory = path.join(process.cwd(), 'blogposts')


// remark requires async/await
export default async function getPost(id: string) {


    // create fullPath to the post file by joining the postsDirectory with the id with the .md extension
    const fullPath  = path.join(postsDirectory, `${id}.md`);
    // once we have the exact path to the complete post file, we can read it with fs.readFileSync
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // raw .md file contents then can be parsed with gray-matter
    const matterResult = matter(fileContents);

    // we can then format the content with remark
    const processedContent = await remark().use(html).process(matterResult.content)

    // and finally return the processed content as an HTML string
    const contentHtml = processedContent.toString();


    // & joins the two types together
    const blogPostWithHTML: BlogPost & { contentHtml: string } = {
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
        contentHtml,
    }

    return blogPostWithHTML;


}