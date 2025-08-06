import { generateDraftPreviewURL } from "@/lib/utils";
import type { CollectionConfig } from "payload";
import { hero } from "./blocks/hero";
import { projectInfo } from "./blocks/project-info"

export const Pages: CollectionConfig = {
  slug: "pages",
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
  },
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ["title", "slug", "updatedAt"],
    livePreview: {
      url: ({ data, collectionConfig }) => {
        const path = generateDraftPreviewURL(
          typeof data?.slug === "string" ? data.slug : "",
          collectionConfig!.slug
        );

        return path;
      },
    },
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "layout",
              type: "blocks",
              blocks: [hero, projectInfo],
              required: true,
            },
          ],
        },
        {
          name: "meta",
          label: "SEO",
          fields: [],
        },
      ],
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
      },
    },
  ],
  versions: {
    drafts: {
        autosave: {
            interval: 1000
        }
    },
    maxPerDoc: 50
  }
};
