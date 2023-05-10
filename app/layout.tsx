import './globals.css'
import {Inter} from 'next/font/google'
import clsx from "clsx";
import Navbar from "@/app/components/navbar";
import { Metadata } from "next";


const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'elluis blog',
    description: 'created by elluis',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={clsx(inter.className, "dark:bg-gradient-radial from-pink-700 to-sky-400")}>

        <Navbar/>

        <main className="px-4 md:px-6 prose prose-xl prose-violet">
            {children}
        </main>


        </body>
        </html>
    )
}
