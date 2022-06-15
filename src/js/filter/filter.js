export const filter = () => {
  const industrySelect = document.querySelector("[js-data-select]");
  const cards = document.querySelectorAll("[data-industry]");

  industrySelect.addEventListener("change", function () {
    let value = industrySelect.value;
    cards.forEach(function (card) {
      if (card.dataset.industry === value || value === "all") {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
};
