import { Block } from "payload";

export const hero: Block = {
  slug: "hero",
  interfaceName: "HeroBlock",
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
    // {
    //   name: "addMagicText",
    //   type: "checkbox",
    //   defaultValue: false,
    // },
    {
      name: "titleMagicText",
      type: "text",
      admin: {
        description: "Animated text in the title. Please add a placeholder to the title field if you want to use this - {magic_text}",
      }
    //   admin: {
    //     condition: (data) => {
    //       if (data.addMagicText) {
    //         return true;
    //       }

    //       return false;
    //     },
    //   },
    },
    {
      name: "subtitle",
      type: "text",
    },
  ],
};
