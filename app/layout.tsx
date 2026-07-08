import type { Metadata } from "next";
import Header from "@/components/layout/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/layout/footer";
import ThemeSwitch from "@/components/ui/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bennet Ukoh | Frontend Engineer",
  description:
    "Frontend Engineer specializing in React and Next.js — building fast, accessible, and responsive web applications.",
  openGraph: {
    title: "Bennet Ukoh | Frontend Engineer",
    description:
      "Frontend Engineer specializing in React and Next.js — building fast, accessible, and responsive web applications.",
    url: "https://bennetukoh.vercel.app",
    siteName: "Bennet Ukoh — Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Bennet Ukoh | Frontend Engineer",
    description:
      "Frontend Engineer specializing in React and Next.js — building fast, accessible, and responsive web applications.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative bg-zinc-50 pt-28 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 sm:pt-28`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
