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
    "revision": "f1ad34d52baffb6607ddff4298ab8709"
  },
  {
    "url": "api/index.html",
    "revision": "c12f60ce71f412044c3bccb08ac5dd2f"
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
    "url": "assets/js/3.0113dd8d.js",
    "revision": "20b50d613f9e1ff82bb50fac187ffcd7"
  },
  {
    "url": "assets/js/4.3ead07c0.js",
    "revision": "bcc020d61415a61d139d99c8e6dc72c2"
  },
  {
    "url": "assets/js/5.2ac6f6d0.js",
    "revision": "7373376a056d8b62e86df8eeaaa37982"
  },
  {
    "url": "assets/js/app.d236c38a.js",
    "revision": "8f5aab512d79ff39da685b74c1647db1"
  },
  {
    "url": "favicon.png",
    "revision": "7ed71cdd932aea0725befbda605a7659"
  },
  {
    "url": "index.html",
    "revision": "bb132d9011a16be935ef1bced6447666"
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
