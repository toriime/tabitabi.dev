import { Post } from "@/lib/blog";
import PostInfo from "./post-info";
import Image from "next/image";

export default function PostHeader({ post }: { post: Post }) {
  return (
    <div className="mb-5">
      <h1
        className="my-2 text-4xl font-extrabold
      tracking-tight dark:text-white
      md:my-4 md:leading-none lg:text-6xl"
      >
        {post.title}
      </h1>

      <h2 className={"my-2 text-xl text-gray-400 md:my-4 lg:text-2xl"}>
        {post.description}
      </h2>

      <div className="mx-auto mb-4 flex flex-col space-y-2 md:mb-6">
        <PostInfo post={post} />
      </div>

      <div className="mx-auto justify-center">
        {post.image && (
          <Image
            alt={`${post.slug} cover image`}
            src={post.image}
            className="rounded-[15px] shadow-lg"
            layout="responsive"
            width={16}
            height={9}
            priority={true}
          />
        )}
      </div>
    </div>
  );
}
