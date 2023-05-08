import './globals.css'
import { Inter } from 'next/font/google'
import clsx from "clsx";
import Navbar from "@/app/components/navbar";
import ProfilePicture from "@/app/components/profilePicture";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
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

      <Navbar />
      <ProfilePicture />

      {children}</body>
    </html>
  )
}
