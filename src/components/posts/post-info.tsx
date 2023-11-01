import { Post } from "@/lib/blog";
import Author from "./author";

export default function PostInfo({ post }: { post: Post }) {
  return (
    <div className="flex flex-row items-center space-x-2 text-gray-600 dark:text-gray-400 text-base">
      <Author user={post.author} /> <span>•</span> <p>{post.date}</p>
    </div>
  );
}
