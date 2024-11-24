import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import LayoutWrapper from "@/components/LayoutWrapper/LayoutWrapper";
import { SessionWrapper } from "@/components/SessionWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PopcornGuide - Your Ultimate Movie Guide",
  description: "Discover, organize, and explore a universe of films with PopcornGuide. Search for titles, save your favorites, and find your next perfect marathon in one easy-to-use, intuitive platform.",
  keywords: ["movies", "films", "cinema", "movie theaters", "playhouse"],
  openGraph: {
    images: [`${process.env.PROJECT_URL}/logo.png`]
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <LayoutWrapper>
            <Header />
          </LayoutWrapper>
          {children}
        </body>
      </html>
    </SessionWrapper>
  );
}
