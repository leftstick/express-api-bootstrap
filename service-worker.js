/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "56f034d4ee23ae3fa28b9722829bbe8d"
  },
  {
    "url": "api/index.html",
    "revision": "fce31a7f4da5aa5adb03ef089fa9ae0c"
  },
  {
    "url": "assets/css/0.styles.eadc0c9e.css",
    "revision": "56efb6e59f3f8cf7a59e9b8dc93990fc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.9809e03a.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/3.6ef121fe.js",
    "revision": "0bbebfc90d2836f46c8fd9eefea8128e"
  },
  {
    "url": "assets/js/4.576b31bf.js",
    "revision": "821a6f6c0888396e39bb5f1433169fab"
  },
  {
    "url": "assets/js/5.2ac6f6d0.js",
    "revision": "7373376a056d8b62e86df8eeaaa37982"
  },
  {
    "url": "assets/js/app.72307d0d.js",
    "revision": "d70ff3b6dc577f5c7c486a62914b974e"
  },
  {
    "url": "favicon.png",
    "revision": "7ed71cdd932aea0725befbda605a7659"
  },
  {
    "url": "index.html",
    "revision": "29630f120653cc40626de547c73b8f00"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
