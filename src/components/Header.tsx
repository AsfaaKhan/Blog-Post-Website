"use client"
import { Roboto_Mono } from "next/font/google"
import Link from "next/link";
import { CgMenu } from "react-icons/cg";
import { CgMenuMotion } from "react-icons/cg";
import { useState } from "react";
const Font = Roboto_Mono({
    subsets: ["latin"],
    weight: ['700']
}
)
export default function Header() {
    const [navbar, setNavbar] = useState(false)
    const handleNavbar = () => {
        setNavbar(!navbar);
    }
    return (
        <div>
            <header className="bg-gray-50">
                <div className="xl:container mx-auto flex flex-row my-5 justify-between backdrop-blur border-b-2  supports-[backdrop-filter]:bg-background/60  text-center py-3">

                    <div>
                        <Link href={"/"}
                            className={` ${Font.className} font-bold uppercase text-4xl`}>Blog Side</Link>
                    </div>

                    {/* Navbar */}
                    <div className=" hidden md:flex space-x-4  ">
                        <Link className="text-black hover:text-blue-950 hover:underline text-xl" href="/">Home </Link>
                        <Link className="text-black hover:text-blue-950 hover:underline text-xl" href="/aboutPage">About</Link>
                        <Link className="text-black hover:text-blue-950 hover:underline text-xl" href="/blogPage">Blogs</Link>
                        <Link className="text-black hover:text-blue-950 hover:underline text-xl" href="/contactPage">Contact</Link>
                    </div>

                    {/* Hamburger  */}
                    <div className="md:hidden cursor-pointer " onClick={handleNavbar}>
                        {navbar ? <CgMenuMotion size={40} /> : <CgMenu size={40} />}
                    </div>

                </div>
                {navbar && (
                    <div className="md:hidden  bg-transparent p-4  flex flex-col  justify-center items-center gap-3 ">
                        <Link href="/" className="block text-black text-bold text-[20px]  py-2 hover:text-blue-950 hover:underline" onClick={handleNavbar}>Home</Link>

                        <Link href="/aboutPage" className="block text-black  text-bold text-[20px]  py-2 hover:text-blue-950 hover:underline" onClick={handleNavbar}>About</Link>

                        <Link href="/blogPage" className="block text-black  text-bold text-[20px]  py-2  hover:text-blue-950 hover:underline" onClick={handleNavbar}>Blogs</Link>

                        <Link href="/contactPage" className="block text-black  text-bold text-[20px]  py-2 hover:text-blue-950 hover:underline" onClick={handleNavbar}>Contact</Link>
                    </div>
                )}
            </header>
        </div>
    )
}