import { Block } from "payload"

export const text: Block = {
    slug: "text",
    interfaceName: "TextBlock",
    fields: [
        {
            name: "content",
            type: "richText",
            required: true,
        },
    ],
}