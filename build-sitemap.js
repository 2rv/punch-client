const fsPath = require('path');
const fs = require('fs');
const axios = require('axios').default;

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

const SITEMAP = [];

console.log('Sitemap building started');

const DESTINATION = process.env.SITEMAP_DESTINATION || fsPath.join(__dirname, '/public', '/sitemap.xml');
const URL = process.env.SITEMAP_URL || '';
const API_URL = process.env.SITEMAP_API;

async function generateSitemap() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

  await asyncForEach(SITEMAP, async ({ path, api, priority, dynamic }) => {
    let urlPath = path;

    if (dynamic) {
      try {
        await axios.get(API_URL + api).then(({ data }) => {
          data.forEach(({ url, id }) => {
            urlPath = path(url || id);
          });
        });
      } catch {
        return;
      }
    }

    xml += `
      <url>
        <loc>${URL}${urlPath}</loc>
        <changefreq>always</changefreq>
        <priority>${priority}</priority>
      </url>
    `;
  });

  xml += '</urlset>';

  return xml;
}

generateSitemap().then((xml) => {
  fs.writeFileSync(DESTINATION, xml);

  console.log(`Wrote sitemap to ${DESTINATION}`);
  console.log('Sitemap building finished');
});
