const hamButton = document.querySelector('#menu-icon');
const mainNav = document.querySelector('#main-nav');
const copyYear = document.querySelector('#year');

hamButton.addEventListener("click", () => {
  hamButton.classList.toggle("open");
  mainNav.classList.toggle("open");
});

// gets the date and year
const today = new Date();
let currentYear = today.getFullYear();

copyYear.textContent = currentYear;