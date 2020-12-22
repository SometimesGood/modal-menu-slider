// DOM
const modal = document.getElementById("modal");
let signUp = document.getElementById("open");
let closeBtn = document.getElementById("close");

window.addEventListener("click", quit);
function quit(e) {
  // If clicking on the background of the modal not the modal itself
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

signUp.addEventListener("click", (e) => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
