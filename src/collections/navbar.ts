import { GlobalConfig } from "payload"

export const Navbar: GlobalConfig = {
    slug: "nav",
    fields: [
        {
            name: 'items',
            type: 'array',
            required: true,
            fields: [
                {
                    name: 'label',
                    type: 'text',
                    required: false,
                },
                {
                    name: 'page',
                    type: 'relationship',
                    relationTo: 'pages',
                    required: false,
                },
                {
                    name: 'url',
                    type: 'text',
                    required: false,
                }
            ]
        }
    ],
}