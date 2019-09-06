importScripts('/cv/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/cv/_nuxt/0b192577be44c5492f3d.js",
    "revision": "84a96c10a17ebef7aed93caa1a374470"
  },
  {
    "url": "/cv/_nuxt/1a0e8cd6a49c08581d7e.js",
    "revision": "1276636a174da50e7f933f405df9b7f5"
  },
  {
    "url": "/cv/_nuxt/1de38a72c71602f0a4b0.js",
    "revision": "941fee91ec1c6592cf6b20a5e2bc3c54"
  },
  {
    "url": "/cv/_nuxt/3e9a6e362f6993d8eabf.js",
    "revision": "098cb005150c940b1ffdac62f82f9137"
  },
  {
    "url": "/cv/_nuxt/6c7a6905c20dec588439.js",
    "revision": "bab9a0ba0e8bd9b410bf32ac8bccfbbe"
  },
  {
    "url": "/cv/_nuxt/bd3eb1f661c56a8b069c.js",
    "revision": "cea91795aa24ac05649504d0d2a566d7"
  }
], {
  "cacheId": "cv",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/cv/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/cv/.*'), workbox.strategies.networkFirst({}), 'GET')
