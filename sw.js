importScripts('/cv/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/cv/_nuxt/0b192577be44c5492f3d.js",
    "revision": "84a96c10a17ebef7aed93caa1a374470"
  },
  {
    "url": "/cv/_nuxt/157f75e5b94ed84b5462.js",
    "revision": "0855da692089d8de94aeb09cbc63968b"
  },
  {
    "url": "/cv/_nuxt/367de1e12684b986a20e.js",
    "revision": "35123bb995282087866c514ac8f42e83"
  },
  {
    "url": "/cv/_nuxt/5945ff9c51dd1acd01fd.js",
    "revision": "0fdfb06445be72258b5ea460408021c5"
  },
  {
    "url": "/cv/_nuxt/6c7a6905c20dec588439.js",
    "revision": "bab9a0ba0e8bd9b410bf32ac8bccfbbe"
  },
  {
    "url": "/cv/_nuxt/e76ffdcd7647425d0047.js",
    "revision": "a63444bbd577fa4fefad7b4ac3b69421"
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
