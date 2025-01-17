import { promises as fs } from 'fs';
import path from 'path';

export default defineNuxtPlugin(() => {
  // 確保插件僅在伺服器端執行
  if (!process.server) return;

  const sitemapConfig = {
    hostname: 'https://chen-jui.vercel.app/', // 線上 URL
    gzip: true,
    routes: ['/', '/about'], // 必須存在的路徑
  };

  const robotsConfig = `
    UserAgent: *
    Disallow: 
    Sitemap: https://chen-jui.vercel.app/sitemap.xml
  `;

  // 生成 Sitemap 和 Robots.txt 文件
  const sitemapPath = path.resolve('public/sitemap.xml');
  const robotsPath = path.resolve('public/robots.txt');

  const sitemapContent = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapConfig.routes
        .map(
          (route) => `
        <url>
          <loc>${sitemapConfig.hostname}${route}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>
      `
        )
        .join('')}
    </urlset>
  `;

  // 將文件寫入 public 資料夾
  fs.writeFile(sitemapPath, sitemapContent.trim(), 'utf8')
    .then(() => console.log('Sitemap generated:', sitemapPath))
    .catch((err) => console.error('Failed to generate sitemap:', err));

  fs.writeFile(robotsPath, robotsConfig.trim(), 'utf8')
    .then(() => console.log('Robots.txt generated:', robotsPath))
    .catch((err) => console.error('Failed to generate robots.txt:', err));
});
