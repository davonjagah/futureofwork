const fs = require('fs');
const globby = require('globby');
const prettier = require('prettier');
const getDate = new Date().toISOString();
const SITE_DOMAIN = 'https://domain.com';

(async () => {
  const pages = await globby([
    // include
    'src/pages/**/*.tsx',
    'src/pages/*.tsx',
    // exclude
    '!src/pages/_*.tsx',
    '!src/pages/api'
  ]);

  const pagesSitemap = `
    ${pages
      .map((page) => {
        const path = page
          .replace('src/pages/', '')
          .replace('.tsx', '')
          .replace(/\/index/g, '');
        const routePath = path === 'index' ? '' : path;
        return `
          <url>
            <loc>${SITE_DOMAIN}/${routePath}</loc>
            <lastmod>${getDate}</lastmod>
          </url>
        `;
      })
      .join('')}
  `;

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pagesSitemap}
    </urlset>
  `;

  const formatted = prettier.format(sitemap, {
    parser: 'html'
  });

  fs.writeFileSync('public/sitemap.xml', formatted, 'utf8');
})();
