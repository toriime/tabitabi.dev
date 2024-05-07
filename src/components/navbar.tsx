"use client";
import Link from "next/link";
import Image from "next/image";
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

  const links = [
    {
      name: "Strona Główna",
      href: "/",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "O nas",
      href: "/about",
    },
  ];

  return (
    <nav
      className={`max-w-50 z-50 fixed top-0 left-0 w-full h-20 py-4 px-8 outline outline-1 outline-b outline-borderLight bg-slate-600/5 transition-all ${
        scrolled ? "!outline-0 bg-transparent" : ""
      }`}
    >
      <div className="relative w-full flex items-center">
        <h1
          className={`transition-all duration-300 ${
            scrolled ? "-translate-x-4 opacity-0" : ""
          } hidden sm:block h-full`}
        >
          <Image src="/wordmark.svg" className="" alt="TabiTabi" width={80} height={0} />
        </h1>
        <div className="absolute w-full flex items-center top-0 left-0">
          <div
            ref={navRef}
            className={`max-w-50 m-auto h-full rounded-full border border-borderLight p-1 flex relative group transition-all ${
              scrolled ? "shadow-md backdrop-blur bg-slate-600/10" : ""
            }`}
          >
            <div className="opacity-0 group-hover:opacity-100 absolute w-full h-full top-0 left-0 p-1 -translate-x-1 transition-opacity">
              <div
                ref={moverRef}
                className="outline outline-1 outline-slate-600/10 bg-borderLight rounded-full h-full p-2 transition-all w-0 duration-300"
              ></div>
            </div>
            <div className="flex items-center justify-center gap-2 z-10 overflow-hidden">
              {links.map((link, index) => (
                <Link
                  href={link.href}
                  className="border-borderLight h-full flex justify-center items-center py-2 px-4 rounded-full transition-colors text-slate-300"
                  onMouseOver={(ev) => handleMouseOver(ev)}
                  key={index}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <Link href={'https://volunteer.tabitabi.dev'}>
          <button className={`transition-all duration-300 ${scrolled ? "translate-x-4 opacity-0" : ""}`}>Dołacz do TabiTabi</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
