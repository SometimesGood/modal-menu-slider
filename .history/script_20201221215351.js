// DOM
const modal = document.getElementById("modal");
let signUp = document.getElementById("open");
let closeBtn = document.getElementById("close");

function closeModal() {
  if (modal.style.display == "block") {
    document.body.addEventListener("click", (e) => {
      modal.style.display = "none";
    });
  }
}

signUp.addEventListener("click", (e) => {
  e.stopPropagation;
  modal.style.display = "block";
  closeModal();
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
