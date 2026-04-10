import fs from 'fs';
import path from 'path';
import { products } from '../src/data/products.ts';

const DOMAIN = 'https://saraswatistitch.com';

const staticPages = [
  '',
  '/about',
  '/contact',
  '/services',
  '/pricing',
  '/case-studies',
  '/faq',
  '/testimonials',
  '/blog',
  '/resources',
  '/privacy-policy',
  '/terms-of-service',
  '/cookie-policy',
];

const subPages = [
  '/services/ai-strategy-consulting',
  '/services/custom-ai-development',
  '/services/workflow-automation',
  '/services/rapid-deployment',
  '/services/enterprise-security',
  '/services/ongoing-optimization',
  '/pricing/starter',
  '/pricing/professional',
  '/pricing/enterprise',
  '/case-studies/ai-powered-customer-service',
  '/case-studies/predictive-supply-chain',
  '/case-studies/automated-content-engine',
];

function generateSitemap() {
  const productPages = products.map(p => `/products/${p.slug}`);
  const allPages = [...staticPages, '/products', ...productPages, ...subPages];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `
  <url>
    <loc>${DOMAIN}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.includes('/products/') ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : page.includes('/products/') ? '0.8' : '0.6'}</priority>
  </url>`).join('')}
</urlset>`;

  const publicPath = path.resolve(process.cwd(), 'public/sitemap.xml');
  fs.writeFileSync(publicPath, sitemap);
  console.log(`✅ Sitemap successfully generated at ${publicPath}`);
}

generateSitemap();
