import type { HeroBlock } from '@/payload-types'
import React from 'react'

export default function HeroBlock({ data }: { data: HeroBlock }) {
  const renderTitle = () => {
    const titleParts = data.title.split('{magic_text}');
    
    if (titleParts.length > 1) {
      return (
        <>
          {titleParts[0]}
          <span className="magic-text-animate whitespace-nowrap">
            {data.titleMagicText}
          </span>
          {titleParts[1]}
        </>
      );
    }
    
    return data.title;
  };

  return (
    <div className="w-full h-[calc(100vh-80px)] justify-center items-center flex">
        <div className="flex flex-col items-center">
          <div className="header-badge mx-auto mb-4 flex max-w-fit items-center space-x-2 overflow-hidden rounded-full px-4 py-1">
            <p className="header-text">{data.badgeText}</p>
          </div>
          <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-6xl mb-3 text-center text-title">
            {renderTitle()}
          </h1>
          <p className="text-slate-300 text-center text-lg md:text-xl font-semibold">
            {data.subtitle}
          </p>

          <form className="flex gap-3 items-center m-3">
            <input
              type="text"
              //disable white border on focus
              className="rounded-xl font-semibold w-[70%] bg-transparent light-border text-white p-[10px_15px] focus:outline-none focus:border-borderLight disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Tymczasowo niedostępne"
              disabled={true}
            />
            <button
              type="submit"
              className="rounded-lg relative text-white text-sm p-3 button-gradient w-[7rem] font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={true}
            >
              Newsletter
            </button>
          </form>
        </div>
      </div>
  )
}
