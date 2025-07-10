import { Metadata } from "next"
import { Posts } from "@/collections/posts"
// import type { Config, Media, Post } from "payload"

// const getImageUrl = (image?: Media | Config['db']['defaultIDType'] | null) => {
//   const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

//   let url = serverUrl + '/website-template-OG.webp'

//   if (image && typeof image === 'object' && 'url' in image) {
//     const ogUrl = image.sizes?.og?.url

//     url = ogUrl ? serverUrl + ogUrl : serverUrl + image.url
//   }

//   return url
// }

// export const generateMetadata = async ({ doc }: { doc: Partial<typeof Posts> }): Promise<Metadata> => {
//     // const ogImage = getImageUrl(doc.image);

//     return {
//         title: doc.title,
//         openGraph: {
//             title: doc.title,
//             description: doc.description || doc.content?.substring(0, 160),
//             url: Array.isArray(doc?.slug) ? doc?.slug.join('/') : '/',
//             // images: [
//             //     {
//             //         url: ogImage,
//             //         alt: doc.title,
//             //     },
//             // ],
//         }
//     }
// }