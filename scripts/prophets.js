const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

let prophetsData = "";

const cards = document.querySelector("#cards");
const utahBtn = document.querySelector("#btnUtah");
// const outUsaBtn = document.querySelector("#btnOutUsa");
// const nintyfiveBtn = document.querySelector("#btn95");
const childrenBtn = document.querySelector("#btnChildren");
const served15Btn = document.querySelector("#btn15");
const showAll = document.querySelector("#btnAll");

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
    prophetsData = data.prophets;
} 

const ordinalNumber = (number) => {
    let j = number % 10;
    let k = number % 100;
    if (j == 1 && k !== 11) {
        return `${number}st`
    };
    if(j == 2 && k !== 12) {
        return `${number}nd`
    };
    if(j == 3 && k !== 13) {
        return `${number}rd`
    };
    return `${number}th`;
}

const displayProphets = (prophets) => {
    cards.innerHTML = "";
    prophets.forEach(prophet => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const dateOfBirth = document.createElement("p");
        const placeOfBirth = document.createElement("p");
        const portrait = document.createElement("img");
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute("src",     prophet.imageurl);
        portrait.setAttribute("alt",     `${prophet.name} ${prophet.lastname} - ${ordinalNumber(prophet.order)} Latter-day President`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width",   150);
        portrait.setAttribute("height",  200);
        dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
        placeOfBirth.textContent = `Place of Birth: ${prophet.birthplace}`;
        card.appendChild(fullName);
        card.appendChild(dateOfBirth);
        card.appendChild(placeOfBirth);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}

const resetClasses = () => {
    showAll.classList.remove("selected");
    utahBtn.classList.remove("selected");
    // nintyfiveBtn.classList.remove("selected");
    childrenBtn.classList.remove("selected");
    served15Btn.classList.remove("selected");
}

const calculageAge = (dateStr1, dateStr2) => {

}

// filter event listeners
showAll.addEventListener('click', () => {
    displayProphets(prophetsData);
    resetClasses();
    showAll.classList.add("selected");
})

utahBtn.addEventListener('click', () => {
    displayProphets(prophetsData.filter(prophet => prophet.birthplace == "Utah"));
    resetClasses();
    utahBtn.classList.add("selected");
})

// outUsaBtn.addEventListener('click', () => {
//     displayProphets(prophetsData.filter(prophet => prophet.subject == "WDD"));
// })

// nintyfiveBtn.addEventListener('click', () => {
//     displayProphets(prophetsData.filter(prophet => prophet.subject >= 95));
//     resetClasses();
//     nintyfiveBtn.classList.add("selected");
// })

childrenBtn.addEventListener('click', () => {
    displayProphets(prophetsData.filter(prophet => prophet.numofchildren >= 10));
    resetClasses();
    childrenBtn.classList.add("selected");
})

served15Btn.addEventListener('click', () => {
    displayProphets(prophetsData.filter(prophet => prophet.length >= 15));
    resetClasses();
    served15Btn.classList.add("selected");
})


// initial load of all
getProphetData();