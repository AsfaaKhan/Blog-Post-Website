
import HeroPage from "@/components/HeroPage";
import About from "@/components/About";
import Parallax from "@/components/Parallax";
import Comment from "@/components/Comment";


export const revalidate = 10 //seconds

export default async function Home() {
  return (
    <div>
      {/*  HeroPage */}
      <HeroPage />

      {/* About */}
      <div>
        <About />
      </div>

      {/* Parallax */}
      <Parallax />

      {/* Comment */}
      <Comment/>

    </div>

  );
}
