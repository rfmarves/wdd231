const body = document.querySelector('body');
const title = document.querySelector('title');
const agendaData = JSON.parse(localStorage.getItem('agenda'));
// console.log(agendaData);

const populateAgenda = () => {
    title.textContent = `${agendaData.family_name} Agenda`;
    body.innerHTML = `
    <div class="print-agenda" id="agenda-print">
        <h1>${agendaData.family_name} Family Home Evening</h1>
        <p>Date: <strong>${agendaData.save_date}</strong></p>
        <p>First Hymn: <strong>${agendaData.first_hymn}</strong></p>
        <p>First Prayer: <strong>${agendaData.first_prayer}</strong></p>
        <p>Message: <strong>${agendaData.message_assignment}</strong></p>
        <p>Today we will talk about <strong>${agendaData.message_topic}</strong></p>
        <p>Game by: <strong>${agendaData.game_assignment}</strong></p>
        <p>Final Hymn: <strong>${agendaData.final_hymn}</strong></p>
        <p>Final Prayer: <strong>${agendaData.final_prayer}</strong></p>
        <br>
        <p><strong>${agendaData.treat_recipe}</strong> by <strong>${agendaData.treat_assignment}</strong></p>
        <br>
        <p class="footer"><span>Template provided by FHE.support</span><img src="images/fhe-support-logo-75.webp" alt="FHE Support logo"></p>
    </div>
    `
}

populateAgenda();
window.onafterprint = window.close;
window.print();

// window.addEventListener('focus', () => {
//     window.close();
// });
