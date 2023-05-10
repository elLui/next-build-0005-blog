import Link from "next/link";

import {FaTwitter, FaGithub, FaInstagram, FaLaptop} from "react-icons/all";


export default function Navbar() {

    return (
        <nav className="bg-gradient-to-bl from-amber-500 to-60% to-violet-500 p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="md:px-6 prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
                <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                    <Link href="/" className="text-white/90 no-underline hover:text-white">
                        - elluis -
                    </Link>
                </h1>
            </div>
            <div
                className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
                <Link className="text-white/90 hover:text-white" href="/">
                    <FaInstagram/>
                </Link>
                <Link className="text-white/90 hover:text-white" href="/">
                    <FaLaptop/>
                </Link>
                <Link className="text-white/90 hover:text-white" href="/">
                    <FaGithub/>
                </Link>
                <Link className="text-white/90 hover:text-white" href="/">
                    <FaTwitter/>
                </Link>
            </div>
        </nav>
    )
}