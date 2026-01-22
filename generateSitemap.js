// generateSitemap.js - Run this script to generate your sitemap
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://codekage.pxxl.xyz'; // Replace with your actual domain
const currentDate = new Date().toISOString();

// Define your site's routes and their priorities
const routes = [
  {
    url: '/',
    changefreq: 'monthly',
    priority: '1.0',
    lastmod: currentDate
  },
  {
    url: '/about',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: currentDate
  },
  {
    url: '/projects',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: currentDate
  },
  {
    url: '/skills',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: currentDate
  },
  {
    url: '/contact',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: currentDate
  }
];

// Generate XML sitemap content
const generateSitemap = (routes) => {
  const urls = routes.map(route => `
  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
};

// Write sitemap to public folder
const sitemap = generateSitemap(routes);
const publicDir = path.join(__dirname, 'public');

// Create public directory if it doesn't exist
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

// Optional: Generate robots.txt
const robotsTxt = `User-agent: *
Allow: /

Disallow: /admin/
Disallow: /private/

Sitemap: ${baseUrl}/sitemap.xml`;

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);

export { generateSitemap };