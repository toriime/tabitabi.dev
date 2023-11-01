import '@/style/markdown.css'
import MaxWidthWrapper from "@/components/max-width-wrapper"
import postManager from "@/lib/post"
import Image from "next/image"
import { unified } from "unified";
import rehypeSlug from "rehype-slug";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSanitize from "rehype-sanitize";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import emoji from "remark-emoji";
import rehypeStringify from "rehype-stringify";

type PageProps = {
    params: {
        slug: string
    }
}

export default async function BlogPage({ params }: PageProps) {
    const post = postManager.getPost(params.slug)
    
    if (!post) {
        return <div>404</div>
    }

    const result = await unified()   
    .use(remarkParse)
    .use(remarkRehype)
    .use(remarkGfm)
    .use(emoji)
    .use(rehypeSlug)
    .use(rehypeAutoLinkHeadings)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(post.content);
    
    const authors: string[] = []

    post.authors.forEach((author) => authors.push(author.username))

    return (
        <MaxWidthWrapper>
            <div className="flex max-w-4xl flex-col w-full py-8 px-2">
                <div className="flex justify-center w-full flex-col gap-5 bottom-border-gradient pb-4">
                    <h1 className="text-4xl font-extrabold tracking-tight dark:text-white md:leading-none lg:text-6xl">
                        {post.title}
                    </h1>
                    <div className="flex items-center w-full flex-col">
                        <div className="flex flex-col gap-4">
                            {post.image && (
                                <Image
                                    alt={`${post.slug} cover image`}
                                    src={post.image}
                                    className="rounded-[15px] shadow-lg max-w-4xl"
                                    layout="responsive"
                                    width={16}
                                    height={9}
                                    priority={true}
                                />
                            )}
                            <div className="h-7 flex items-center flex-shrink-0 relative w-full">
                                {post.authors.map((member, index) => (
                                    <Image
                                        key={member.username} src={member.avatar}
                                        className="rounded-full w-8 h-8 absolute"
                                        style={{ left: `${index * 1.1}rem`, zIndex: post.authors.length + index }}
                                        alt="author avatar" width={30} height={30} 
                                    />
                                ))}

                                <div className="w-full flex justify-between">
                                    <span className="whitespace-nowrap text-slate-300/80" style={{marginLeft: `${16 * (post.authors.length - 1) + 40}px`}}>{authors.join(", ")}</span>
                                    <span className="text-slate-300/80">
                                        {post.date.toLocaleDateString()}
                                    </span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-4 isolate">
                    <div className="markdown-body" dangerouslySetInnerHTML={{ __html: result.toString() }}></div>
                </div>
            </div>
        </MaxWidthWrapper>

    )
}