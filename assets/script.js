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
});
