import { Page } from '@/payload-types'
import React from 'react'
import HeroBlock from './hero'
import ProjectInfoBlock from './project-info'

export default function RenderBlocks({ blocks }: { blocks: Page['layout'] }) {
    console.log(blocks);

  return (
    blocks?.map((block, index) => {
        switch (block.blockType) {
            case 'hero':
                return <HeroBlock key={index} data={block} />;
            case 'projectInfo':
                return <ProjectInfoBlock key={index} data={block} />;
            default:
                return (
                    <div key={index} className="border border-red-500 p-4 my-4">
                        <strong>Unrecognized block type:</strong> {block.blockType}
                    </div>
                );
        }
    })
  )
}
