import fs from 'fs'
import globby from 'globby'

try {
  console.info('Generating sitemap...')

  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    'pages/**/*{.js,.mdx}',
    '!pages/posts/[...*.js',
    'posts/**/*{.js,.mdx}',
    '!pages/_*.js',
    '!pages/api',
  ])

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map((page) => {
        const path = page
          .replace('pages', '')
          .replace('posts', '/posts')
          .replace('.js', '')
          .replace('.mdx', '')
          .replace('//', '/')
        const route = path === '/index' ? '' : path

        return `
          <url>
            <loc>${`https://jessechen.net${route}`}</loc>
          </url>
        `
      }).join('')}
    </urlset>
  `

  fs.writeFileSync('public/sitemap.xml', sitemap)

  console.info('Sitemap generated successfully')
} catch (e) {
  console.error('Failed to generate sitemap')
  console.error(e)
}