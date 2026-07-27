const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const siteBasePath =
  configuredBasePath === "/"
    ? ""
    : configuredBasePath.replace(/\/+$/, "");

export function withBasePath(path: string): string;
export function withBasePath(path: undefined): undefined;
export function withBasePath(path: string | undefined): string | undefined;
export function withBasePath(path: string | undefined): string | undefined {
  if (!path || !siteBasePath || !path.startsWith("/")) {
    return path;
  }

  if (path === siteBasePath || path.startsWith(`${siteBasePath}/`)) {
    return path;
  }

  return `${siteBasePath}${path}`;
}
