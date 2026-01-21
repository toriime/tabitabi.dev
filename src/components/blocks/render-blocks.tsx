import { Page } from "@/payload-types";
import React from "react";
import HeroBlock from "./hero";
import ProjectInfoBlock from "./project-info";
import PageHeaderBlock from "./page-header";
import TextBlock from "./text"

export default function RenderBlocks({ blocks }: { blocks: Page["layout"] }) {
  return (
    <div className={blocks.find(b => b.blockType === "hero") ? "" : "pt-8 max-w-[1200px] w-full flex px-2 flex-col"}>
      {blocks?.map((block, index) => {
        switch (block.blockType) {
          case "hero":
            return <HeroBlock key={index} data={block} />;
          case "projectInfo":
            return <ProjectInfoBlock key={index} data={block} />;
          case "page-header":
            return <PageHeaderBlock key={index} data={block} />;
          case "text":
            return <TextBlock key={index} data={block} />;
          default:
            return (
              <div key={index} className="border border-red-500 p-4 my-4">
                <strong>Unrecognized block type:</strong> {block.blockType}
              </div>
            );
        }
      })}
    </div>
  );
}
