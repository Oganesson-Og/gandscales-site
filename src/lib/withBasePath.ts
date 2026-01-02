const base = process.env.NEXT_PUBLIC_BASE_PATH || ""

export function withBasePath(path: string) {
  if (!path) return path
  if (path.startsWith("http")) return path
  if (!base) return path
  if (path.startsWith(base + "/") || path === base) return path
  return path.startsWith("/") ? `${base}${path}` : `${base}/${path}`
}
