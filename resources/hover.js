document.addEventListener("click", function (e) {
  var t = document.querySelectorAll(".hover-text"),
    c = e.target,
    a = false;
  t.forEach(function (e) {
    e.contains(c) && (a = true), e.classList.remove("active");
  }),
    a ||
      t.forEach(function (e) {
        e.classList.remove("active");
      });
});

(function (Md) {
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
