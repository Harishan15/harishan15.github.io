"use client";

import { usePathname } from "next/navigation";
import { siteBasePath } from "@/app/site-paths";
import { versionPath } from "./version-paths.mjs";

export default function VersionSwitch({ version }: { version: "v1" | "v2" }) {
  const pathname = usePathname();
  return (
    <nav className={`portfolio-version-switch version-${version}`} aria-label="Portfolio design switch">
      <span className="version-switch-label">VIEW IN</span>
      <a href={versionPath(pathname, "v1", siteBasePath)} aria-current={version === "v1" ? "page" : undefined} title="Switch the whole site to the original design">Portfolio V1</a>
      <a href={versionPath(pathname, "v2", siteBasePath)} aria-current={version === "v2" ? "page" : undefined} title="Switch the whole site to the new design">Portfolio V2</a>
    </nav>
  );
}
