"use client"
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-4 flex flex-col items-center justify-center top-border-gradient">
      <div className="max-w-[1000px] flex md:flex-row flex-col w-full pb-20 pt-4 gap-14">
        <div className="w-full flex flex-col gap-4">
          <div className="text-xl font-bold">TabiTabi</div>
          <div className="text-slate-300">
            Jesteśmy grupa osób zajmującą się rozpierdalaniem wszystkiego co
            tworzymy, i tak powstał TabiTabi Development.
          </div>
        </div>
        <div className="flex flex-col pr-4 gap-4">
          <div className="text-slate-300">Projekty</div>
          <div className="flex flex-col gap-2 whitespace-nowrap">
            <a
              href="https://toriime.pl"
              data-umami-event="toriime-link-clicked"
              className="text-slate-300/80 hover:text-slate-300 transition-colors"
            >
              Toriime
            </a>
          </div>
        </div>
        <div className="flex flex-col pr-4 gap-4">
          <div className="text-slate-300">Kontakt</div>
          <div className="flex flex-col gap-2 whitespace-nowrap">
            <Link
              href="https://discord.gg/TgzFytuvFs"
              data-umami-event="discord-link-clicked"
              className="text-slate-300/80 hover:text-slate-300 transition-colors"
            >
              Serwer Discord
            </Link>
            <Link
              href="mailto:administracja@mail.toriime.pl"
              data-umami-event="email-link-clicked"
              className="text-slate-300/80 hover:text-slate-300 transition-colors"
            >
              E-Mail
            </Link>
          </div>
        </div>
        <div className="flex flex-col pr-4">
          <div className="text-slate-300 mb-4">TabiTabi</div>
          <div className="flex flex-col gap-2 whitespace-nowrap">
            <Link
              href="/about"
              data-umami-event="footer-about-link-clicked"
              className="text-slate-300/80 hover:text-slate-300 transition-colors"
            >
              O nas
            </Link>
            <Link
              href="/blog"
              data-umami-event="footer-blog-link-clicked"
              className="text-slate-300/80 hover:text-slate-300 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="https://github.com/toriime"
              data-umami-event="footer-github-link-clicked"
              className="text-slate-300/80 hover:text-slate-300 transition-colors"
            >
              Github
            </Link>
          </div>
        </div>
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
