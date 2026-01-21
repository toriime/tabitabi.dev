import { GlobalConfig } from "payload"

export const Footer: GlobalConfig = {
    slug: "footer",
    fields: [
        {
            label: 'Description',
            name: 'description',
            type: 'text',
            required: true,
        },
        {
            name: 'columns',
            type: 'array',
            required: true,
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'links',
                    type: 'array',
                    required: true,
                    fields: [
                        {
                            name: 'label',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'url',
                            type: 'text',
                            required: true,
                        }
                    ]
                }
            ]
        }
    ]
}