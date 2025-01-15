import { promises as fs } from 'fs';
import { resolve } from 'path';

export default defineNuxtPlugin(() => {
  if (!process.server) return; // 確保只在伺服器端執行

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

  // 生成 Sitemap 和 Robots 文件的伺服器端路徑
  const sitemapPath = resolve('./public/sitemap.xml');
  const robotsPath = resolve('./public/robots.txt');

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

  // 將 Sitemap 和 Robots 文件寫入 public 資料夾
  (async () => {
    try {
      await fs.writeFile(sitemapPath, sitemapContent.trim(), 'utf8');
      console.log('Sitemap generated:', sitemapPath);

      await fs.writeFile(robotsPath, robotsConfig.trim(), 'utf8');
      console.log('Robots.txt generated:', robotsPath);
    } catch (error) {
      console.error('Error generating Sitemap or Robots.txt:', error);
    }
  })();
});
