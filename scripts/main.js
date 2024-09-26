// DOM elements
const mainnav = document.querySelector("#animateme");
const hambutton = document.querySelector("#menu");
const currentYearElement = document.querySelector("#currentYear");
const lastModifiedElement = document.querySelector("#lastModified");

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
