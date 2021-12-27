import { resolve } from 'pathe'
import { promises } from 'fs'

export default async function(req, res, next) {
  // req is the Node.js http request object
  const url = req.url
  let resource = null
  if (url === '/sw.js' || url === '/manifest.webmanifest' || (url.startsWith('/workbox-') && url.endsWith('.js')))
    resource = url.slice(1)

  if (resource) {
    const path = resolve(`./.output/public/_nuxt/${resource}`)
    const { mtime } = await promises.stat(path)
    const ifModifiedSinceH = req.headers['if-modified-since']
    if (new Date(ifModifiedSinceH) >= new Date(mtime)) {
      res.statusCode = 304
      return res.end('Not Modified (mtime)')
    }
    if (resource.endsWith('.js'))
      res.setHeader('Content-Type', 'application/javascript')
    else
      res.setHeader('Content-Type', 'application/manifest+json')
    res.setHeader('Last-Modified', mtime)
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate')
    return res.end(await promises.readFile(path))
  }
  next()
}
