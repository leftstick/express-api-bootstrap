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
    "revision": "b411436408ffa69434a9c4b52fe9fb75"
  },
  {
    "url": "api/index.html",
    "revision": "71b1ae77dd7a15702e65513fecd2f242"
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
    "url": "assets/js/11.1c44a03a.js",
    "revision": "1aa75e5449ec1758fe78a098274a078e"
  },
  {
    "url": "assets/js/12.6e6431ff.js",
    "revision": "7ecd4a104c52dd7316ba5fdc373ff6d2"
  },
  {
    "url": "assets/js/13.81bf5f60.js",
    "revision": "d135844e9092ad28de87bf39812bfd75"
  },
  {
    "url": "assets/js/14.bd32746b.js",
    "revision": "7c7fbfbd7d134fe1d39b50f0d85b5365"
  },
  {
    "url": "assets/js/15.c91d890c.js",
    "revision": "ee2f5ae0c2e2d835d1967688c12bd722"
  },
  {
    "url": "assets/js/16.a9aa105e.js",
    "revision": "55357d7af9b8285f93101d2dab0f768c"
  },
  {
    "url": "assets/js/17.ab45fabf.js",
    "revision": "30decd8564ed2ff1888b73abeb119734"
  },
  {
    "url": "assets/js/18.f30822b4.js",
    "revision": "83925927e6a34f374d507bee4773c10a"
  },
  {
    "url": "assets/js/19.fedc3762.js",
    "revision": "d3cd0936d73fd751f647420136284fd0"
  },
  {
    "url": "assets/js/20.2c5c8a76.js",
    "revision": "64ecaa8a5d54e033f28c4fc5847290b0"
  },
  {
    "url": "assets/js/21.476b6acc.js",
    "revision": "75a2138c626f5dcfd5b9b97056417e0a"
  },
  {
    "url": "assets/js/22.238653ea.js",
    "revision": "baf971a9236b7ce1a8be74c3d9d5613d"
  },
  {
    "url": "assets/js/23.7e07a5a5.js",
    "revision": "5be62dfc3d7fd3a820248a9939f3533e"
  },
  {
    "url": "assets/js/24.f142b44f.js",
    "revision": "e28d9ec6052764930adf57bf76ade4c8"
  },
  {
    "url": "assets/js/25.c6df3acd.js",
    "revision": "0626798f7d86fd3f0a01f46212faf873"
  },
  {
    "url": "assets/js/26.32653093.js",
    "revision": "fc138bc98e989f6fdf829dd38750dd7d"
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
    "url": "assets/js/7.76a60669.js",
    "revision": "38dddfc922ebfee94a05864bb2524ee7"
  },
  {
    "url": "assets/js/8.9f96f4fa.js",
    "revision": "161c42efec979853a2b743548c132047"
  },
  {
    "url": "assets/js/9.4b2d9968.js",
    "revision": "cd46935e8735eb1e2427052f42282a59"
  },
  {
    "url": "assets/js/app.25201b93.js",
    "revision": "4c62a228da0ee23ff0cd788b39b1383c"
  },
  {
    "url": "assets/js/vendors~docsearch.4c0fa74d.js",
    "revision": "7ccd224cfe9d17af664ed93e31180fc0"
  },
  {
    "url": "config/index.html",
    "revision": "170f1c8c73c5d975dfe364a6712fa363"
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
    "revision": "fec10038be662e452a28eac68a4098ea"
  },
  {
    "url": "guide/debug.html",
    "revision": "cdfac9b15c2f078cb6e0aa2cd513ab4f"
  },
  {
    "url": "guide/directory-and-convention.html",
    "revision": "1336f6df1e98b8f1b869d393f098b408"
  },
  {
    "url": "guide/index.html",
    "revision": "8510edd1fe1853389079b1adeb9fddad"
  },
  {
    "url": "guide/production.html",
    "revision": "9cbaaa550f2baa8fc9ff78691c78fc74"
  },
  {
    "url": "guide/unit-test.html",
    "revision": "bb51b6af5bf04ee39bebd0e03cffa8dc"
  },
  {
    "url": "index.html",
    "revision": "5785c338515b92cf4f970e571051cba0"
  },
  {
    "url": "plugin-intelliSense.gif",
    "revision": "4651a864aedc050fa6840ffacfc277b9"
  },
  {
    "url": "plugin/develop-plugin.html",
    "revision": "80a0f91fd125e300100a8e613b03d4d9"
  },
  {
    "url": "plugin/index.html",
    "revision": "64dc6d396910adcedaa592bacd76410b"
  },
  {
    "url": "ut-coverage.png",
    "revision": "0594c71cf6dff60fbf23ef43dcddafd6"
  },
  {
    "url": "zh/api/index.html",
    "revision": "97ff1f3ba30ce44c78bcac22defbfdbc"
  },
  {
    "url": "zh/config/index.html",
    "revision": "d0b940b9ef08dc4fee578a03157874e6"
  },
  {
    "url": "zh/guide/configuration.html",
    "revision": "a90f2cb0a158dcefce5649cfe82a9a4e"
  },
  {
    "url": "zh/guide/debug.html",
    "revision": "72a61dfd12dcaaf3e6d0ded879be960f"
  },
  {
    "url": "zh/guide/directory-and-convention.html",
    "revision": "8b75b0375fec6d409a4d2309b98600ed"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "767f1f83b5c12dbe3e25d87e817a5a48"
  },
  {
    "url": "zh/guide/production.html",
    "revision": "ca34422aa61ad65f85b5fd9471a35a54"
  },
  {
    "url": "zh/guide/unit-test.html",
    "revision": "448f893364bcf06edc8165a068547d89"
  },
  {
    "url": "zh/index.html",
    "revision": "123346bba2a4b3b0def8fa02a6f982fb"
  },
  {
    "url": "zh/plugin/develop-plugin.html",
    "revision": "5662a379c019703cfe0942891c754b6c"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "3c159dcf2a7b22664f79c4bc5dbad203"
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
