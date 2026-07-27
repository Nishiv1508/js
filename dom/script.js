"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = secretNumber;
let score = 20;
let highScore = 20;

let checkButton = document.querySelector(".check");
checkButton.addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No number entered";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector(".number").textContent = secretNumber;
    let val = Number(document.querySelector(".highscore").textContent);
    if (val < highScore) {
      document.querySelector(".highscore").textContent = highScore;
    }
    document.querySelector("body").style.backgroundColor = "green";
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? (document.querySelector(".message").textContent = "Too high")
        : (document.querySelector(".message").textContent = "Too Low");
      score--;
      highScore--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Gameover";
      document.querySelector(".score").textContent = 0;
    }
  }
});

let againButton = document.querySelector(".again");
againButton.addEventListener("click", () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  highScore = 20;
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".number").textContent = "?";
});
