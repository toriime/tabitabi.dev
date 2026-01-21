import MaxWidthWrapper from "@/components/max-width-wrapper";
import BlogList from "./BlogList";
import { getPayload } from "payload";
import payloadConfig from "@payload-config";
import { draftMode } from "next/headers";
import { Suspense } from "react";
import BlogListLoading from "./_components/loading";

export default async function BlogFrontPage() {
  const { isEnabled: draft } = await draftMode();

  const payload = await getPayload({ config: payloadConfig });
  const posts = await payload.find({
    collection: "posts",
    draft,
    limit: 100,
    overrideAccess: draft,
    pagination: false,
    sort: "-createdAt",
    populate: {
      users: {
        avatar: true,
        username: true,
      },
    },
  });

  return (
    <MaxWidthWrapper>
      <div className="max-w-[1300px] flex flex-col w-full py-8">
        <div className="flex flex-col bottom-border-gradient mb-8">
          <div className="flex w-full justify-center text-4xl pb-4 whitespace-nowrap">
            Blog TabiTabi
          </div>
          <div className="flex w-full justify-center text-slate-300/80 text-lg pb-4 text-center">
            Tutaj znajdziesz wszystkie posty związane z naszymi projektami.
          </div>
        </div>

        <Suspense fallback={<BlogListLoading />}>
          <BlogList posts={posts} />
        </Suspense>
      </div>
    </MaxWidthWrapper>
  );
}
