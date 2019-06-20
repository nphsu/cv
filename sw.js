importScripts('/cv/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/cv/_nuxt/0ac0030ec541bc678e0c.js",
    "revision": "00f5f6b22610059eee49cc4c994a1011"
  },
  {
    "url": "/cv/_nuxt/0b192577be44c5492f3d.js",
    "revision": "84a96c10a17ebef7aed93caa1a374470"
  },
  {
    "url": "/cv/_nuxt/1de38a72c71602f0a4b0.js",
    "revision": "941fee91ec1c6592cf6b20a5e2bc3c54"
  },
  {
    "url": "/cv/_nuxt/6c7a6905c20dec588439.js",
    "revision": "bab9a0ba0e8bd9b410bf32ac8bccfbbe"
  },
  {
    "url": "/cv/_nuxt/91b25a0611b27978bde5.js",
    "revision": "0c8b55b3fd5e16bd845319fae37c1eeb"
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
