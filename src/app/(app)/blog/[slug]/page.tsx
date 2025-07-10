import "@/style/markdown.css";

import { notFound } from "next/navigation";
import { getPayload } from "payload";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import Image from "next/image";
import configPromise from "@payload-config";
import { draftMode } from "next/headers";
import { cache } from "react";
import { generatePageMetadata } from "@payloadcms/next/views";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { Media, User } from "@/payload-types";
import { LivePreviewListener } from "@/components/livePreviewListener"

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const posts = await payload.find({
    collection: "posts",
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  });

  const params = posts.docs.map(({ slug }) => {
    return { slug };
  });

  return params;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug({ slug: slug });

  return {};
}

const getBlogPostBySlug = /*cache(*/ async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode();

  const payload = await getPayload({ config: configPromise });

  const post = await payload.find({
    collection: "posts",
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return post.docs[0] || null;
};
/*)*/

export default async function BlogPage({ params }: PageProps) {
  const { isEnabled: draft } = await draftMode();
  const { slug } = await params;

  const post = await getBlogPostBySlug({ slug });

  if (!post) {
    return notFound();
  }

  const authors: User[] = [];

  if (post.authors.length > 0 && !Object.keys(post.authors[0]).includes("username")) {  
    // If the authors are not User objects, we need to fetch them
    const payload = await getPayload({ config: configPromise });
    const authorIds = post.authors.map((author) =>
      typeof author === "object" && author !== null && "id" in author
        ? (author as User).id
        : author
    );
    const fetchedAuthors = await payload.find({
      collection: "users",
      draft,
      where: {
        id: {
          in: authorIds
        }
      },
      overrideAccess: draft,
      pagination: false,
    });

    authors.push(...fetchedAuthors.docs);
  } else {
    authors.push(...(post.authors as User[]));
  }

  return (
    <MaxWidthWrapper>
      {draft && <LivePreviewListener />}

      <div className="flex max-w-4xl flex-col w-full py-8 px-4">
        <div className="flex justify-center w-full flex-col gap-5 pb-4">
          <h1 className="text-4xl font-extrabold tracking-tight dark:text-white md:leading-none lg:text-6xl">
            {post.title}
          </h1>
          <div className="flex items-center w-full flex-col">
            <div className="flex flex-col gap-4 w-full">
              {post.image && (
                <Image
                  alt={`${post.slug} cover image`}
                  src={(post.image as Media).url!}
                  className="rounded-[15px] shadow-lg w-full"
                  layout="responsive"
                  width={16}
                  height={9}
                  priority={true}
                />
              )}
              <div className="h-7 flex items-center flex-shrink-0 relative w-full">
                {authors.map((author, index) => (
                  <Image
                    key={author.username}
                    src={(author.avatar as Media).url!}
                    className="rounded-full w-8 h-8 absolute"
                    style={{
                      left: `${index * 1.1}rem`,
                      zIndex: authors.length + index,
                    }}
                    alt="author avatar"
                    width={30}
                    height={30}
                  />
                ))}

                <div className="w-full flex justify-between">
                  <span
                    className="whitespace-nowrap text-slate-300/80"
                    style={{
                      marginLeft: `${16 * (authors.length - 1) + 40}px`,
                    }}
                  >
                    {authors.map((author) => author.username).join(", ")}
                  </span>
                  <span className="text-slate-300/80">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 isolate">
          <RichText data={post.content} />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
