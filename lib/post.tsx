import path from "path";


// create a path the content directory holding posts
const postsDirectory = path.join(process.cwd(), 'blogposts')

export default async function Post(id: string) {


    // create fullPath to the post file
    const fullPath  = path.join(postsDirectory, `${id}.md`)

}