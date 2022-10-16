export function formatCookie(cookie: Partial<{ [key: string]: string }>) {
  return Object.entries(cookie)
    .map(([key, value]) => `${key}=${value};`)
    .join(" ");
}
