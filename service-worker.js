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
    "revision": "255c968f493ade29b0b02288a162952e"
  },
  {
    "url": "api/index.html",
    "revision": "8eca8898b0df019845b7b83d9193f0fc"
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
    "url": "assets/js/11.d3f83436.js",
    "revision": "57649e8d91d2d60297516286046ad0ec"
  },
  {
    "url": "assets/js/12.69d3444f.js",
    "revision": "23307348b4392572ed2f5847ab57045a"
  },
  {
    "url": "assets/js/13.784c52a0.js",
    "revision": "d969e02f8eaa3abd7f68b9d5ee8f1c8c"
  },
  {
    "url": "assets/js/14.4fdad81c.js",
    "revision": "7bac39a415e6f1fe1fe9eb95b7cecb02"
  },
  {
    "url": "assets/js/15.a511548b.js",
    "revision": "d1b19a81cb9a033a03b70b24bfc03832"
  },
  {
    "url": "assets/js/16.0c2c61ec.js",
    "revision": "0416715ba799f3a352ff0a7929db0ddf"
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
    "url": "assets/js/19.8acb7929.js",
    "revision": "496756369d49983c5d79e4755c8a7dec"
  },
  {
    "url": "assets/js/20.00548d41.js",
    "revision": "188049ed8bfc3cbb9489fe05cc2e8c65"
  },
  {
    "url": "assets/js/21.d6d370bb.js",
    "revision": "de3890ae9396e671e4f420adedab0cec"
  },
  {
    "url": "assets/js/22.1ff7d6b1.js",
    "revision": "e82f946b79eafd55b8955388a3bdb586"
  },
  {
    "url": "assets/js/23.58b4dbc6.js",
    "revision": "09421744d68cd7ad6d4e0007445414b1"
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
    "url": "assets/js/26.1b9b06dc.js",
    "revision": "76085a37b40d7b45e14b57e06143a58a"
  },
  {
    "url": "assets/js/27.88be44f9.js",
    "revision": "b81222cdde145caf2a58a23653a23bca"
  },
  {
    "url": "assets/js/28.7b7e71da.js",
    "revision": "2501c399106d263c11519f0be8590fc6"
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
    "url": "assets/js/7.ddd262c1.js",
    "revision": "7a853f9ae63d858ae45783b8ecd8f1a0"
  },
  {
    "url": "assets/js/8.0f61f148.js",
    "revision": "1bfbb14fa93aa7191a3b049f73968421"
  },
  {
    "url": "assets/js/9.c70cef51.js",
    "revision": "4f911bd8da3dda6a514af597cdefab6c"
  },
  {
    "url": "assets/js/app.52190c34.js",
    "revision": "37e7286714bdb273d639e13d6cd9f6d0"
  },
  {
    "url": "assets/js/vendors~docsearch.4c0fa74d.js",
    "revision": "7ccd224cfe9d17af664ed93e31180fc0"
  },
  {
    "url": "config/index.html",
    "revision": "83fb28a9e46067e92a6f9e49b6fd9f85"
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
    "revision": "6c10d167bc1524331d9fcac1be10b360"
  },
  {
    "url": "guide/debug.html",
    "revision": "74309c34e76bc60d672105e2a70b3fbb"
  },
  {
    "url": "guide/directory-and-convention.html",
    "revision": "f831b3f45504554676832a3dcf40cb40"
  },
  {
    "url": "guide/index.html",
    "revision": "60459f8f3411baac159ff5bd7d06c5df"
  },
  {
    "url": "guide/production.html",
    "revision": "c6fc5fa6f753c7e0d075f11966198508"
  },
  {
    "url": "guide/unit-test.html",
    "revision": "919b5fa58e262f324fd5607f32143f16"
  },
  {
    "url": "index.html",
    "revision": "0a6c4354d71dd4b72d3b289b44fb3f73"
  },
  {
    "url": "plugin-intelliSense.gif",
    "revision": "4651a864aedc050fa6840ffacfc277b9"
  },
  {
    "url": "plugin/develop-plugin.html",
    "revision": "44dec2b75eef7df5fd3dde5b47017d64"
  },
  {
    "url": "plugin/index.html",
    "revision": "3da23c0d39822a475096ae891f2f43a5"
  },
  {
    "url": "ut-coverage.png",
    "revision": "0594c71cf6dff60fbf23ef43dcddafd6"
  },
  {
    "url": "zh/api/index.html",
    "revision": "eeb5400ea7daf793d445318ceee1a370"
  },
  {
    "url": "zh/config/index.html",
    "revision": "079643c39e5a6ace4bcef49f48ad7047"
  },
  {
    "url": "zh/guide/configuration.html",
    "revision": "5acc01bc562991d4048123dbb1916539"
  },
  {
    "url": "zh/guide/debug.html",
    "revision": "7d7a4a034976990ac3d34a5d34c3190b"
  },
  {
    "url": "zh/guide/directory-and-convention.html",
    "revision": "5536401a321464b34344a0a572f6ea47"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "8ddc20faf26e3724eb14f5394cb517bc"
  },
  {
    "url": "zh/guide/production.html",
    "revision": "52b97161770ee3524e060319c8882c81"
  },
  {
    "url": "zh/guide/unit-test.html",
    "revision": "bfa5e784b920120632f0c8432bdf8cc8"
  },
  {
    "url": "zh/index.html",
    "revision": "499a6b47b189ba48744cc380309f5174"
  },
  {
    "url": "zh/plugin/develop-plugin.html",
    "revision": "020b988b77443cae636fb108957c43cf"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "a2877e2c7b8cf7c84667e495fd39788a"
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
