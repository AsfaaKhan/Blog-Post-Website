import { Dancing_Script } from "next/font/google"
import Link from "next/link"
const Font2 = Dancing_Script({
    subsets: ["latin"],
    weight: ['700', '600', '500', '400']
})

import { Roboto_Mono } from "next/font/google"

const Font = Roboto_Mono({
    subsets: ["latin"],
    weight: ['400', '500', '600', '700']
}
)
export default function HeroPage() {
    return (
        <div className="bg-[url('/images/bg.jpg')]  mt-10 bg-cover bg-center bg-no-repeat h-[300px] sm:h-[400px] md:h-[500px] lg:[800px] ">
            <div className="flex mt-34 flex-col gap-8 justify-center items-center text-center pt-[100px]">
                <div className="flex justify-center items-center text-center">
                    <h1 className={`${Font.className}  text-4xl sm:text-6xl md:text-8xl font-extrabold  text-blue-950 `}>
                        CLICK - WORTHY
                    </h1>
                </div>
                <div>
                    <Link href={'/blogPage'} className={`${Font2.className} font-bold text-3xl sm:text-4xl md:text-6xl text-slate-900 hover:text-blue-950 hover:border-blue-950 p-3 rounded-full hover:ring-2 shadow-md hover:shadow-lg`}>
                        Blog posts
                    </Link>
                </div>

            </div>
        </div>
    )
}