const fs = require('fs');
const globby = require('globby');

//List of folders to generate links from
const pageCategories = ['', '/profile'];

//Function to Auto generate links when 'yarn run dev' script is run

(async () => {
  let pages;
  const main = await Promise.all(
    pageCategories.map(async (each) => {
      pages = await globby([
        // include
        `src/pages${each}/*.tsx`,
        // exclude
        '!src/pages/_*.tsx',
        '!src/pages/api'
      ]);
      return {
        title: each,
        links: pages
      };
    })
  );
  const pagesSitemap = main.map(({ title, links }) => {
    let mainLinks = links.map((link) => {
      let linkpath = link
        .replace('src/pages/', '')
        .replace('.tsx', '')
        .replace(/\/index/g, '');
      let routePath = linkpath === 'index' ? '/' : `${linkpath}`;
      return routePath;
    });
    const titlePath = title.replace('/', '');
    let titleroutePath = titlePath === '' ? 'pages' : `${titlePath}`;
    return {
      title: titleroutePath,
      links: mainLinks
    };
  });
  const mainData = `
  import {SitemapProps} from "./";

  export const siteData: SitemapProps = {siteData:${JSON.stringify(pagesSitemap)}}
  `;

  //Store the generated links in Sitemap folder
  fs.writeFileSync('./src/ui/widgets/Sitemap/sitemapData.ts', mainData);
})();
