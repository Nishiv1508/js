"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal"); //because 3 buttons are there thats whul all is used array of buttons will be stored here
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", () => {
    modal.classList.remove("hidden");
    // modal.style.display = "block";
    overlay.classList.remove("hidden");
  });
}

btnCloseModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  //   modal.style.display = "none";
  overlay.classList.add("hidden");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");

    // if (!modal.classList.contains("hidden")) {
    //   modal.classList.add("hidden");
    //   overlay.classList.add("hidden");
    // }
  }
});
