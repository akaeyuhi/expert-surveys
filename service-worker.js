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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "dc1c62cde531087b93ccdee21a9b55d2"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.67328919.css",
    "revision": "252c66d100dd39c82753a701ff903149"
  },
  {
    "url": "assets/img/getResult.54be1ce6.png",
    "revision": "54be1ce6c57a23290bca6250a98a4dfa"
  },
  {
    "url": "assets/img/getSurvey.bfdb9c86.png",
    "revision": "bfdb9c869521d3e8925db65951bde8ea"
  },
  {
    "url": "assets/img/Invitation.28183e2e.png",
    "revision": "28183e2e183752a2a31bdbeedd7bec60"
  },
  {
    "url": "assets/img/postSurvey.bd46254d.png",
    "revision": "bd46254d5a0ac015a2d1c0e8ee348250"
  },
  {
    "url": "assets/img/putSurvey.9d4c388f.png",
    "revision": "9d4c388fb53f4f5c6a6857a1b9be8a22"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Stats.f3b5d323.png",
    "revision": "f3b5d323ebd6c6dee125e518a6b087fd"
  },
  {
    "url": "assets/js/10.90f7e60d.js",
    "revision": "085bdd89f5f3991eeaa7a9fdb477bf2d"
  },
  {
    "url": "assets/js/11.b3c4bf42.js",
    "revision": "39e7c88a0ebf90e56ef81af6d66241a7"
  },
  {
    "url": "assets/js/12.00efee85.js",
    "revision": "102cb8cd989167adcb8d4825b4746efa"
  },
  {
    "url": "assets/js/13.9e63f8af.js",
    "revision": "314dfb605b1b0cb7cf2c038f4ddcc3e2"
  },
  {
    "url": "assets/js/14.fc6c5139.js",
    "revision": "ff486dff4df03c85fff36c5224906b5f"
  },
  {
    "url": "assets/js/15.d132eb62.js",
    "revision": "60de129a79dfb7ff7f704a01d8f0fa28"
  },
  {
    "url": "assets/js/16.841194fd.js",
    "revision": "ef5269276fe7a8c5ed69359b3b27a69e"
  },
  {
    "url": "assets/js/17.ed629e69.js",
    "revision": "98b2c0fe8b2ce5594f8f0ab2db21c4e5"
  },
  {
    "url": "assets/js/18.afb416e3.js",
    "revision": "1f8850378ed1c3fbe7a353a3361d1cac"
  },
  {
    "url": "assets/js/19.b3ec0fcd.js",
    "revision": "b6f7e20f56e818863e5928f014f56c64"
  },
  {
    "url": "assets/js/2.93a88bc3.js",
    "revision": "6d996a53833210ca10255142c5c36988"
  },
  {
    "url": "assets/js/20.e45972c4.js",
    "revision": "4027aaad2d4ce931d9343d3b13cfcca1"
  },
  {
    "url": "assets/js/21.c87b5cbc.js",
    "revision": "6b4bcbecf137706023bfb67de016f4bd"
  },
  {
    "url": "assets/js/22.a6356cd8.js",
    "revision": "ee03a34d97699366c0a8ce3921b115d5"
  },
  {
    "url": "assets/js/23.cacaaf58.js",
    "revision": "1ef03c40d7a180063148de73903dc289"
  },
  {
    "url": "assets/js/24.ae37dc7c.js",
    "revision": "356b2ba1c187379ec9562be2b5045e27"
  },
  {
    "url": "assets/js/26.3c822010.js",
    "revision": "1d7ef879cca20301855345f504b39c43"
  },
  {
    "url": "assets/js/3.33ea2147.js",
    "revision": "33c83bebc5d4cddaf429623046e4a6d0"
  },
  {
    "url": "assets/js/4.b09a918e.js",
    "revision": "f225bdb37b1ecb9ceb294bd9a1772136"
  },
  {
    "url": "assets/js/5.83fb9fd2.js",
    "revision": "eee9252fd7e5567b1c3386a9c1da6bf4"
  },
  {
    "url": "assets/js/6.c15e1ff6.js",
    "revision": "f4f43e1039561b43a9a6f0f43f2150a0"
  },
  {
    "url": "assets/js/7.9bf9127b.js",
    "revision": "789883fc7f178f92f992a15de06b848b"
  },
  {
    "url": "assets/js/8.0aa2d5db.js",
    "revision": "b5cb1119f89ac92a2d649bc828e74776"
  },
  {
    "url": "assets/js/9.e59e2438.js",
    "revision": "a90235b8c4494c86e593156e4a8c04df"
  },
  {
    "url": "assets/js/app.2b0909d2.js",
    "revision": "6677d78f58b1f0ce0031b8f6dc6c9a33"
  },
  {
    "url": "conclusion/index.html",
    "revision": "4a593e24be061610e8c8911df301affa"
  },
  {
    "url": "design/index.html",
    "revision": "5094a27ebfb38d0938e309c933b36167"
  },
  {
    "url": "index.html",
    "revision": "38a50eb5f10dbeb4b15f8abd5b07b371"
  },
  {
    "url": "intro/index.html",
    "revision": "ee07e6d3cf22f83edef45211b0da134d"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "b1f2ed70b451ef9da85f756c40bd95d4"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "6f88992d441e5d2b26425df11c0df43b"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "f478e02239b89e3f97c9efaaee99b4bb"
  },
  {
    "url": "software/index.html",
    "revision": "51bddaa37e3428ac367189bd8f4a75b2"
  },
  {
    "url": "test/index.html",
    "revision": "8124e6a88cc7ec49a2f218028015c7a4"
  },
  {
    "url": "use cases/index.html",
    "revision": "170c5e4c126ae81b3173832436f351fc"
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
