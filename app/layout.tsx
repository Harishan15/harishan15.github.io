import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harishan Rajendrakumar — Lead UI/UX Engineer",
  description:
    "Portfolio of Harishan Rajendrakumar, a Lead UI/UX Engineer and frontend developer designing responsive travel booking products.",
  keywords: [
    "Harishan Rajendrakumar",
    "UI UX Engineer",
    "Product Designer",
    "Frontend Developer",
    "React",
    "Next.js",
    "Travel UX",
  ],
  authors: [{ name: "Harishan Rajendrakumar" }],
  openGraph: {
    title: "Harishan Rajendrakumar — Lead UI/UX Engineer",
    description:
      "Designing and building clear, responsive booking experiences for complex travel products.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Harishan Rajendrakumar — Lead UI/UX Engineer",
    description:
      "Designing and building clear, responsive booking experiences for complex travel products.",
  },
};

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
