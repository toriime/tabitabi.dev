import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

const collectionUrls: { [key: string]: string } = {
  posts: "/blog",
};

export async function GET(request: Request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");
  const collection = searchParams.get("collection");

  // Check the secret and next parameters
  // This secret should only be known to this Route Handler and the CMS
  if (process.env.DRAFT_SECRET !== secret || !slug || !collection) {
    return new Response("Invalid token", { status: 401 });
  }

  // Enable Draft Mode by setting the cookie
  const draft = await draftMode();
  draft.enable();

  // Redirect to the path from the fetched post
  // We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities
  redirect(collectionUrls[collection] + "/" + slug);
}
