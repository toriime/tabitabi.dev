import { Block } from "payload"

export const hero: Block = {
    slug: "hero",
    fields: [
        {
            name: "badgeText",
            type: "text",
        },
        {
            name: "title",
            type: "text",
            required: true,
        },
        {
            name: "subtitle",
            type: "text",
        }
    ]
}