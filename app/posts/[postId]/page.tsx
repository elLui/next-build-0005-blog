import {notFound} from "next/navigation";

import {getPostsMeta, getPostByName} from "@/lib/posts";

import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";

// nocache
export const revalidate = 86400; // 24 hours


type Props = {
    params: {
        postId: string,
    },
}


// having revalidate set to 0 means that the page will be regenerated on every request
// that does not pair well with generateStaticParams
export async function generateStaticParams() {

    const posts = await getPostsMeta();
    // if there are no posts, return an empty array
    if (!posts) {
        return [];
    }

    return posts.map(post => {
        return {
            params: {
                postId: post.id
            }
        }
    })
}


export async function generateMetadata({params: {postId}}: Props) {

    const post = await getPostByName(`${postId}.mdx`);

    if (!post) {
        return {
            title: 'Not Found - DUDE',
        }
    }
    return {
        title: post.meta.title,
    }

}

export default async function Post({params: {postId}}: Props) {

    const post = await getPostByName(`${postId}.mdx`);


    // return keyword is not required, since this is type never
    if (!post) notFound();

    const {meta, content} = post;


    const formedDate = getFormattedDate(meta.date);

    const tags = meta.tags.map((tag, index) => (
        <Link href={`/tags/${tag}`} key={index}>{tag}</Link>
    ))


    return (
        <>
            <h2 className="text-3xl mt-4 mb-0">{meta.title}</h2>
            <p className="mt-0 text-sm">{formedDate}</p>
            <article>
                {content}
            </article>
            <section>
                <h3>if you liked that, well hurhur</h3>
                <div className="flex flex-row gap-4">
                    {tags}
                </div>
            </section>
            <div className="mb-10">
                <Link href="/">🔙 back to posts 🔙</Link>
            </div>
        </>
    )
}