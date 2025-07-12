import { CollectionConfig } from "payload"

export const Users: CollectionConfig = {
    slug: 'users',
    // TODO: kurwa zmienić to
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'username',
    },
    auth: true,
    fields: [
        {
            name: 'username',
            type: 'text',
            required: true,
            unique: true,
        },
        {
            name: 'email',
            type: 'email',
            required: true,
        },
        {
            name: 'avatar',
            type: 'upload',
            relationTo: 'media',
            // required: true,
        }
    ]
}