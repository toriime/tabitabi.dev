import { Block } from "payload"

export const pageHeader: Block = {
    slug: "page-header",
    interfaceName: "PageHeaderBlock",
    fields: [
        {
            name: "title",
            type: "text",
            required: true,
        },
        {
            name: "subtitle",
            type: "text",
            required: false,
        },
    ],
}