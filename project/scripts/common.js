const hamButton = document.querySelector("#menu-icon");
const mainNav = document.querySelector("#main-nav");

hamButton.addEventListener("click", () => {
  hamButton.classList.toggle("open");
  mainNav.classList.toggle("open");
});
