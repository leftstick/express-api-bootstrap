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
    "revision": "87aad9cdb337fa8a47a728d25a71e48f"
  },
  {
    "url": "api/index.html",
    "revision": "d66ac3687c28ccda6d257cf65450b19a"
  },
  {
    "url": "assets/css/0.styles.685c93fb.css",
    "revision": "0204a3cfa4c3481424c29ffc1fee5734"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.26f82d9e.js",
    "revision": "20cd22b7619bee8ab0c44538cf009005"
  },
  {
    "url": "assets/js/11.1fa718e5.js",
    "revision": "e0e1ea30432185ba42ddf800d5ecc015"
  },
  {
    "url": "assets/js/12.c1e23165.js",
    "revision": "2d825d48301a382bedd8459e6a5fcf14"
  },
  {
    "url": "assets/js/13.d47f60a0.js",
    "revision": "d969e02f8eaa3abd7f68b9d5ee8f1c8c"
  },
  {
    "url": "assets/js/14.e65fd2ff.js",
    "revision": "0e487ad36313894c50acc6e41d513673"
  },
  {
    "url": "assets/js/15.25be427d.js",
    "revision": "c4b5482a3bc480a4c568bc3499ab3597"
  },
  {
    "url": "assets/js/16.1f5c9372.js",
    "revision": "46d8f76d4f07af0532698cd552236a84"
  },
  {
    "url": "assets/js/17.6f4053e5.js",
    "revision": "3c088a0dcbffdb82e5fce7f0d82fc68f"
  },
  {
    "url": "assets/js/18.5c80a910.js",
    "revision": "e5bac104c97e3391599677f77ea2dced"
  },
  {
    "url": "assets/js/19.14c06f29.js",
    "revision": "58a96967b651f7b4247bf5075e0f3c5a"
  },
  {
    "url": "assets/js/20.ab1e4548.js",
    "revision": "01414d69d70df496aeb3fe98308ecbcf"
  },
  {
    "url": "assets/js/21.58d82e37.js",
    "revision": "21fed02e0c4c3ede9978e3003b844172"
  },
  {
    "url": "assets/js/22.49f30b04.js",
    "revision": "baf971a9236b7ce1a8be74c3d9d5613d"
  },
  {
    "url": "assets/js/23.eaeb87d4.js",
    "revision": "332d3a39d20cf8076b8a8c53581681f6"
  },
  {
    "url": "assets/js/24.5901366a.js",
    "revision": "2ce3ca4e114405d82d1998b05c85e8e9"
  },
  {
    "url": "assets/js/25.d1f0746a.js",
    "revision": "c0cb7fefeaf3d10f72020b0d9179bc42"
  },
  {
    "url": "assets/js/26.a84b462d.js",
    "revision": "56b36df713150d13f603b242e2b46a3c"
  },
  {
    "url": "assets/js/27.a6c01eef.js",
    "revision": "4a1f21ff77d6c3a38116f66b3775a992"
  },
  {
    "url": "assets/js/28.db889c0b.js",
    "revision": "7c8a18a6cd3f8d4fb0310d5c14fdf6c7"
  },
  {
    "url": "assets/js/29.58e0e466.js",
    "revision": "13ebf22af4670e0747d36716be3bf725"
  },
  {
    "url": "assets/js/3.1f5e72b3.js",
    "revision": "c675b9252e2ec53720433a79c9f58f86"
  },
  {
    "url": "assets/js/4.cd67fe4d.js",
    "revision": "e06e0941ba686a922557c24468d152c1"
  },
  {
    "url": "assets/js/5.fc05f07e.js",
    "revision": "7d5e6db7df49a33627dbe819510276a9"
  },
  {
    "url": "assets/js/6.f8ab8cac.js",
    "revision": "76be32599ece527229995487857aa225"
  },
  {
    "url": "assets/js/7.b5ce4669.js",
    "revision": "91ef78faf902b4ffc42173ff3ada776a"
  },
  {
    "url": "assets/js/8.cefd658e.js",
    "revision": "089c1b703b6b0ab47f6c4f35b857cf96"
  },
  {
    "url": "assets/js/9.ba6c379e.js",
    "revision": "dacd1737f7e750ced232ab31aa699607"
  },
  {
    "url": "assets/js/app.c1c52ff0.js",
    "revision": "d9fda2bbb017e46a9cdddf2917313688"
  },
  {
    "url": "assets/js/vendors~docsearch.7dd05275.js",
    "revision": "7ccd224cfe9d17af664ed93e31180fc0"
  },
  {
    "url": "config/index.html",
    "revision": "0f10dbbf059f250773835cf66d3d7a22"
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
    "revision": "3d447465c4e02c003953a2ece86ca223"
  },
  {
    "url": "guide/debug.html",
    "revision": "1d3aafc0da2b807e4ae1eae65658899a"
  },
  {
    "url": "guide/directory-and-convention.html",
    "revision": "7311639eb308ab2ebd853eccefbad272"
  },
  {
    "url": "guide/index.html",
    "revision": "c8dd9f9f620cca039e406856b4b07fe1"
  },
  {
    "url": "guide/production.html",
    "revision": "1881d8d78834b3755d8d54d74353f6c6"
  },
  {
    "url": "guide/unit-test.html",
    "revision": "3ba46d837746fe951b82593e2f73f42c"
  },
  {
    "url": "index.html",
    "revision": "9534591d2e127af6535ada0f852dd0f3"
  },
  {
    "url": "plugin-intelliSense.gif",
    "revision": "4651a864aedc050fa6840ffacfc277b9"
  },
  {
    "url": "plugin/develop-plugin.html",
    "revision": "a9b500c127252ec26c82246ea55b3188"
  },
  {
    "url": "plugin/index.html",
    "revision": "cb4c8e725024f0585aafd3df7eb5059c"
  },
  {
    "url": "ut-coverage.png",
    "revision": "0594c71cf6dff60fbf23ef43dcddafd6"
  },
  {
    "url": "zh/api/index.html",
    "revision": "4ede9cb25f4dd972f430d0241c4e04d6"
  },
  {
    "url": "zh/config/index.html",
    "revision": "89b424848c2f8311983eb082d9caa2c7"
  },
  {
    "url": "zh/guide/configuration.html",
    "revision": "079a9136b50138ba2f62fe7d86907c62"
  },
  {
    "url": "zh/guide/debug.html",
    "revision": "548170948f23ce0fa69bd88b2bbfc882"
  },
  {
    "url": "zh/guide/directory-and-convention.html",
    "revision": "53e285245be77002463d5aeeed0589f0"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "eb212261f299f3245abe9fbec8426140"
  },
  {
    "url": "zh/guide/production.html",
    "revision": "0683e10d380c4b4b69b92192da255686"
  },
  {
    "url": "zh/guide/unit-test.html",
    "revision": "e3af3d950cfb04c3e3ed84cddfa23884"
  },
  {
    "url": "zh/index.html",
    "revision": "fa33f6697e8729747e0ee79e71c0a17a"
  },
  {
    "url": "zh/plugin/develop-plugin.html",
    "revision": "3a60ddd06642db05273563152084827a"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "b900bb76d2d388a55e4c180668837eba"
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
