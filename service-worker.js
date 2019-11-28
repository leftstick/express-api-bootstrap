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
    "revision": "ce7409d04e7c7bbe555235721fe25f35"
  },
  {
    "url": "api/index.html",
    "revision": "ce80a6848573bd743eb615c77013ce2a"
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
    "url": "assets/js/10.bafed3c4.js",
    "revision": "27f10f2436e7d91b91bdc02a73fd70e1"
  },
  {
    "url": "assets/js/11.133d81a0.js",
    "revision": "f29dae2b7296128fb97537fd10fe8cc6"
  },
  {
    "url": "assets/js/12.07d5faeb.js",
    "revision": "2d825d48301a382bedd8459e6a5fcf14"
  },
  {
    "url": "assets/js/13.81bf5f60.js",
    "revision": "d135844e9092ad28de87bf39812bfd75"
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
    "url": "assets/js/16.7c98b9d1.js",
    "revision": "46d8f76d4f07af0532698cd552236a84"
  },
  {
    "url": "assets/js/17.c5bb7f80.js",
    "revision": "3c088a0dcbffdb82e5fce7f0d82fc68f"
  },
  {
    "url": "assets/js/18.e5168ccd.js",
    "revision": "700a1d77adecc813caaa30eeb6a45ff5"
  },
  {
    "url": "assets/js/19.7e769cb7.js",
    "revision": "f7689692851d97e2b0162cab9dafa112"
  },
  {
    "url": "assets/js/20.f96565a5.js",
    "revision": "2c7653da03be4db9235762a552466b9e"
  },
  {
    "url": "assets/js/21.68f9fd54.js",
    "revision": "da9f3aad3657c6ffea064a77e27393d9"
  },
  {
    "url": "assets/js/22.e546a2e3.js",
    "revision": "ebb195bb79d96817ad4ed25f13275104"
  },
  {
    "url": "assets/js/23.58b4dbc6.js",
    "revision": "09421744d68cd7ad6d4e0007445414b1"
  },
  {
    "url": "assets/js/24.92454629.js",
    "revision": "9dc446224ac21fab48bf33170d18c15c"
  },
  {
    "url": "assets/js/25.c6df3acd.js",
    "revision": "0626798f7d86fd3f0a01f46212faf873"
  },
  {
    "url": "assets/js/26.1b9b06dc.js",
    "revision": "76085a37b40d7b45e14b57e06143a58a"
  },
  {
    "url": "assets/js/27.234ddf91.js",
    "revision": "4a1f21ff77d6c3a38116f66b3775a992"
  },
  {
    "url": "assets/js/28.67bc768c.js",
    "revision": "36b80ee751dcd0db121171010f81f203"
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
    "url": "assets/js/7.8015c1cb.js",
    "revision": "2b5e996b3fd5c2f032d0ca4200a92ce0"
  },
  {
    "url": "assets/js/8.b699b423.js",
    "revision": "513c4cb94ba6ed10a87422056f07135a"
  },
  {
    "url": "assets/js/9.f2a5f56e.js",
    "revision": "8db72ac2353acc4f6a745b224fc1d5cc"
  },
  {
    "url": "assets/js/app.99c07789.js",
    "revision": "dfdb070720ac4a01dac2577eb17c6cd4"
  },
  {
    "url": "assets/js/vendors~docsearch.4c0fa74d.js",
    "revision": "7ccd224cfe9d17af664ed93e31180fc0"
  },
  {
    "url": "config/index.html",
    "revision": "d2c4742c560c15e8d579f074babac836"
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
    "revision": "6b237c2a9b4272f7946dc5723ae7cada"
  },
  {
    "url": "guide/debug.html",
    "revision": "9a7558874a14eebaaf86ae2bc672d399"
  },
  {
    "url": "guide/directory-and-convention.html",
    "revision": "0fb07d196c640dedf029dddfc004369f"
  },
  {
    "url": "guide/index.html",
    "revision": "6a7c4b4a5817c47edb09900781a8e8ae"
  },
  {
    "url": "guide/production.html",
    "revision": "f0901c49f3550e4d1026fa4a5d2d30d2"
  },
  {
    "url": "guide/unit-test.html",
    "revision": "3ecfe091deecb3661da1a24d4ce691ed"
  },
  {
    "url": "index.html",
    "revision": "aaf294ff595e508a2b9d425f30258c0a"
  },
  {
    "url": "plugin-intelliSense.gif",
    "revision": "4651a864aedc050fa6840ffacfc277b9"
  },
  {
    "url": "plugin/develop-plugin.html",
    "revision": "a4cc4415099600006bdba8ce8382ffa4"
  },
  {
    "url": "plugin/index.html",
    "revision": "f73433e2f05a8e89fb30a2aa79b0e134"
  },
  {
    "url": "ut-coverage.png",
    "revision": "0594c71cf6dff60fbf23ef43dcddafd6"
  },
  {
    "url": "zh/api/index.html",
    "revision": "2a08ff2af0591b47a89ddc96636e5683"
  },
  {
    "url": "zh/config/index.html",
    "revision": "a27aa36feffa8c75e4a8b1ab5fec3816"
  },
  {
    "url": "zh/guide/configuration.html",
    "revision": "da742096d592ed5edabb246706a0bdfa"
  },
  {
    "url": "zh/guide/debug.html",
    "revision": "861e47d20e2be70826ff1fe990330d00"
  },
  {
    "url": "zh/guide/directory-and-convention.html",
    "revision": "55c71dddf59195ae9b0c7e48ff89bcf6"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "420e2be23b24c97858185d87445c4645"
  },
  {
    "url": "zh/guide/production.html",
    "revision": "0bc03c105393a3393192b3de76cf3f75"
  },
  {
    "url": "zh/guide/unit-test.html",
    "revision": "df087b8e2d03de3f2d9df354c512ebaf"
  },
  {
    "url": "zh/index.html",
    "revision": "acefe38b4e349a4e33ed641b3142a3ab"
  },
  {
    "url": "zh/plugin/develop-plugin.html",
    "revision": "061df801bc8ccbbc9d85ad695c9e55e2"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "a3ac96d17c71fa53f33ae9eb6457bdaa"
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
