import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { Components } from "./CustomComponents";

export default function BlogCard({ post }: {post : IPost}) {
  return (
    <section className="flex flex-col justify-between h-[480px]  rounded bg-white/90 dark:bg-black/40 shadow-md shadow-gray-300 dark:shadow-black/80 group hover:scale-105 transition-transform ease-out duration-700">
      {/* Image Section*/}
      <div className="relative max-h-76 flex-1">
        <Image
          src={urlForImage(post.image)}
          alt="AI for everyone"
          fill
          className="object-cover rounded-t"
        />
      </div>

      {/* Title and Summary */}
      <div className="flex flex-col justify-between gap-y-4  p-4">
        <h2 className="text-lg font-semibold line-clamp-2   dark:text-white leading-tight mb-2 text-blue-950"> 
          {post.title}
        </h2>
        <p className="text-black/70  dark:text-white/70 line-clamp-3">
          {post.summary}
        </p>

        {/* Read More dynamic Link */}
        <Link
          href={`/blog/${post.slug}`}
          className="block px-4 py-2  hover:bg-blue-900 text-center bg-blue-950  rounded text-white font-semibold mt-4"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
