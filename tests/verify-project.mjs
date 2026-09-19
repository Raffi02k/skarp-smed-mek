import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const mustExist = [
  'frontend/src/App.tsx',
  'frontend/src/pages/HomePage.tsx',
  'frontend/src/pages/ContactPage.tsx',
  'frontend/src/components/Header.tsx',
  'frontend/src/components/Footer.tsx',
  'frontend/src/components/PageMeta.tsx',
  'frontend/src/styles/global.css',
  'frontend/public/robots.txt',
  'frontend/public/sitemap.xml',
  'frontend/public/llms.txt',
  'frontend/public/404.html',
  'frontend/public/media/hero-welding-loop.mp4',
  'frontend/public/images/hero-poster.jpg',
  'frontend/public/images/skarp-logo-vit-new.png',
]

for (const rel of mustExist) {
  if (!fs.existsSync(path.join(root, rel))) throw new Error(`Missing required file: ${rel}`)
}

const app = fs.readFileSync(path.join(root, 'frontend/src/App.tsx'), 'utf8')
const routes = [
  '/', '/om-oss', '/tjanster', '/tjanster/:slug', '/projekt', '/kontakt', '/integritet', '/404'
]
for (const route of routes) {
  if (!app.includes(`path=\"${route}\"`)) throw new Error(`Missing route: ${route}`)
}

const sitemap = fs.readFileSync(path.join(root, 'frontend/public/sitemap.xml'), 'utf8')
for (const segment of ['om-oss', 'tjanster/specialtillverkning-metall', 'projekt', 'kontakt']) {
  if (!sitemap.includes(segment)) throw new Error(`Sitemap missing: ${segment}`)
}

const llms = fs.readFileSync(path.join(root, 'frontend/public/llms.txt'), 'utf8')
if (!llms.includes('FA Lucas Skarp') || !llms.includes('Götene')) throw new Error('llms.txt missing verified company facts')

console.log('Project structure, routes and SEO baseline verified.')
