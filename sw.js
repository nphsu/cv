importScripts('/cv/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/cv/_nuxt/0b192577be44c5492f3d.js",
    "revision": "84a96c10a17ebef7aed93caa1a374470"
  },
  {
    "url": "/cv/_nuxt/1cf3a21d7c680d5e7dba.js",
    "revision": "fa9ed1a1de39172fc2233afe44b88a26"
  },
  {
    "url": "/cv/_nuxt/1de38a72c71602f0a4b0.js",
    "revision": "941fee91ec1c6592cf6b20a5e2bc3c54"
  },
  {
    "url": "/cv/_nuxt/5acb79c7f7e7f571df96.js",
    "revision": "8cd882570a24a787fec1684ce805d09c"
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
