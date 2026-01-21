import "@/style/markdown.css";

import type { TextBlock } from "@/payload-types";
import {
  convertLexicalToMarkdown,
  editorConfigFactory,
} from "@payloadcms/richtext-lexical";
import { unified } from "unified";
import React from "react";
import configPromise from "@payload-config";
import rehypeSanitize from "rehype-sanitize";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import emoji from "remark-emoji";

export default async function TextBlock({ data }: { data: TextBlock }) {
  const markdownContent = convertLexicalToMarkdown({
    data: data.content,
    editorConfig: await editorConfigFactory.default({
      config: await configPromise,
    }),
  });

  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(remarkGfm)
    .use(emoji)
    .use(rehypeSlug)
    .use(rehypeAutoLinkHeadings)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(markdownContent);

  return (
    <div className="isolate w-full">
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: result.toString() }}
      ></div>
    </div>
  );
}
