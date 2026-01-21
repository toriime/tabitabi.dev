import { draftMode } from "next/headers"
import { getPayload, RequiredDataFromCollectionSlug } from "payload"
import configPromise from '@payload-config';
import { cache } from "react"
import MaxWidthWrapper from "@/components/max-width-wrapper"
import RenderBlocks from "@/components/blocks/render-blocks"
import { LivePreviewListener } from "@/components/livePreviewListener"

type Props = {
    params: Promise<{ slug: string }>
}

export default async function Page({ params }: Props) {
    const { isEnabled: draft } = await draftMode();
    const { slug = 'index' } = await params;
    const decodedSlug = decodeURIComponent(slug);
    const page: RequiredDataFromCollectionSlug<'pages'> | null = await queryPageBySlug({ slug: decodedSlug });

    if (!page) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
            </div>
        )
    }

    const { layout } = page;

    return (
        <MaxWidthWrapper>
            {draft && <LivePreviewListener />}

            <RenderBlocks blocks={layout} />
        </MaxWidthWrapper>
    )
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
    const { isEnabled: draft } = await draftMode();

    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
        collection: 'pages',
        draft,
        limit: 1,
        pagination: false,
        overrideAccess: draft,
        where: {
            slug: {
                equals: slug,
            }
        }

    });

    return result?.docs?.[0] || null;
})