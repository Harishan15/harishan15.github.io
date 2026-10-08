// Version is encoded in the URL, so reloads, copied links and browser history
// always keep the chosen design without client-only redirects or theme flashes.
export function versionPath(pathname, version, basePath = '') {
  const base = basePath.replace(/\/+$/, '');
  let path = pathname || '/';
  if (base && (path === base || path.startsWith(`${base}/`))) path = path.slice(base.length) || '/';
  path = path.replace(/^\/portfolio-v1(?=\/|$)/, '') || '/';
  if (!path.endsWith('/')) path += '/';
  return `${base}${version === 'v1' ? '/portfolio-v1' : ''}${path}`;
}
