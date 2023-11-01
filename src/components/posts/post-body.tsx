import "github-markdown-css/github-markdown-dark.css";
import { Post } from "@/lib/blog";
import rehypeSlug from "rehype-slug";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";
//@ts-ignore
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSanitize from "rehype-sanitize";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import emoji from "remark-emoji";
import rehypeStringify from "rehype-stringify";
import { Plugin, unified } from "unified";

export default async function PostBody({ post }: { post: Post }) {
  const result = await unified()
    //@ts-ignore
    .use(remarkParse)
    //@ts-ignore
    .use(remarkRehype)
    //@ts-ignore
    .use(remarkGfm)
    //@ts-ignore
    .use(emoji)
    //@ts-ignore
    .use(rehypeSlug)
    //@ts-ignore
    .use(rehypeAutoLinkHeadings)
    //@ts-ignore
    .use(rehypeSanitize)
    //@ts-ignore
    //TODO: tutaj rozwalona jest paczka która nie działa na next.js v13
    // .use(rehypePrettyCode, {
    //   theme: "one-dark-pro",
    //   onVisitLine(node: any) {
    //     if (node.children.length === 0) {
    //       node.children = [{ type: "text", value: " " }];
    //     }
    //   },
    //   onVisitHighlightedLine(node: any) {
    //     node.properties.className.push("line--highlighted");
    //   },
    //   onVisitHighlightedWord(node: any) {
    //     node.properties.className = ["word"];
    //   },
    // })
    .use(rehypeStringify)
    .process(post.content);

  return (
    <div
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: result.toString() }}
    ></div>
  );
}
