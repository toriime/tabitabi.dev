import { CollectionConfig } from "payload"

export const Tags: CollectionConfig = {
    slug: 'tags',
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
        },
        {
            name: 'name',
            type: 'text',
            required: true,
        }
    ]
}