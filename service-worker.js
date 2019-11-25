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
    "revision": "717012de867a729a0d6df2bcf01efb0e"
  },
  {
    "url": "api/index.html",
    "revision": "cb588f5dc86615d56b246fb9c0ea3f66"
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
    "url": "assets/js/10.068f01e2.js",
    "revision": "db6fd27f499fcd451b74db5cdf105b54"
  },
  {
    "url": "assets/js/11.0d96bdee.js",
    "revision": "0c21dd5c408ac7602f0db038228ab07d"
  },
  {
    "url": "assets/js/12.392c001e.js",
    "revision": "a9dd8d452d56b0408e39ce80ec33702d"
  },
  {
    "url": "assets/js/13.16857aeb.js",
    "revision": "6c91513c334b9ddc40e4d2f092366b22"
  },
  {
    "url": "assets/js/14.4fdad81c.js",
    "revision": "7bac39a415e6f1fe1fe9eb95b7cecb02"
  },
  {
    "url": "assets/js/15.75853aba.js",
    "revision": "a139ebcc8bcc228356a5b42b2ca88404"
  },
  {
    "url": "assets/js/16.8c179ba9.js",
    "revision": "4d8d31b9816f0d63819ef5708f0c7f54"
  },
  {
    "url": "assets/js/17.ab45fabf.js",
    "revision": "30decd8564ed2ff1888b73abeb119734"
  },
  {
    "url": "assets/js/18.063df832.js",
    "revision": "beec2c1249d9e965cfa5490a9c752eb7"
  },
  {
    "url": "assets/js/19.230752dd.js",
    "revision": "bc115d16d5d1893a044fba3b51d7f5af"
  },
  {
    "url": "assets/js/20.dfe6ccc9.js",
    "revision": "ba5cbe7e003e0f82144f1cc14af2517d"
  },
  {
    "url": "assets/js/21.d5bd0622.js",
    "revision": "3dc5a27b4d3f5e5ab99115d0ad986e88"
  },
  {
    "url": "assets/js/22.d25456e9.js",
    "revision": "0da72543fa53d7db8cf15040d2e98b4c"
  },
  {
    "url": "assets/js/23.60241a76.js",
    "revision": "f2eea3477f310e3de5955dc44fda3964"
  },
  {
    "url": "assets/js/24.92454629.js",
    "revision": "9dc446224ac21fab48bf33170d18c15c"
  },
  {
    "url": "assets/js/25.5848e6ca.js",
    "revision": "c0cb7fefeaf3d10f72020b0d9179bc42"
  },
  {
    "url": "assets/js/26.425dc688.js",
    "revision": "d602667e2ed9c8f2940c5c5bd4b5e0b2"
  },
  {
    "url": "assets/js/27.061a155a.js",
    "revision": "e5efe824171fb8d90d0d6a5cc3472c7b"
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
    "url": "assets/js/7.e5b9dd5a.js",
    "revision": "9f632ee271184162b09bdde2a336b8e2"
  },
  {
    "url": "assets/js/8.b699b423.js",
    "revision": "513c4cb94ba6ed10a87422056f07135a"
  },
  {
    "url": "assets/js/9.0213e511.js",
    "revision": "7463ab21b7731ca90a0a83c9aa9d1a8a"
  },
  {
    "url": "assets/js/app.5c12c51e.js",
    "revision": "8cb33d73eaab4557b6ff044160622b45"
  },
  {
    "url": "assets/js/vendors~docsearch.4c0fa74d.js",
    "revision": "7ccd224cfe9d17af664ed93e31180fc0"
  },
  {
    "url": "config/index.html",
    "revision": "d0cce9aec5460bc594ee1fd6822303e3"
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
    "revision": "c41c842cfe141eae96016d52b317ee43"
  },
  {
    "url": "guide/debug.html",
    "revision": "adab8c93b3f999d65f024206feba9527"
  },
  {
    "url": "guide/directory-and-convention.html",
    "revision": "0fe0f00972305bf62e14906c1a6c9893"
  },
  {
    "url": "guide/index.html",
    "revision": "734e03fc136efa7b05fc3a750961e888"
  },
  {
    "url": "guide/production.html",
    "revision": "fe5da2542c2d82abbb82b2cc1c2e49b1"
  },
  {
    "url": "guide/unit-test.html",
    "revision": "21a87269092374675638a7ceb334cc21"
  },
  {
    "url": "index.html",
    "revision": "742f54c5721a20fb77387a09c9e37f8e"
  },
  {
    "url": "plugin-intelliSense.gif",
    "revision": "4651a864aedc050fa6840ffacfc277b9"
  },
  {
    "url": "plugin/develop-plugin.html",
    "revision": "59d0c003508d503bb6d37e1673536045"
  },
  {
    "url": "plugin/index.html",
    "revision": "29958db71ee6a371fc4eb9f475ab9d33"
  },
  {
    "url": "ut-coverage.png",
    "revision": "0594c71cf6dff60fbf23ef43dcddafd6"
  },
  {
    "url": "zh/api/index.html",
    "revision": "2016103e8e0845b3006c997b1b8c5985"
  },
  {
    "url": "zh/config/index.html",
    "revision": "5278a91a016c89c9719e47c32ff65f7c"
  },
  {
    "url": "zh/guide/configuration.html",
    "revision": "bb03d652987c67b6e24879c87db4db66"
  },
  {
    "url": "zh/guide/debug.html",
    "revision": "497dcc8dc2bf2b404c8d792ee3a9a95b"
  },
  {
    "url": "zh/guide/directory-and-convention.html",
    "revision": "2cd3157345e5b1f917e51b255b839fe4"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "c830a85694f88dbd1637ad3f6020fa98"
  },
  {
    "url": "zh/guide/production.html",
    "revision": "084cad5efdaab09625d168d871f3cf96"
  },
  {
    "url": "zh/guide/unit-test.html",
    "revision": "fae417fa84df343ec376726e522531cb"
  },
  {
    "url": "zh/index.html",
    "revision": "70fe4e55086f704327c36d113646212e"
  },
  {
    "url": "zh/plugin/develop-plugin.html",
    "revision": "ba522e5def3c16728a1386fb2c575e14"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "458e3054cef88174977de30b38d08243"
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
