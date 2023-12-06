import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/style/globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TabTabi",
  description: "Oficjalna strona TabiTabi Development",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/wordmark.svg" />
      </head>
      <body className={inter.className + "h-full"}>
        <NextTopLoader
          color="#f48fb1"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          zIndex={1600}
          showAtBottom={false}
        />
        <NavBar />
        <main className="mt-[80px] mb-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
