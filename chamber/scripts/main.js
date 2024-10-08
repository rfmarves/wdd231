// DOM elements
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");
const currentYearElement = document.querySelector("#currentYear");
const lastModifiedElement = document.querySelector("#lastModified");
const darkmode1 = document.querySelector("#themetoggle-desk");
const darkmode2 = document.querySelector("#themetoggle-mobile");
const bodyTag = document.querySelector("body");

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

// gets the date and year
const today = new Date();
let currentYear = today.getFullYear();

// writes current year into the corresponding SPAN element
currentYearElement.innerHTML = currentYear;

// gets and writes when this document was last modified
lastModifiedElement.innerHTML = document.lastModified;

darkmode1.addEventListener('click', darkModeTriggered);
darkmode2.addEventListener('click', darkModeTriggered);


function darkModeTriggered() {
    bodyTag.classList.toggle("dark-mode");
}