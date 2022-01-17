import {VitePWAOptions} from 'vite-plugin-pwa'

const pwaConfiguration: Partial<VitePWAOptions> = {
  includeManifestIcons: false,
  includeAssets: [
    'favicon.ico',
    'icon.png',
    'OG-card.png',
    'robots.txt',
    '/pwa/icon-192x192.png',
    '/pwa/icon-512x512.png'
  ],
  // should be fixed (base + scope), since the root for nuxt is `/_nuxt/` folder and not `/`
  base: '/',
  scope: '/',
  manifest: {
    // should be fixed (id + scope + start_url), since the root for nuxt is `/_nuxt/` folder and not `/`
    id: '/',
    scope: '/',
    start_url: '/',
    background_color: '#f69435',
    theme_color: '#f69435',
    icons: [
      {src: '/pwa/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      {src: '/pwa/icon-512x512.png', sizes: '512x512', type: 'image/png' },
      {src: '/pwa/icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
    ]
  },
  workbox: {
    navigateFallback: '/',
    globPatterns: ['**/*.{js,mjs,css,html,ico,png,svg}'],
    globIgnores: ['**/sw*', '**/workbox-*', '**/manifest.webmanifest'],
    // for static generation (html files)
    // manifestTransforms: [async(entries) => {
    //   // manifest.webmanifest is added always by pwa plugin, so we remove it.
    //   // EXCLUDE from the sw precache sw and workbox-*
    //   const manifest = entries.filter(({ url }) =>
    //     url !== 'manifest.webmanifest' && !url.endsWith('sw.js') && !url.startsWith('workbox-')
    //   ).map((e) => {
    //     let url = e.url
    //     if (url && url.endsWith('.html')) {
    //       if (url.startsWith('/'))
    //         url = url.slice(1)
    //
    //       e.url = url === 'index.html' ? '/' : `/${url.substring(0, url.lastIndexOf('/'))}`
    //       console.log(`${url} => ${e.url}`)
    //     }
    //
    //     return e
    //   })
    //   return { manifest }
    // }]
  }
}

const pwaConfigurationFactory = (
  build: boolean,
  pages?: Array<{ url: string, revision?: string }>,
  siteName = 'Ctw Top-Nuxt3 - Template',
  siteShortName = 'Nuxt Template',
  siteDescription = 'Ctw Nuxt base template with TailwindCss, content RSS, Supabase Auth, Composition API and many other goodies',
) => {
  const newPwaConfiguration: Partial<VitePWAOptions> = { ...pwaConfiguration }
  newPwaConfiguration.manifest['name'] = siteName
  newPwaConfiguration.manifest['short_name'] = siteShortName
  newPwaConfiguration.manifest['description'] = siteDescription

  if (build) {
    newPwaConfiguration.workbox.globDirectory = '.output/public/'
    newPwaConfiguration.outDir = '.output/public/_nuxt/'
    pages && (newPwaConfiguration.workbox.additionalManifestEntries = pages.reduce((acc, me) => {
      acc.push(me)
      return acc
    }, []))
  }
  else {
    newPwaConfiguration.workbox.globDirectory = '.nuxt/dist/client/'
    newPwaConfiguration.outDir = '.nuxt/dist/client/'
  }

  return newPwaConfiguration as VitePWAOptions
}

export default pwaConfigurationFactory
