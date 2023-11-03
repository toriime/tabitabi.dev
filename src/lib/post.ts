import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import authors from "@/authors.json";

export type Post = {
  title: string;
  authors: {
    username: string;
    avatar: string;
  }[];
  date: Date;
  image?: string;
  description: string;
  content: string;
  slug: string;
  tags: string[];
};

class PostManager {
  protected postsMap: Map<string, Post> = new Map();
  protected tags: string[] = [];

  constructor() {
    this.getPosts()
  }

  public get posts(): Post[] {
    const toReturn: Post[] = [];
    this.postsMap.forEach((value) => {
      toReturn.push(value);
    });

    return toReturn; 
  }

  public get tagsList(): string[] {
    return this.tags;
  }

  public getPostsByTag(tag: string): Post[] {
    const toReturn: Post[] = [];
    this.postsMap.forEach((value) => {
      if (value.tags.includes(tag)) {
        toReturn.push(value);
      }
    });

    return toReturn; 
  }

  public getPost(slug: string): Post | undefined {
    return this.postsMap.get(slug);
  }

  protected getPosts(): void {
    const postsDir = path.join(process.cwd(), "src", "posts");
  
    const fileNames = fs.readdirSync(postsDir);
  
    const posts = fileNames.map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
  
      const fullPath = path.join(postsDir, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
  
      const { data, content } = matter(fileContents);

      const postAuthors = data.authors.map((author: string) => {
        return authors.find((a) => a.username === author);
      });

      data.tags.forEach((tag: string) => {
        if (!this.tags.includes(tag)) {
          this.tags.push(tag);
        }
      });

      this.postsMap.set(slug, {
        ...(data as Post),
        slug,
        content,
        authors: postAuthors,
        date: new Date(data.date),
      });
    });
  };
}

const postManager = new PostManager();

export default postManager;
