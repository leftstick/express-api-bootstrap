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
    "revision": "7231e22e3c0c0c662b3728f1b15ba345"
  },
  {
    "url": "api/index.html",
    "revision": "16353694970ee3ed5528865509377b0e"
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
    "url": "assets/js/10.6074f9c6.js",
    "revision": "5a7ee272414c826c4d5cb3eca2ac3725"
  },
  {
    "url": "assets/js/11.4072683a.js",
    "revision": "4a88b9dec0cb88c346dace6d17e0071f"
  },
  {
    "url": "assets/js/12.68529b51.js",
    "revision": "6c5798a70734662dcdab77240e4be9ad"
  },
  {
    "url": "assets/js/13.62df93b1.js",
    "revision": "d135844e9092ad28de87bf39812bfd75"
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
    "url": "assets/js/16.d21ce6e7.js",
    "revision": "7a282792d80599ede3c06a3d17fa50fb"
  },
  {
    "url": "assets/js/17.2cc2cef1.js",
    "revision": "4e7ffd3437b3d8f5b9a24679f0374c56"
  },
  {
    "url": "assets/js/18.adc70161.js",
    "revision": "6a52a79bbb9258282124c609816dad2b"
  },
  {
    "url": "assets/js/19.ea532688.js",
    "revision": "a01bb575b412a1c098208ee9329d84ee"
  },
  {
    "url": "assets/js/20.eeaefcf1.js",
    "revision": "d10795c2b6da0607bb3aff63f4d91157"
  },
  {
    "url": "assets/js/21.5b1f78b8.js",
    "revision": "de3890ae9396e671e4f420adedab0cec"
  },
  {
    "url": "assets/js/22.8238ba45.js",
    "revision": "585d73991ec5f2122b3d4b98a2e106bf"
  },
  {
    "url": "assets/js/23.4349a4e2.js",
    "revision": "6bba429df69917349301c020140e09d0"
  },
  {
    "url": "assets/js/24.92c54c24.js",
    "revision": "d6c420c446b3bcec0689de5c4356f396"
  },
  {
    "url": "assets/js/25.cd21723c.js",
    "revision": "0626798f7d86fd3f0a01f46212faf873"
  },
  {
    "url": "assets/js/26.7440721a.js",
    "revision": "f90d6fcd4edc7589720e576076fed567"
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
    "url": "assets/js/7.e1b05790.js",
    "revision": "2a073d9c751686a37560ac3cd24ebaa1"
  },
  {
    "url": "assets/js/8.e5ea8ae0.js",
    "revision": "4b3c1c73901d119e3ecac9567af36e1d"
  },
  {
    "url": "assets/js/9.ba6c379e.js",
    "revision": "dacd1737f7e750ced232ab31aa699607"
  },
  {
    "url": "assets/js/app.0a58a51d.js",
    "revision": "88e5636898e1f7d79323587944d76f43"
  },
  {
    "url": "assets/js/vendors~docsearch.7dd05275.js",
    "revision": "7ccd224cfe9d17af664ed93e31180fc0"
  },
  {
    "url": "config/index.html",
    "revision": "f241f410f76ddd96579b546c301e1424"
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
    "revision": "aaa1ff46a2b35088ee8b23042c5a93a1"
  },
  {
    "url": "guide/debug.html",
    "revision": "3119f58f0ec7986aea3a133a2c2671fd"
  },
  {
    "url": "guide/directory-and-convention.html",
    "revision": "1167cb8c891ebc4b22850ea548643f6c"
  },
  {
    "url": "guide/index.html",
    "revision": "803667472c6f1902df7557213bfe62c9"
  },
  {
    "url": "guide/production.html",
    "revision": "d05fda8a1e5c24fb34da643f4436eb48"
  },
  {
    "url": "guide/unit-test.html",
    "revision": "01f73bd9d50876222c5ea19d2f00a092"
  },
  {
    "url": "index.html",
    "revision": "f25a78e47aec701cc9f6d4139eea1ff9"
  },
  {
    "url": "plugin-intelliSense.gif",
    "revision": "4651a864aedc050fa6840ffacfc277b9"
  },
  {
    "url": "plugin/develop-plugin.html",
    "revision": "2f33aa5eef2facb2af71e024fe5224f1"
  },
  {
    "url": "plugin/index.html",
    "revision": "530f202dd1997838c537d0ef8ba85ed8"
  },
  {
    "url": "ut-coverage.png",
    "revision": "0594c71cf6dff60fbf23ef43dcddafd6"
  },
  {
    "url": "zh/api/index.html",
    "revision": "f68f082b7bcc70731275fd854628ae72"
  },
  {
    "url": "zh/config/index.html",
    "revision": "96c78eb95c853b9dea3f2c79de5cbb28"
  },
  {
    "url": "zh/guide/configuration.html",
    "revision": "4f5709cd998c891a0cd436a8d0ec321a"
  },
  {
    "url": "zh/guide/debug.html",
    "revision": "0bdac0f38c93709d1cf1a0ecb280e3b4"
  },
  {
    "url": "zh/guide/directory-and-convention.html",
    "revision": "9bbce47c7a5532d0dbd2dd82790c8236"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "1a01280d123009bf884fd1d96ba62770"
  },
  {
    "url": "zh/guide/production.html",
    "revision": "fb6e6d0ef890b7032c50b037d734acf8"
  },
  {
    "url": "zh/guide/unit-test.html",
    "revision": "10b449c4fb9cd0e5579b513293ae29ab"
  },
  {
    "url": "zh/index.html",
    "revision": "91d221ce3ad56206f15286ebdef38841"
  },
  {
    "url": "zh/plugin/develop-plugin.html",
    "revision": "2b952ce58903f8fa58fedc4255c801b1"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "65e0120cbf8991f262b1f190cd01722c"
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
