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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5ecef99e0adde7dda98865ac43b5ffea"
  },
  {
    "url": "api/index.html",
    "revision": "3ca5ac246241cf36a59c59b32688b28a"
  },
  {
    "url": "assets/css/0.styles.5f97420a.css",
    "revision": "0204a3cfa4c3481424c29ffc1fee5734"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c008d792.js",
    "revision": "0620533a050bfce604eedce0ce4e0555"
  },
  {
    "url": "assets/js/11.93c545fb.js",
    "revision": "303d8d001b85b4f0c4cd50ecc428bf83"
  },
  {
    "url": "assets/js/12.6760a2b4.js",
    "revision": "ad849512c6df0c6df83f8689ab59f42c"
  },
  {
    "url": "assets/js/13.838e5631.js",
    "revision": "f369160dbc2add9e3d9aee57729c15e5"
  },
  {
    "url": "assets/js/14.1841f5ae.js",
    "revision": "6e901be9f5298272e4027cb85fe7c9e5"
  },
  {
    "url": "assets/js/15.925e8cc1.js",
    "revision": "0dd71216d430786046586f3d4e8e23ac"
  },
  {
    "url": "assets/js/16.9c4534fa.js",
    "revision": "46d8f76d4f07af0532698cd552236a84"
  },
  {
    "url": "assets/js/17.2766cf57.js",
    "revision": "bf89296064d0335e7778a59f488e5971"
  },
  {
    "url": "assets/js/18.d8b7a634.js",
    "revision": "ad77889d85f44dd5de8f1f318f3c9591"
  },
  {
    "url": "assets/js/19.5ebf590f.js",
    "revision": "70d103ff36f1df20f7325e283ba5ef6c"
  },
  {
    "url": "assets/js/20.3a320cf5.js",
    "revision": "e8bd18986a45153548abd14193beeae1"
  },
  {
    "url": "assets/js/21.3426cbf0.js",
    "revision": "de3890ae9396e671e4f420adedab0cec"
  },
  {
    "url": "assets/js/22.d632879e.js",
    "revision": "baf971a9236b7ce1a8be74c3d9d5613d"
  },
  {
    "url": "assets/js/23.ea0c37a5.js",
    "revision": "f6d694643a585cf458573a70df3cbb29"
  },
  {
    "url": "assets/js/24.354f9663.js",
    "revision": "9dc446224ac21fab48bf33170d18c15c"
  },
  {
    "url": "assets/js/25.cc29d776.js",
    "revision": "e16ae362ab98610be43ed85aec12e849"
  },
  {
    "url": "assets/js/26.9f2ac003.js",
    "revision": "1be881d4e39dae67799af6a764b7b3c6"
  },
  {
    "url": "assets/js/27.219b73bc.js",
    "revision": "683ad1fa2bdc1fda059540ab8cf25cc4"
  },
  {
    "url": "assets/js/28.aaa99558.js",
    "revision": "04d6edbbc796272680b321a0f8dab506"
  },
  {
    "url": "assets/js/29.ec819a5b.js",
    "revision": "13ebf22af4670e0747d36716be3bf725"
  },
  {
    "url": "assets/js/3.4e5d3497.js",
    "revision": "b5be349f066c85740b4a1b71f1dcc025"
  },
  {
    "url": "assets/js/4.aafcd612.js",
    "revision": "e06e0941ba686a922557c24468d152c1"
  },
  {
    "url": "assets/js/5.62c8a3ad.js",
    "revision": "7d5e6db7df49a33627dbe819510276a9"
  },
  {
    "url": "assets/js/6.e32cbb91.js",
    "revision": "76be32599ece527229995487857aa225"
  },
  {
    "url": "assets/js/7.43b8bbf7.js",
    "revision": "dd04fe9486fefbcb80ff161dd099583f"
  },
  {
    "url": "assets/js/8.3659a75a.js",
    "revision": "161c42efec979853a2b743548c132047"
  },
  {
    "url": "assets/js/9.08c68650.js",
    "revision": "d2e7dcac025edc55e60b0b8555da76fe"
  },
  {
    "url": "assets/js/app.a3582baa.js",
    "revision": "e53a623536f112204f9de5e231f007cd"
  },
  {
    "url": "assets/js/vendors~docsearch.40e2d60b.js",
    "revision": "7ccd224cfe9d17af664ed93e31180fc0"
  },
  {
    "url": "config/index.html",
    "revision": "998dd4446baea96cd3aa9a1c613f5cf6"
  },
  {
    "url": "debug.gif",
    "revision": "63d98ca90d0cb56031b0d95a2049c93b"
  },
  {
    "url": "favicon.png",
    "revision": "7ed71cdd932aea0725befbda605a7659"
  },
  {
    "url": "guide/configuration.html",
    "revision": "c94f38375f6f6d6e188ba8be14577323"
  },
  {
    "url": "guide/debug.html",
    "revision": "f019d1f9244e6eaf98ad8bb0ffd32855"
  },
  {
    "url": "guide/directory-and-convention.html",
    "revision": "98c1a3fd62507b83d090a8f2ae5eada9"
  },
  {
    "url": "guide/index.html",
    "revision": "c17180dd2e17808538e9598a36ebc426"
  },
  {
    "url": "guide/production.html",
    "revision": "e680f8d2baae27e4dc321920f5c1096c"
  },
  {
    "url": "guide/unit-test.html",
    "revision": "2e4269fcfdab5b00ac2aa84f993dc6e0"
  },
  {
    "url": "index.html",
    "revision": "20cf1e416dff583df86fe7beb34345db"
  },
  {
    "url": "plugin-intelliSense.gif",
    "revision": "4651a864aedc050fa6840ffacfc277b9"
  },
  {
    "url": "plugin/develop-plugin.html",
    "revision": "c76cff55c12fba58caa3206413708830"
  },
  {
    "url": "plugin/index.html",
    "revision": "7e9171fd7d0e1d368dbb3e6947e2f6b3"
  },
  {
    "url": "ut-coverage.png",
    "revision": "0594c71cf6dff60fbf23ef43dcddafd6"
  },
  {
    "url": "zh/api/index.html",
    "revision": "13c3906854205622d600b131e1011923"
  },
  {
    "url": "zh/config/index.html",
    "revision": "8c56d729255686930c3d8f3ec810f70b"
  },
  {
    "url": "zh/guide/configuration.html",
    "revision": "292f70365dd66151d6fa01a8cde27a63"
  },
  {
    "url": "zh/guide/debug.html",
    "revision": "c52d0bc9d5b7c15e2d22b98479b43517"
  },
  {
    "url": "zh/guide/directory-and-convention.html",
    "revision": "202463395307bddeb9c41f48af6cfeed"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "f5324411fa40cea72a165f46e1c4b0a3"
  },
  {
    "url": "zh/guide/production.html",
    "revision": "9278d990abc03e51d8bdd5ba523d5371"
  },
  {
    "url": "zh/guide/unit-test.html",
    "revision": "66fdf01e997660047c2d6558af0fa20e"
  },
  {
    "url": "zh/index.html",
    "revision": "8ed8f4fbc0ccb351a2b1580d377fae5e"
  },
  {
    "url": "zh/plugin/develop-plugin.html",
    "revision": "b7b3e454b0f71200164f2d24f574d1e4"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "2c6e109971c0cf59530a807a5ba85c63"
  }
].concat(self.__precacheManifest || []);
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
