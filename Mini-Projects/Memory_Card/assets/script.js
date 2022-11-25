const cards = document.querySelectorAll(".card");

cards.forEach((el) => {
  el.addEventListener("click", function () {
    let toggleCard = false;
    !toggleCard ? el.classList.add("active") : el.classList.remove("active");
  });
});
