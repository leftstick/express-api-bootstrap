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
    "revision": "8f96242cbdab0722bac1763e782fc81d"
  },
  {
    "url": "api/index.html",
    "revision": "92e0f5f4df4c1c3a00c7ea47525c315c"
  },
  {
    "url": "assets/css/0.styles.eebb2200.css",
    "revision": "0204a3cfa4c3481424c29ffc1fee5734"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.162efd0d.js",
    "revision": "0620533a050bfce604eedce0ce4e0555"
  },
  {
    "url": "assets/js/11.0d96bdee.js",
    "revision": "0c21dd5c408ac7602f0db038228ab07d"
  },
  {
    "url": "assets/js/12.fc41af8d.js",
    "revision": "ad849512c6df0c6df83f8689ab59f42c"
  },
  {
    "url": "assets/js/13.4787118d.js",
    "revision": "eb7bb24b2f72cbf35322726ba3dfc24c"
  },
  {
    "url": "assets/js/14.14a41146.js",
    "revision": "83372dbb11aa5d21355b8abb40456cee"
  },
  {
    "url": "assets/js/15.75853aba.js",
    "revision": "a139ebcc8bcc228356a5b42b2ca88404"
  },
  {
    "url": "assets/js/16.7c98b9d1.js",
    "revision": "46d8f76d4f07af0532698cd552236a84"
  },
  {
    "url": "assets/js/17.ab45fabf.js",
    "revision": "30decd8564ed2ff1888b73abeb119734"
  },
  {
    "url": "assets/js/18.03cc3ae0.js",
    "revision": "ee1ce1c5b44932948295d14cbb7e1ed8"
  },
  {
    "url": "assets/js/19.fedc3762.js",
    "revision": "d3cd0936d73fd751f647420136284fd0"
  },
  {
    "url": "assets/js/20.9a69e852.js",
    "revision": "c954aa40b1bfac53196c1e50db1651a2"
  },
  {
    "url": "assets/js/21.d5bd0622.js",
    "revision": "3dc5a27b4d3f5e5ab99115d0ad986e88"
  },
  {
    "url": "assets/js/22.1ff7d6b1.js",
    "revision": "e82f946b79eafd55b8955388a3bdb586"
  },
  {
    "url": "assets/js/23.61379b41.js",
    "revision": "f6d694643a585cf458573a70df3cbb29"
  },
  {
    "url": "assets/js/24.f142b44f.js",
    "revision": "e28d9ec6052764930adf57bf76ade4c8"
  },
  {
    "url": "assets/js/25.556e5ac2.js",
    "revision": "33a2d0e5586ecf1784143a0ad395716d"
  },
  {
    "url": "assets/js/26.eaa0fc7b.js",
    "revision": "bef15488f8e76ac5f3edbc19ca52c8ab"
  },
  {
    "url": "assets/js/27.556b5770.js",
    "revision": "577caea8841bcf38307a01f514f922bd"
  },
  {
    "url": "assets/js/28.6b52ae5a.js",
    "revision": "16bb9f2405a4eb2c0033f68dfbfc21ca"
  },
  {
    "url": "assets/js/29.54cba0a3.js",
    "revision": "13ebf22af4670e0747d36716be3bf725"
  },
  {
    "url": "assets/js/3.44925d54.js",
    "revision": "b5be349f066c85740b4a1b71f1dcc025"
  },
  {
    "url": "assets/js/4.26dc9ab9.js",
    "revision": "e06e0941ba686a922557c24468d152c1"
  },
  {
    "url": "assets/js/5.810d8922.js",
    "revision": "7d5e6db7df49a33627dbe819510276a9"
  },
  {
    "url": "assets/js/6.df1f32d4.js",
    "revision": "76be32599ece527229995487857aa225"
  },
  {
    "url": "assets/js/7.facb092e.js",
    "revision": "4b94055029b036881764ce9a8e2dadae"
  },
  {
    "url": "assets/js/8.910fe776.js",
    "revision": "ee67865330381ea59cbd01169fa1a554"
  },
  {
    "url": "assets/js/9.6df5d83f.js",
    "revision": "d2e7dcac025edc55e60b0b8555da76fe"
  },
  {
    "url": "assets/js/app.a63d28d5.js",
    "revision": "012e0189a6eb863a792602e70a21b83a"
  },
  {
    "url": "assets/js/vendors~docsearch.4c0fa74d.js",
    "revision": "7ccd224cfe9d17af664ed93e31180fc0"
  },
  {
    "url": "config/index.html",
    "revision": "7f53ec39a77707ac820dc9b97127f9a9"
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
    "revision": "87539531eba7c778862190432f989353"
  },
  {
    "url": "guide/debug.html",
    "revision": "ff24094b612b06f14effb6bc9d05d124"
  },
  {
    "url": "guide/directory-and-convention.html",
    "revision": "13f0922d5459dda3495e9a47b13c7fac"
  },
  {
    "url": "guide/index.html",
    "revision": "fc7326b859372f11b31b0651ebda7de6"
  },
  {
    "url": "guide/production.html",
    "revision": "6e1d4ed12b36a24af5f297794d7c06e4"
  },
  {
    "url": "guide/unit-test.html",
    "revision": "49369d6cd50fe7403021d82d3656e3a8"
  },
  {
    "url": "index.html",
    "revision": "05601818ce7fd784f44acccc64b2707b"
  },
  {
    "url": "plugin-intelliSense.gif",
    "revision": "4651a864aedc050fa6840ffacfc277b9"
  },
  {
    "url": "plugin/develop-plugin.html",
    "revision": "0e41a517ddfdfc6cbc340280f14e139e"
  },
  {
    "url": "plugin/index.html",
    "revision": "8ca3ce548d260ca042a21c53d3369647"
  },
  {
    "url": "ut-coverage.png",
    "revision": "0594c71cf6dff60fbf23ef43dcddafd6"
  },
  {
    "url": "zh/api/index.html",
    "revision": "61789e652239980add1d95234d75b325"
  },
  {
    "url": "zh/config/index.html",
    "revision": "87748f300ace81b5dab248b55cc4692e"
  },
  {
    "url": "zh/guide/configuration.html",
    "revision": "44a088382a244475b8a5050afa8e5a97"
  },
  {
    "url": "zh/guide/debug.html",
    "revision": "987e2946dcff2ddbb0c511166251ba64"
  },
  {
    "url": "zh/guide/directory-and-convention.html",
    "revision": "71f4b6d23a9436afeb960a1657379b73"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "a3e62826d5d570c0cb6f78fcabc1da41"
  },
  {
    "url": "zh/guide/production.html",
    "revision": "702dfd5e5f7c31af3642e9ce08be68bb"
  },
  {
    "url": "zh/guide/unit-test.html",
    "revision": "2ddbdcadc36e50c5a403213a2b79910e"
  },
  {
    "url": "zh/index.html",
    "revision": "c599fa48558b75ca2b5ad84c5c9287ff"
  },
  {
    "url": "zh/plugin/develop-plugin.html",
    "revision": "e91e06003c9799b23373e78566b83f22"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "5124206ebb3da122043a4c5813313da9"
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
