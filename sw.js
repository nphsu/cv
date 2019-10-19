importScripts('/cv/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/cv/_nuxt/0b192577be44c5492f3d.js",
    "revision": "84a96c10a17ebef7aed93caa1a374470"
  },
  {
    "url": "/cv/_nuxt/1b2941d0b2a8b37131ee.js",
    "revision": "d46863aace6554e3aa65cb5b82333f5d"
  },
  {
    "url": "/cv/_nuxt/2d4b83071949deead009.js",
    "revision": "b4cfe277aef779eb483865ac343dbe67"
  },
  {
    "url": "/cv/_nuxt/4f11ead12fca946b0c54.js",
    "revision": "3e1604cb9baad75f69f40878cbbe674b"
  },
  {
    "url": "/cv/_nuxt/6c7a6905c20dec588439.js",
    "revision": "bab9a0ba0e8bd9b410bf32ac8bccfbbe"
  },
  {
    "url": "/cv/_nuxt/f2769652dfbf94787edc.js",
    "revision": "8a5dd1605939b95c8205f7800e5dc007"
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
