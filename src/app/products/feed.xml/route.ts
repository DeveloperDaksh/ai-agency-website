import { products } from "@/data/products";

export async function GET() {
  const DOMAIN = 'https://saraswatistitch.com';
  
  const rssItems = products
    .sort((a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime())
    .map((product) => `
    <item>
      <title>${product.name}</title>
      <link>${DOMAIN}/products/${product.slug}</link>
      <description>${product.tagline}</description>
      <pubDate>${new Date(product.launchDate).toUTCString()}</pubDate>
      <guid>${DOMAIN}/products/${product.slug}</guid>
      <category>${product.category}</category>
    </item>`)
    .join("");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Saraswati Stitch - Daily AI Innovations</title>
    <link>${DOMAIN}/products</link>
    <description>Cutting-edge AI products we&apos;re integrating every day.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${DOMAIN}/products/feed.xml" rel="self" type="application/rss+xml" />
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
