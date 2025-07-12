"use client";
import React, { useEffect, useMemo, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Card from "@/components/card";
import { PaginatedDocs } from "payload"
import { Media, Post, PostsSelect, Tag, User } from "@/payload-types"

interface BlogListProps {
  posts: PaginatedDocs<Post>;
  tags?: string[];
}

const BlogList = ({ posts, tags = [] }: BlogListProps) => {
  const [tag, setTag] = useState<string | undefined>(undefined);
  const [active, setActive] = useState<boolean>(false);

  // const filteredPosts = useMemo(() => {
  //   if (!tag) {
  //     return posts;
  //   }

  //   return posts.filter((post) => post.tags.includes(tag));
  // }, [posts, tag]);

  return (
    <>
      {/* <div className="flex w-full items-center justify-start pl-4 pb-5 md:pl-0 md:pb-0 md:justify-end md:pr-4">
        <Select
          onValueChange={(value) => {
            if (value === "All") {
              setTag(undefined);
              return;
            }
            setTag(value);
          }}
          defaultValue="All"
          onOpenChange={(open) => setActive(open)}
        >
          <SelectTrigger className="w-[180px] mb-5 mr-3">
            <SelectValue placeholder="Wybierz tag" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value={"All"}>Wszystkie</SelectItem>
              {tags.map((tag, index) => {
                return (
                  <SelectItem key={index} value={tag}>
                    {tag}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div> */}

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
        {posts.docs.map((post, index) => (
          <Card
            disabled={active}
            key={index}
            authors={post.authors as User[]}
            date={new Date(post.createdAt)}
            image={(post.image as Media).url!}
            link={`/blog/${post.slug}`}
            tags={post.tags as Tag[]}
            title={post.title}
          />
        ))}
      </div>
    </>
  );
};

export default BlogList;
