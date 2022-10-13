const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordions => {
  accordions.addEventListener("click", event => {
    accordions.classList.toggle("active");
  })
})