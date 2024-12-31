import { Dancing_Script } from "next/font/google"
import Link from "next/link"
const Font2 = Dancing_Script({
    subsets: ["latin"],
    weight: ['700', '600', '500', '400']
})

import { Roboto_Mono } from "next/font/google"

const Font = Roboto_Mono({
    subsets: ["latin"],
    weight: ['400','500','600','700']
}
)
export default function HeroPage() {
    return (
        <div className="bg mt-10  ">
            <div className="flex flex-col gap-8 justify-center items-center pt-[100px]">
            <h1 className={`${Font.className}  text-4xl mt-20 sm:text-6xl md:text-8xl font-extrabold  text-blue-950 `}>
                CLICK - WORTHY
            </h1>
            <Link  href={'/blogPage'} className={`${Font2.className} font-bold text-2xl sm:text-4xl md:text-6xl text-white hover:text-blue-950 hover:border-blue-950 p-3 rounded-full hover:ring-1 shadow-md hover:shadow-lg`}>
                Blog posts
            </Link>
            </div>
        </div>
    )
}