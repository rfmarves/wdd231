// Grab the entire URL for this page including the attached GET values
const currentUrl = window.decodeURI(window.location.href);
// console.log(currentUrl);

// DOM objects to fill
const membership = document.querySelector("#membership");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const title = document.querySelector("#title");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const orgName = document.querySelector("#orgName");
const orgDescription = document.querySelector("#orgDescription");
const timestamp = document.querySelector("#timestamp");


splitFormData = currentUrl.replaceAll('+',' ').replaceAll('%2B', '+').replaceAll('%40','@').split('?')[1].split('&');
// console.log(splitFormData);

let formData = {};

splitFormData.forEach(element => {
    const splitElement = element.split("=");
    formData[splitElement[0]] = splitElement[1];
});

console.log(formData);
membership.textContent = formData.membership;
fname.textContent = formData.firstName;
lname.textContent = formData.lastName;
title.textContent = formData.orgTitle;
email.textContent = formData.email;
phone.textContent = formData.phone;
orgName.textContent = formData.orgName;
orgDescription.textContent = formData.orgDescription;
timestamp.textContent = `${formData.timestamp.slice(0,4)}-${formData.timestamp.slice(4,6)}-${formData.timestamp.slice(6,8)}`;