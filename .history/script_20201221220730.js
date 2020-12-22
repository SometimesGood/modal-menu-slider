// DOM
const modal = document.getElementById("modal");
let signUp = document.getElementById("open");
let closeBtn = document.getElementById("close");

window.addEventListener("click", quit);
function quit(e) {
  console.log("hi");
  if (e.target == modal) {
    modal.style.display = "none";
    console.log("bye");
  }
}

signUp.addEventListener("click", (e) => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
