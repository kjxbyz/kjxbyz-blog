export const cacheLngKey: string = "__blog_lng__";
export const cacheThemeKey: string = "__blog_theme__";

export const basePath =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "" : "";

export const domain =
  process.env.NODE_ENV === "production"
    ? `https://www.kjxbyz.com${basePath}`
    : `http://localhost:3000${basePath}`;

export const sitemapUrls = [];

export const manifest = {
  name: "KJXBYZ's Blog",
  short_name: "KJXBYZ",
  description: 'It"s great to be great , but it"s greater to be human.',
  start_url: `${basePath}/`,
  display: "standalone",
  background_color: "#fff",
  theme_color: "#fff",
  icons: [
    {
      src: `${domain}/logo.png`,
      sizes: "any",
      type: "image/jpg",
    },
  ],
};
