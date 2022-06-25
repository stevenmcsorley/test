export const filter = () => {

  const industrySelect = document.querySelector("[js-data-select]");
  const cards = document.querySelectorAll("[data-industry]");
  var delayInMilliseconds = 300;

  const filterCards = () => {
    let value = industrySelect.value;
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
    window.dataLayer.push({
      event: 'selectionMade',
      selectedElement: value
    });
    
  };

  if (industrySelect) {
    document.addEventListener("DOMContentLoaded", function () {
      industrySelect.addEventListener("change", filterCards, false);
    });
  }
};
