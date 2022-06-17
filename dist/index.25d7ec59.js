/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/filter/filter.js
var filter = function filter() {
  var industrySelect = document.querySelector("[js-data-select]");
  var cards = document.querySelectorAll("[data-industry]");
  var delayInMilliseconds = 300;

  var filterCards = function filterCards() {
    var value = industrySelect.value;
    cards.forEach(function (card) {
      if (card.dataset.industry === value || value === "all") {
        card.classList.remove("hidden", "visualhidden");
      } else {
        card.classList.add("visualhidden");
        setTimeout(function () {
          card.classList.add("hidden");
        }, delayInMilliseconds);
      }
    });
  };

  if (industrySelect) {
    document.addEventListener("DOMContentLoaded", function () {
      industrySelect.addEventListener("change", filterCards, false);
    });
  }
};
;// CONCATENATED MODULE: ./src/js/index.js



filter();
/******/ })()
;