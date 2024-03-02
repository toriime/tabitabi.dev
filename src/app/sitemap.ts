import postManager from "@/lib/post";

export default async function sitemap() {
  const routes = ["", "/blog", "/about"].map((route) => ({
    lastModified: new Date().toISOString().split("T")[0],
    url: `https://tabitabi.dev${route}`,
  }));

  const blogPosts = postManager.posts.map((post) => ({
    lastModified: post.date.toISOString().split("T")[0],
    url: `https://tabitabi.dev/blog/${post.slug}`,
  }));

  return [...blogPosts, ...routes];
}
