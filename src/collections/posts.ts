import { generateDraftPreviewURL } from "@/lib/utils-client"
import { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    livePreview: {
      url: ({ data, collectionConfig }) => generateDraftPreviewURL(data.slug, collectionConfig!.slug),
    },
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) return true;

      return {
        _status: {
          equals: "published",
        },
      };
    },
  },
  defaultPopulate: {
    authors: {
        avatar: true,
        username: true,
    },
    tags: {
      slug: true,
      name: true,
    },
  },
  fields: [
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "authors",
      type: "relationship",
      relationTo: "users",
      hasMany: true,
      required: true,
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
      required: true,
    },
    // {
    //     name: "createdAt",
    //     type: "date",
    //     defaultValue: () => new Date(),
    //     required: true,
    // },
    {
      name: "content",
      type: "richText",
      required: true,
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
      autosave: true,
    },
  },
};
