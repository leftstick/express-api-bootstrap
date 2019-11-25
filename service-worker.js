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
    "revision": "c884491c085531e39d0d2e6b0f116f37"
  },
  {
    "url": "api/index.html",
    "revision": "8e71468c54d3faa5195734123cc04afc"
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
    "url": "assets/js/11.1c44a03a.js",
    "revision": "1aa75e5449ec1758fe78a098274a078e"
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
    "url": "assets/js/16.7b4e9fc5.js",
    "revision": "883481fe2890f3182d055c2656d7fb9e"
  },
  {
    "url": "assets/js/17.61c4d0a6.js",
    "revision": "510f7449a902deaff3dd747ef7bdecf0"
  },
  {
    "url": "assets/js/18.74cde63a.js",
    "revision": "0fe618d1e26334836819fcde36fdac06"
  },
  {
    "url": "assets/js/19.36d55451.js",
    "revision": "58a96967b651f7b4247bf5075e0f3c5a"
  },
  {
    "url": "assets/js/20.74fe0cf7.js",
    "revision": "853bc4eb6a7708cc9761d2649f3e2a5d"
  },
  {
    "url": "assets/js/21.68f9fd54.js",
    "revision": "da9f3aad3657c6ffea064a77e27393d9"
  },
  {
    "url": "assets/js/22.238653ea.js",
    "revision": "baf971a9236b7ce1a8be74c3d9d5613d"
  },
  {
    "url": "assets/js/23.1f92e77b.js",
    "revision": "6bba429df69917349301c020140e09d0"
  },
  {
    "url": "assets/js/24.b2734d11.js",
    "revision": "1abf9109b0d44dcf79ccf42e8330b106"
  },
  {
    "url": "assets/js/25.f080b190.js",
    "revision": "ee3a98d9bd110e8a069f2c7cbab6ff7d"
  },
  {
    "url": "assets/js/26.eaa0fc7b.js",
    "revision": "bef15488f8e76ac5f3edbc19ca52c8ab"
  },
  {
    "url": "assets/js/27.88be44f9.js",
    "revision": "b81222cdde145caf2a58a23653a23bca"
  },
  {
    "url": "assets/js/28.04a91c9f.js",
    "revision": "9abbd57ac54a13b2679fd50e0bbb59c9"
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
    "url": "assets/js/7.a339b65d.js",
    "revision": "d587ab33943e6be28a9d15a7a024e462"
  },
  {
    "url": "assets/js/8.21808333.js",
    "revision": "fff748fbecb6d97db10481e8519a3c41"
  },
  {
    "url": "assets/js/9.9784f1aa.js",
    "revision": "28fe51be4e95166fb9fda0c587dcd483"
  },
  {
    "url": "assets/js/app.23eba688.js",
    "revision": "b0daf94e96a20065323410b5404ece60"
  },
  {
    "url": "assets/js/vendors~docsearch.4c0fa74d.js",
    "revision": "7ccd224cfe9d17af664ed93e31180fc0"
  },
  {
    "url": "config/index.html",
    "revision": "91cdab5ab6b9fad6fe7c8d2348398acb"
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
    "revision": "2ef18de405b9fa53de6b587fa26902e1"
  },
  {
    "url": "guide/debug.html",
    "revision": "d1a83fdfef9e3bcf89bb031d8973dbcc"
  },
  {
    "url": "guide/directory-and-convention.html",
    "revision": "f7858e24dcc577257c662ef508076861"
  },
  {
    "url": "guide/index.html",
    "revision": "a0d271c56c6694c73385d73e194b7e2c"
  },
  {
    "url": "guide/production.html",
    "revision": "8c2268ffd6ee574f85e628a28b50d977"
  },
  {
    "url": "guide/unit-test.html",
    "revision": "f2988ffbe4fed7c0d5ae72c6fc73ab9e"
  },
  {
    "url": "index.html",
    "revision": "591bfd601349307be368ddd62559e4ff"
  },
  {
    "url": "plugin-intelliSense.gif",
    "revision": "4651a864aedc050fa6840ffacfc277b9"
  },
  {
    "url": "plugin/develop-plugin.html",
    "revision": "b922306469f54d2a976c2494ae4f4cb8"
  },
  {
    "url": "plugin/index.html",
    "revision": "78e3cceef611f7625356223ebf0e54b2"
  },
  {
    "url": "ut-coverage.png",
    "revision": "0594c71cf6dff60fbf23ef43dcddafd6"
  },
  {
    "url": "zh/api/index.html",
    "revision": "94c39ee3cd95b8e453aff5d2d8181b9e"
  },
  {
    "url": "zh/config/index.html",
    "revision": "2b4bf6370e5f1b097a7d79caae5c7f66"
  },
  {
    "url": "zh/guide/configuration.html",
    "revision": "848eda4aa30793e5a064682cdefd7c16"
  },
  {
    "url": "zh/guide/debug.html",
    "revision": "bfd5b74687fa647012b4893f446e1368"
  },
  {
    "url": "zh/guide/directory-and-convention.html",
    "revision": "d709bb746e900ff08eadb9bc26327d4f"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "7792bae06a8a079df8aa97b32b061cc6"
  },
  {
    "url": "zh/guide/production.html",
    "revision": "8c5b31e8a40a7a5305817ab2add269ec"
  },
  {
    "url": "zh/guide/unit-test.html",
    "revision": "0a945418cf79bad8b22e070df206a2f1"
  },
  {
    "url": "zh/index.html",
    "revision": "09f87cbe3c7a673fff8857b3bc5cc42b"
  },
  {
    "url": "zh/plugin/develop-plugin.html",
    "revision": "9a6bcee5767f9fce18980c45e96eb3a1"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "95a4c800a9462aa088fac4614335dfde"
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
