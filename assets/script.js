/* ============================================
   idalurie.com — Main Script
   ============================================ */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  /* ---- Mobile Nav Toggle ---- */

  var navToggle = document.querySelector(".nav-toggle");
  var siteNav = document.querySelector(".site-nav");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      siteNav.classList.toggle("is-open");
    });
  }

  /* ---- Footer Year ---- */

  var yearEl = document.querySelector(".footer-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---- Inline Demo Game (Games Page) ---- */

  var demoArea = document.querySelector(".games-demo__area");

  if (demoArea) {
    var demoTarget = demoArea.querySelector(".games-demo__target");
    var demoScore = demoArea.querySelector(".games-demo__score");
    var score = 0;

    function moveDemoTarget() {
      var maxX = demoArea.offsetWidth - 40;
      var maxY = demoArea.offsetHeight - 40;
      var x = Math.random() * maxX;
      var y = Math.random() * maxY;
      demoTarget.style.left = x + "px";
      demoTarget.style.top = y + "px";
    }

    moveDemoTarget();

    demoTarget.addEventListener("click", function () {
      score++;
      demoScore.textContent = "Score: " + score;
      moveDemoTarget();
    });
  }
});
