import type { Metadata } from "next";
import VersionSwitch from "@/app/components/VersionSwitch";
import "@/app/v2/styles.css";
import "@/app/v2/case-studies.css";
import "@/app/components/version-switch.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://harishan15.github.io";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Harishan Rajendrakumar — Lead UI/UX Engineer",
  description: "Designing clarity. Building what’s next. Product design and frontend engineering by Harishan Rajendrakumar.",
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "Harishan — Design meets engineering", description: "Product design, frontend engineering and thoughtfully connected experiences.", type: "website" },
};

export default function NewDesignLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body data-portfolio-version="v2">{children}<VersionSwitch version="v2" /></body></html>;
}
