import RSS from "rss";
import { allPosts } from "contentlayer/generated";
import { host } from "@/constants";
import { languages } from "@/i18n/settings";

export async function GET() {
  const feed = new RSS({
    title: "Blog posts | RSS Feed",
    description: "Welcome to blog posts!",
    site_url: host,
    feed_url: `${host}/rss.xml`,
    image_url: `${host}/logo.jpg`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, @kjxbyz`,
  });

  allPosts
    .filter((post) =>
      new RegExp(`^(/(${languages.join("|")}))?/blog/?$`, "i").test(post.slug),
    )
    .sort((a, b) => {
      return new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1;
    })
    .map((post) => {
      feed.item({
        title: post.title,
        description: post.summary || "",
        url: `${host}/${post.slug}`,
        date: post.publishedAt,
      });
    });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}
