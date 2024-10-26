const familyName = document.querySelector("#family-name")
const firstHymn = document.querySelector("#first-hymn")
const firstPrayer = document.querySelector("#first-prayer")
const messageAssignment = document.querySelector("#message-assignment")
const messageTopic = document.querySelector("#message-topic")
const gameAssignment = document.querySelector("#game-assignment")
const finalHymn = document.querySelector("#final-hymn")
const finalPrayer = document.querySelector("#final-prayer")
const treatAssignment = document.querySelector("#treat-assignment")
const treatRecipe = document.querySelector("#treat-recipe")
const saveButton = document.querySelector('#save-button');
const savePrint = document.querySelector('#print-button');

const saveForm = () => {
    const current_date = new Date();
    const agenda = {
        'save_date': current_date.toDateString(),
        'family_name': familyName.value,
        'first_hymn': firstHymn.value,
        'first_prayer': firstPrayer.value,
        'message_assignment': messageAssignment.value,
        'message_topic': messageTopic.value,
        'game_assignment': gameAssignment.value,
        'final_hymn': finalHymn.value,
        'final_prayer': finalPrayer.value,
        'treat_assignment': treatAssignment.value,
        'treat_recipe': treatRecipe.value,
    };
    localStorage.setItem('agenda', JSON.stringify(agenda));
}

const loadForm = () => {
    if (localStorage.length != 0) {
    let agenda = JSON.parse(localStorage.getItem('agenda'));
    familyName.value = agenda.family_name; 
    firstHymn.value = agenda.first_hymn; 
    firstPrayer.value = agenda.first_prayer; 
    messageAssignment.value = agenda.message_assignment; 
    messageTopic.value = agenda.message_topic; 
    gameAssignment.value = agenda.game_assignment; 
    finalHymn.value = agenda.final_hymn; 
    finalPrayer.value = agenda.final_prayer; 
    treatAssignment.value = agenda.treat_assignment; 
    treatRecipe.value = agenda.treat_recipe; 
    }
}

const printAgenda = () => {
}

saveButton.addEventListener('click', () => {
    saveForm();
});

// saveButton.addEventListener('click', () => {
//     saveForm();
// });

loadForm();
// const today_agenda = new Date();
// console.log(today.toDateString());