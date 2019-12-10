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
    "revision": "f473edf3f8c929f20ea3fcee148d71b7"
  },
  {
    "url": "api/index.html",
    "revision": "4636761d988bc25f012015aaf1b89f1b"
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
    "url": "assets/js/10.84f4a274.js",
    "revision": "27f10f2436e7d91b91bdc02a73fd70e1"
  },
  {
    "url": "assets/js/11.76f45535.js",
    "revision": "0c21dd5c408ac7602f0db038228ab07d"
  },
  {
    "url": "assets/js/12.f6e55b8a.js",
    "revision": "ad849512c6df0c6df83f8689ab59f42c"
  },
  {
    "url": "assets/js/13.01296709.js",
    "revision": "f7bf30ef1a694c2696fead47964af569"
  },
  {
    "url": "assets/js/14.e8fc307b.js",
    "revision": "83372dbb11aa5d21355b8abb40456cee"
  },
  {
    "url": "assets/js/15.09803603.js",
    "revision": "808bab4a82af3759d4f5d1a4db6fe026"
  },
  {
    "url": "assets/js/16.c036762d.js",
    "revision": "1e57f21f56d202a392cdf71109a8b9ff"
  },
  {
    "url": "assets/js/17.f3a73c9b.js",
    "revision": "49b2f364f6cb24d83b1230eac563ac8f"
  },
  {
    "url": "assets/js/18.ddbc8644.js",
    "revision": "6d47d554c07f2028862878fd5ccd2c6a"
  },
  {
    "url": "assets/js/19.49686476.js",
    "revision": "70d103ff36f1df20f7325e283ba5ef6c"
  },
  {
    "url": "assets/js/20.2f16caa7.js",
    "revision": "ade840ac4990e1eb12ab151550a7a283"
  },
  {
    "url": "assets/js/21.5b1f78b8.js",
    "revision": "de3890ae9396e671e4f420adedab0cec"
  },
  {
    "url": "assets/js/22.58faf1bc.js",
    "revision": "0da72543fa53d7db8cf15040d2e98b4c"
  },
  {
    "url": "assets/js/23.4349a4e2.js",
    "revision": "6bba429df69917349301c020140e09d0"
  },
  {
    "url": "assets/js/24.c64ff8a4.js",
    "revision": "0cd2527ec408341555c1cf3fdefa4650"
  },
  {
    "url": "assets/js/25.0ce93dfd.js",
    "revision": "33a2d0e5586ecf1784143a0ad395716d"
  },
  {
    "url": "assets/js/26.746d5ec4.js",
    "revision": "66428ee387b170a4090d53f9be2e3fd7"
  },
  {
    "url": "assets/js/27.a6c01eef.js",
    "revision": "4a1f21ff77d6c3a38116f66b3775a992"
  },
  {
    "url": "assets/js/28.81c30cf3.js",
    "revision": "36b80ee751dcd0db121171010f81f203"
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
    "url": "assets/js/7.db8b76e9.js",
    "revision": "2b5e996b3fd5c2f032d0ca4200a92ce0"
  },
  {
    "url": "assets/js/8.5eebdc1a.js",
    "revision": "161c42efec979853a2b743548c132047"
  },
  {
    "url": "assets/js/9.92c0c085.js",
    "revision": "84ce71c6cc6b444861f75c90ef3f90ac"
  },
  {
    "url": "assets/js/app.8b84063d.js",
    "revision": "55f203c3081f8fc238b47b6926bf14ff"
  },
  {
    "url": "assets/js/vendors~docsearch.7dd05275.js",
    "revision": "7ccd224cfe9d17af664ed93e31180fc0"
  },
  {
    "url": "config/index.html",
    "revision": "da3eaea6466f303105a139583415afb9"
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
    "revision": "8340c92df2b9fb611f0b4273c71cc8cc"
  },
  {
    "url": "guide/debug.html",
    "revision": "c0806886c44a6a3de23ee3fe9bdcccfb"
  },
  {
    "url": "guide/directory-and-convention.html",
    "revision": "3917cfb546a680e83b44db67c1164675"
  },
  {
    "url": "guide/index.html",
    "revision": "1dc39c4dce7ded9df68d781cf192781d"
  },
  {
    "url": "guide/production.html",
    "revision": "99461d3d2524b9abe0e90102969eb61d"
  },
  {
    "url": "guide/unit-test.html",
    "revision": "320c99ddaad031b5281395ce7c49af46"
  },
  {
    "url": "index.html",
    "revision": "260f4464791c069447ba152841f38903"
  },
  {
    "url": "plugin-intelliSense.gif",
    "revision": "4651a864aedc050fa6840ffacfc277b9"
  },
  {
    "url": "plugin/develop-plugin.html",
    "revision": "5024d8d1208f9fd08635e0e091f29855"
  },
  {
    "url": "plugin/index.html",
    "revision": "cc295ca76459cf5a1fde4fce9cc81479"
  },
  {
    "url": "ut-coverage.png",
    "revision": "0594c71cf6dff60fbf23ef43dcddafd6"
  },
  {
    "url": "zh/api/index.html",
    "revision": "1ef4cd3377aa467305467d75adea10b0"
  },
  {
    "url": "zh/config/index.html",
    "revision": "3e6e14ba2a320d4a0f77fede2b2ff2c4"
  },
  {
    "url": "zh/guide/configuration.html",
    "revision": "5a4047f3ffb1a44340550f62b4c66f84"
  },
  {
    "url": "zh/guide/debug.html",
    "revision": "b810cc30c9ed1d86fbaef0c73d28e8a1"
  },
  {
    "url": "zh/guide/directory-and-convention.html",
    "revision": "4c208c5e02169cd07cb39c12a40fffd2"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "c4190bd48c11b258fd1c30309b64655f"
  },
  {
    "url": "zh/guide/production.html",
    "revision": "9b21661649fab9cf6c4b456047743be0"
  },
  {
    "url": "zh/guide/unit-test.html",
    "revision": "72029081dc303ed347b9166e5420c4d0"
  },
  {
    "url": "zh/index.html",
    "revision": "8e990f3410c055b6224285bc12c4740d"
  },
  {
    "url": "zh/plugin/develop-plugin.html",
    "revision": "49dbbfebe024b60e0f1b283ade2065f1"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "6d4cc2dc22eadad6d73f21900de05930"
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
