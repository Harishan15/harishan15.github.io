import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "harishan-ux-portfolio.hxrishxn.chatgpt.site";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const baseUrl = new URL(`${protocol}://${host}`);
  const title = "Harishan Rajendrakumar — Lead UI/UX Engineer";
  const description =
    "Portfolio and case studies from a Lead UI/UX Engineer designing responsive travel booking products and building them in React and Next.js.";

  return {
    metadataBase: baseUrl,
    title,
    description,
    keywords: [
      "Harishan Rajendrakumar",
      "UI UX Engineer",
      "Product Designer",
      "Frontend Developer",
      "React",
      "Next.js",
      "Travel UX",
      "Case Studies",
    ],
    authors: [{ name: "Harishan Rajendrakumar" }],
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: new URL("/og.png", baseUrl).toString(),
          width: 1792,
          height: 921,
          alt: "Harishan Rajendrakumar — Lead UI/UX Engineer portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL("/og.png", baseUrl).toString()],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
