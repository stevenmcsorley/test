export const filter = () => {
  const industrySelect = document.querySelector("[js-data-select]");
  const cards = document.querySelectorAll("[data-industry]");

  const filterCards = () => {
    let value = industrySelect.value;
    cards.forEach(function (card) {
      if (card.dataset.industry === value || value === "all") {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  };

  if (industrySelect) {
    document.addEventListener("DOMContentLoaded", function () {
      industrySelect.addEventListener("change", filterCards, false);
    });
  }
};
