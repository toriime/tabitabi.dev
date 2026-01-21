import type { ProjectInfoBlock } from "@/payload-types";
import { BrushIcon, CogIcon, HeartIcon, LanguagesIcon } from "lucide-react"
import React from "react";

const getIconComponent = (iconName: string) => {
  switch (iconName.toLocaleLowerCase()) {
    case "brush":
        return <BrushIcon className="text-title" />;
    case "cog":
        return <CogIcon className="text-title" />;
    case "languages":
        return <LanguagesIcon className="text-title" />;
    case "heart":
        return <HeartIcon className="text-title" />;
  }
}

export default function ProjectInfoBlock({ data }: { data: ProjectInfoBlock }) {
  return (
    <div className="relative w-full p-[100px_82px_0px]" id="toriime">
      {/* nagłówek */}
      <div className="relative z-10 flex flex-col w-full">
        <h1 className="w-full md:text-5xl mb-3 text-slate-200 text-center">
          <span className="text-6xl font-semibold magic-text-animate bottom-border-gradient py-1 whitespace-nowrap">
            {data.title}
          </span>
          {data.subtitle && <p className="text-lg pt-4">{data.subtitle}</p>}
        </h1>
      </div>
      {/* informacje o projekcie */}
      <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 mt-10">
        {data.infoItems.map((item, index) => (
          <div
            key={index}
            className="w-full isolate relative rounded-xl p-5 border-[1px] border-borderLight h-fulls"
          >
            <div className="flex flex-col items-center">
              <span className="border border-borderLight rounded-full p-2 flex items-center justify-center mb-2 backdrop-blur bg-slate-600/10">
                {getIconComponent(item.icon)}
              </span>
              <h3 className="font-bold text-1xl text-center text-title">
                {item.title}
              </h3>
              <p className="font-medium text-md text-center text-desc">
                {item.description}
              </p>
              {/* miejsce na zdjęcie */}
            </div>
          </div>
        ))}

        
      </div>
    </div>
  );
}
