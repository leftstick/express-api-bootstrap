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
    "revision": "a37c0cbd3a6dbfc205a157d88aeaa79d"
  },
  {
    "url": "api/index.html",
    "revision": "2c8c7fae03914e1ea7dca0203bcc9015"
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
    "url": "assets/js/10.9b206653.js",
    "revision": "0620533a050bfce604eedce0ce4e0555"
  },
  {
    "url": "assets/js/11.9928608d.js",
    "revision": "f29dae2b7296128fb97537fd10fe8cc6"
  },
  {
    "url": "assets/js/12.ed24f6cf.js",
    "revision": "ead141376b0e7f909ff188ee96aa2f72"
  },
  {
    "url": "assets/js/13.01296709.js",
    "revision": "f7bf30ef1a694c2696fead47964af569"
  },
  {
    "url": "assets/js/14.b0e5a362.js",
    "revision": "7bac39a415e6f1fe1fe9eb95b7cecb02"
  },
  {
    "url": "assets/js/15.08ef2a94.js",
    "revision": "0d2321a0f57465b0b7aff7e549c41145"
  },
  {
    "url": "assets/js/16.1f5c9372.js",
    "revision": "46d8f76d4f07af0532698cd552236a84"
  },
  {
    "url": "assets/js/17.5a80fbf9.js",
    "revision": "0001937a5068620a8a65408fe9b14891"
  },
  {
    "url": "assets/js/18.11952ffb.js",
    "revision": "653c6656054855cec24005d24e726e52"
  },
  {
    "url": "assets/js/19.fde37eb8.js",
    "revision": "d3cd0936d73fd751f647420136284fd0"
  },
  {
    "url": "assets/js/20.2f16caa7.js",
    "revision": "ade840ac4990e1eb12ab151550a7a283"
  },
  {
    "url": "assets/js/21.43223a67.js",
    "revision": "3dc5a27b4d3f5e5ab99115d0ad986e88"
  },
  {
    "url": "assets/js/22.58faf1bc.js",
    "revision": "0da72543fa53d7db8cf15040d2e98b4c"
  },
  {
    "url": "assets/js/23.f7b0fd18.js",
    "revision": "09421744d68cd7ad6d4e0007445414b1"
  },
  {
    "url": "assets/js/24.a7aad863.js",
    "revision": "e28d9ec6052764930adf57bf76ade4c8"
  },
  {
    "url": "assets/js/25.0ce93dfd.js",
    "revision": "33a2d0e5586ecf1784143a0ad395716d"
  },
  {
    "url": "assets/js/26.a84b462d.js",
    "revision": "56b36df713150d13f603b242e2b46a3c"
  },
  {
    "url": "assets/js/27.b970000f.js",
    "revision": "683ad1fa2bdc1fda059540ab8cf25cc4"
  },
  {
    "url": "assets/js/28.5ab63c8a.js",
    "revision": "04d6edbbc796272680b321a0f8dab506"
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
    "url": "assets/js/7.054bcdbc.js",
    "revision": "db66523974b44d3ceecb4983b6849321"
  },
  {
    "url": "assets/js/8.5eebdc1a.js",
    "revision": "161c42efec979853a2b743548c132047"
  },
  {
    "url": "assets/js/9.859df2a1.js",
    "revision": "10a8bff73bb2353033557d0034bc7e83"
  },
  {
    "url": "assets/js/app.bffd8073.js",
    "revision": "ed8775405d0b47edeb76e203f066c50a"
  },
  {
    "url": "assets/js/vendors~docsearch.7dd05275.js",
    "revision": "7ccd224cfe9d17af664ed93e31180fc0"
  },
  {
    "url": "config/index.html",
    "revision": "116dd6afe606da8eb2e1dd06748cadf7"
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
    "revision": "fe5e2c0ff64cdfb89e294f7ada357e1a"
  },
  {
    "url": "guide/debug.html",
    "revision": "0ae7a01b269808256a6af3634875ae32"
  },
  {
    "url": "guide/directory-and-convention.html",
    "revision": "3fa17b12100af6589f07d5dc8a8efe58"
  },
  {
    "url": "guide/index.html",
    "revision": "b7ab13e9263098bfbb751bc14188c01c"
  },
  {
    "url": "guide/production.html",
    "revision": "fd2959e34e0222672d522110f07202ab"
  },
  {
    "url": "guide/unit-test.html",
    "revision": "9c4d1ec178260d9030174f7b8f6f97e5"
  },
  {
    "url": "index.html",
    "revision": "9302c26b6fd7506c1c645013614adac7"
  },
  {
    "url": "plugin-intelliSense.gif",
    "revision": "4651a864aedc050fa6840ffacfc277b9"
  },
  {
    "url": "plugin/develop-plugin.html",
    "revision": "736c45ba9160d510c80b53d36e7dd6e0"
  },
  {
    "url": "plugin/index.html",
    "revision": "01f31dad391cb9ae1b3838ddf3d4ef95"
  },
  {
    "url": "ut-coverage.png",
    "revision": "0594c71cf6dff60fbf23ef43dcddafd6"
  },
  {
    "url": "zh/api/index.html",
    "revision": "440712680da74652a60d634d359e4dc9"
  },
  {
    "url": "zh/config/index.html",
    "revision": "1780885e072913fae7ded2fe20218670"
  },
  {
    "url": "zh/guide/configuration.html",
    "revision": "c185c7845e479f0fd9c1e9ba0cb19ad1"
  },
  {
    "url": "zh/guide/debug.html",
    "revision": "2d6e9de7d759c9984196cb4fba6ae063"
  },
  {
    "url": "zh/guide/directory-and-convention.html",
    "revision": "f718cc3acf3b9c00165af63fcf25f453"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "b625066fbaf121ef77ade93fa8eeb307"
  },
  {
    "url": "zh/guide/production.html",
    "revision": "f6ad2373362e9a5b3a3f1f62cc14dbc6"
  },
  {
    "url": "zh/guide/unit-test.html",
    "revision": "5d69f0e05374d7a6cfc272415b57a6fc"
  },
  {
    "url": "zh/index.html",
    "revision": "1c7a186a42f0b88068d5d7013a23b7d5"
  },
  {
    "url": "zh/plugin/develop-plugin.html",
    "revision": "fe8ab25f09878cfdba8ebf32ab14775d"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "13059ed6a6cb72c993698f4bdc33c4a0"
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
