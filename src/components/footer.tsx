import { getCachedGlobal } from "@/lib/utils"
import type { Footer } from "@/payload-types"
import Link from "next/link";
import React from "react";


const Footer = async () => {
  const footerContent = await getCachedGlobal('footer', 2)() as Footer;

  return (
    <footer className="w-full p-4 flex flex-col items-center justify-center top-border-gradient">
      <div className="max-w-[1000px] flex md:flex-row flex-col w-full pb-20 pt-4 gap-14">
        <div className="w-full flex flex-col gap-4">
          <div className="text-xl font-bold">TabiTabi</div>
          <div className="text-slate-300">
            {footerContent?.description}
          </div>
        </div>
        {
          footerContent?.columns?.map((column, index) => (
            <div className="flex flex-col pr-4 gap-4" key={index}>
              <div className="text-slate-300">{column.title}</div>
              <div className="flex flex-col gap-2 whitespace-nowrap">
                {
                  column.links?.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.url}
                      data-umami-event="toriime-link-clicked"
                      className="text-slate-300/80 hover:text-slate-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
      <div className="max-w-[1300px] flex w-full p-2 items-center top-border-gradient justify-between">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} TabiTabi Development
        </p>
        {Math.random() * 10000 < 5 && (
          <p className="text-gray-600 text-sm">Malezjaa was here</p>
        )}
        <Link
          className="text-gray-600 hover:text-gray-400 text-sm transition-colors"
          data-umami-event="privacy-link-clicked"
          href="/privacy"
        >
          Polityka Prywatności
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
