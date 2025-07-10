import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/style/globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import NextTopLoader from "nextjs-toploader";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
};

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: "TabiTabi",
    template: "%s | TabiTabi",
  },
  keywords: [
    "anime",
    "tłumaczenie",
    "Odcinki",
    "subs",
    "napisy",
    "lista aniem",
    "anime-online",
    "polski",
    "anime po polsku",
    "odcinki",
    "online",
    "pl",
    "lista",
    "anime",
    "anime-odcinki",
    "blog",
    "dev",
  ],
  description:
    "TabiTabi Development to grupa hobbistycznych developerów, którzy tworzą projekty związane z anime. Obecnie naszym flagowym projektem jest Toriime",
  alternates: {
    canonical: getBaseUrl(),
  },
  openGraph: {
    title: {
      default: "TabiTabi",
      template: "%s | TabiTabi",
    },
    description:
      "TabiTabi Development to grupa hobbistycznych developerów, którzy tworzą projekty związane z anime. Obecnie naszym flagowym projektem jest Toriime",
    type: "website",
    url: getBaseUrl(),
    siteName: "TabiTabi",
    images: [
      {
        url: `${getBaseUrl()}/wordmark.svg`,
        alt: "TabiTabi",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "TabiTabi",
    images: [
      {
        url: `${getBaseUrl()}/wordmark.svg`,
        alt: "TabiTabi",
      },
    ],
    description:
      "TabiTabi to serwis dla fanów anime powstały po tym jak projekt Twoja Mała Japonia ogłosił zamknięcie. Początkowo TabiTabi miało pełnić rolę strony zastępczej dla TMJ, jednak z biegiem czasu oraz po wysłuchaniu propozycji oraz opinii użytkowników, strona zaczęła rozwijać się w pełnoprawny serwis mający na celu ułatwienie użytkownikom dostępu do informacji o anime w łatwy oraz przejrzysty sposób.",
  },
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
        <Script
          defer
          src="https://analytics.tabitabi.dev/script.js"
          data-website-id="5d6cbb87-b955-4e1d-b5e1-41587c1b0392"
        />
      </body>
    </html>
  );
}
