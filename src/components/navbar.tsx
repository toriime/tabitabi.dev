"use client";
import { useRef, useEffect, useState } from "react";

const NavBar = () => {
  const moverRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      if (window.scrollY <= 30) return setScrolled(false);
      setScrolled(true);
    };

    if (window.scrollY >= 30) setScrolled(true);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseOver = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLAnchorElement;
    moverRef.current!.style.transform = `translateX(${target.offsetLeft}px)`;
    moverRef.current!.style.width = `${target.offsetWidth}px`;
  };

  return (
    <nav
      className={`max-w-50 z-50 fixed top-0 left-0 w-full h-20 py-4 px-8 outline outline-1 outline-b outline-slate-600/50 bg-slate-600/5 flex items-center transition-all ${
        scrolled ? "!outline-0 bg-transparent" : ""
      }`}
    >
      <h1 className={`transition-all duration-300 ${scrolled ? "-translate-x-4 opacity-0" : ""}`}>TabiTabi</h1>
      <div ref={navRef} className={`max-w-50 m-auto h-full rounded-full border border-slate-600/50 p-1 flex relative group transition-all ${scrolled ? 'shadow-md backdrop-blur bg-slate-600/10' : ''}`}>
        <div className="opacity-0 group-hover:opacity-100 absolute w-full h-full top-0 left-0 p-1 -translate-x-1 transition-opacity">
          <div
            ref={moverRef}
            className="bg-slate-800/80 outline outline-1 outline-slate-600/80 rounded-full h-full p-2 transition-all duration-300"
          ></div>
        </div>
        <div className="flex items-center justify-center gap-2 z-10 overflow-hidden">
          <a
            href="/"
            className="nav-link h-full flex justify-center items-center py-2 px-4 rounded-full transition-colors"
            onMouseOver={(ev) => handleMouseOver(ev)}
          >
            Strona Główna
          </a>
          <a
            href="/blog"
            className="nav-link h-full flex justify-center items-center py-2 px-4 rounded-full transition-colors"
            onMouseOver={(ev) => handleMouseOver(ev)}
          >
            Blog
          </a>
          <a
            href="/about"
            className="nav-link h-full flex justify-center items-center py-2 px-4 rounded-full transition-colors"
            onMouseOver={(ev) => handleMouseOver(ev)}
          >
            O nas
          </a>
        </div>
      </div>
      <button className={`transition-all duration-300 ${scrolled ? "translate-x-4 opacity-0" : ""}`}>Newsletter</button>
    </nav>
  );
};

export default NavBar;