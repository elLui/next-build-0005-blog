import {notFound} from "next/navigation";

import {getSortedPostsData} from "@/lib/posts";

import getPost from "@/lib/post";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";


export function generateMetadata({params}: { params: { postId: string } }) {

    const posts = getSortedPostsData();
    const {postId} = params;

    const post = posts.find(post => post.id === postId);

    if (!post) {
        return {
            title: 'Not Found - DUDE',
        }
    }

    return {
        title: post.title,

    }


}

export default async function Post({params}: { params: { postId: string } }) {

    const posts = getSortedPostsData();
    const {postId} = params;

    if (!posts.find(post => post.id === postId)) {
        return notFound();
    }

    const {title, date, contentHtml} = await getPost(postId);

    const formedDate = getFormattedDate(date);


    return (
        <main className="px-6 prose prose-xl prose-blue dark:prose-invert mx-auto">
            <h1 className="text-3xl mt-4 mb-0">
                {title}
            </h1>
            <p className="text-gray-500 text-sm">
                {formedDate}
            </p>
            <article>
                <section dangerouslySetInnerHTML={{__html: contentHtml}}></section>
            </article>
            <p className="mt-0 text-gray-500 text-sm">
                <Link href={"/"}> ⬅ Patras a la casa </Link>
            </p>
        </main>
    )
}