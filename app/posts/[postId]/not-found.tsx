import Link from "next/link";

export default function NotFound() {
// not-found.js should not accept any props

    return (
        <main className="px-6 mx-auto">
            <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
                404 - Not Found - DUDE
            </p>
            <Link href="/">🔙 back to posts 🔙</Link>
        </main>
    )
}