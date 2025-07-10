import { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    livePreview: {
      url: ({ data }) => `/blog/${data.slug}`,
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
    }
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
  ],
  versions: {
    drafts: {
      autosave: true,
    },
  },
};
