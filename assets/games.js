/* ============================================
   idalurie.com — Shared Game Utilities
   ============================================ */

var GameUtils = (function () {
  "use strict";

  /* Pick a random item from an array */
  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  /* Random integer between min and max (inclusive) */
  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /* Convert HSL values to a hex color string */
  function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;
    function f(n) {
      var k = (n + h / 30) % 12;
      var color = l - s * Math.min(l, 1 - l) * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, "0");
    }
    return "#" + f(0) + f(8) + f(4);
  }

  /* Copy text to clipboard */
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  }

  /* Spawn confetti animation */
  function confetti() {
    var colors = ["#4d96ff", "#51cf66", "#ffd43b", "#ff6b6b", "#ff922b", "#cc5de8", "#20c997", "#f06595"];
    for (var i = 0; i < 50; i++) {
      var piece = document.createElement("div");
      piece.className = "confetti-piece";
      piece.style.left = Math.random() * 100 + "vw";
      piece.style.top = "-10px";
      piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDelay = Math.random() * 1 + "s";
      piece.style.animationDuration = 2 + Math.random() * 1.5 + "s";
      piece.style.width = 5 + Math.random() * 7 + "px";
      piece.style.height = 5 + Math.random() * 7 + "px";
      document.body.appendChild(piece);
    }
    setTimeout(function () {
      var pieces = document.querySelectorAll(".confetti-piece");
      for (var j = 0; j < pieces.length; j++) {
        pieces[j].remove();
      }
    }, 4000);
  }

  return {
    pick: pick,
    randInt: randInt,
    hslToHex: hslToHex,
    copyText: copyText,
    confetti: confetti
  };
})();
