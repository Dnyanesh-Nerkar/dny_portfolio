import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { Providers } from "@/components/layout/Providers";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";
import "./globals.css";

// Vendored rather than next/font/google: Google intermittently serves font URLs with no file
// extension, which crashes the next/font/google loader and fails the build.
const heading = localFont({
  src: [
    { path: "./fonts/space-grotesk-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/space-grotesk-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
});
const body = localFont({
  src: [
    { path: "./fonts/inter-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});
const mono = localFont({
  src: [
    { path: "./fonts/jetbrains-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/jetbrains-mono-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-mono",
  display: "swap",
});

const title = "Dnyanesh Nerkar | MDM and Data Governance";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: profile.description,
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg" },
  openGraph: { title, description: profile.description, type: "profile", url: "/", siteName: profile.shortName },
  twitter: { card: "summary_large_image", title, description: profile.description },
};

export const viewport: Viewport = {
  themeColor: [{ color: "#0B0F14" }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${heading.variable} ${body.variable} ${mono.variable}`}>
      <body id="top">
        <noscript>
          <style>{`[data-reveal],.merge-final{opacity:1!important;transform:none!important}.merge-record{display:none!important}`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
        >
          Skip to content
        </a>
        <Providers>
          <Nav />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
