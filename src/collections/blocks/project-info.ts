import { Block } from "payload";

export const projectInfoCard: Block = {
  slug: "projectInfoCard",
  interfaceName: "ProjectInfoCardBlock",
  fields: [
    {
      name: "icon",
      type: "select",
      options: [
        {
          label: "Brush",
          value: "brush",
        },
        {
          label: "Cog",
          value: "cog",
        },
        {
          label: "Languages",
          value: "languages",
        },
        {
          label: "Heart",
          value: "heart",
        }
      ],
      required: true,
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
  ],
};

export const projectInfo: Block = {
  slug: "projectInfo",
  interfaceName: "ProjectInfoBlock",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "subtitle",
      type: "text",
    },
    {
      name: "infoItems",
      type: "blocks",
      blocks: [projectInfoCard],
      required: true,
    },
  ],
};
