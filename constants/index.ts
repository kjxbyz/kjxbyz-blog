export const cacheLngKey: string = "__blog_lng__";
export const cacheThemeKey: string = "__blog_theme__";
export const basePath =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "/portal" : "";
