import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        gradient:
          "linear-gradient(135deg,var(--purple) 0%,var(--pink) 20%,var(--orange) 100%)",
      },
      colors: {
        borderLight: "rgba(226,232,255,.1)",
        title: "#e2e8ff",
        desc: "#e2e8ff8c",
        foreground: `rgb(var(--foreground-rgb))`,
        backgroundStart: `rgb(var(--background-start-rgb))`,
        backgroundEnd: `rgb(var(--background-end-rgb))`,
        background: `rgb(var(--background-rgb))`,
        input: `hsl(var(--input))`,
        popover: `hsl(var(--popover))`,
        popoverForeground: `hsl(var(--popover-foreground))`,
      },
    },
  },
};
export default config;
