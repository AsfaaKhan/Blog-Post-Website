
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Container from "./Container";

export default function Headline() {
    return (
        <div className="  bg-blue-950 ">
            <Container>
                <div className="flex justify-between p-4">
                <div className="flex justify-center items-center">
                    <h1 className="text-white font-bold text-xl">BLOG</h1>
                </div>
                <div className=" flex  gap-5 ">
                    <Link href={"https://x.com/KhanAsfaa?s=08"} ><FaLinkedin size={30}  color="#888888"   />
                    </Link>
                    <Link href={"https://github.com/AsfaaKhan"}>
                        <FaGithub size={30} color="#888888" />
                    </Link>
                    <Link  href={"https://www.linkedin.com/in/asfaa-khan-4b80a0267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
                        <FaSquareXTwitter size={30} color="#888888" />
                    </Link>
                </div>
               </div>
            </Container>
        </div>
    )
}