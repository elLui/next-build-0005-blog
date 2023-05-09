import {notFound} from "next/navigation";
import {getSortedPostsData} from "@/lib/posts";


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


    return (
        <main>
            <h1>Post {params.postId}</h1>
        </main>
    )
}