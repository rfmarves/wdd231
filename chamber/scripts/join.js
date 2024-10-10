// DOM declarations
const goldCard = document.querySelector("#goldCard");
const silverCard = document.querySelector("#silverCard");
const bronzeCard = document.querySelector("#bronzeCard");
const npCard = document.querySelector("#npCard");
const goldModal = document.querySelector("#goldModal");
const silverModal = document.querySelector("#silverModal");
const bronzeModal = document.querySelector("#bronzeModal");
const npModal = document.querySelector("#npModal");

// Event listeners
goldCard.addEventListener("click", () => {
  goldModal.showModal();
});

silverCard.addEventListener("click", () => {
  silverModal.showModal();
});

bronzeCard.addEventListener("click", () => {
  bronzeModal.showModal();
});

npCard.addEventListener("click", () => {
  npModal.showModal();
});

goldModal.addEventListener("click", () => {
  goldModal.close();
});

silverModal.addEventListener("click", () => {
  silverModal.close();
});

bronzeModal.addEventListener("click", () => {
  bronzeModal.close();
});

npModal.addEventListener("click", () => {
  npModal.close();
});
