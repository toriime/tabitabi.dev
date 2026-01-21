import { type ClassValue, clsx } from "clsx";
import { getPayload } from "payload"
import { twMerge } from "tailwind-merge";
import configPromise from '@payload-config';
import type { Config } from '@/payload-types'
import { unstable_cache } from "next/cache"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Global = keyof Config['globals'];

const getGlobal = async(slug: Global, depth = 0) => {
  const payload = await getPayload({ config: configPromise })

  const global = await payload.findGlobal({
    slug,
    depth,
  })

  return global
}

export const getCachedGlobal = (slug: Global, depth = 0) => 
  unstable_cache(async () => getGlobal(slug, depth), [slug], {
    tags: [`global-${slug}`],
    revalidate: 600,
  });
