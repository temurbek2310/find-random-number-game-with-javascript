"use strict";

let elChekBtn = document.querySelector(".check");
let elGuessInput = document.querySelector(".guess");
let elMessage = document.querySelector(".message");
let elNumber = document.querySelector(".number");
let elScore = document.querySelector(".score");
let elHighScore = document.querySelector(".highscore");
let elAgain = document.querySelector(".again");
let elLoader = document.querySelector(".loader");
let elOverlay = document.querySelector(".overlay");

setTimeout(() => {
  elOverlay.style.opacity = "0";
  elLoader.style.opacity = "0";
  setTimeout(() => {
    elOverlay.style.display = "none";
    elLoader.style.display = "none";
  }, 800);
}, 2000);

let score = 10;
let highScore = 0;
// CREATE SECRETNUMBER
let secretNumber = Math.floor(Math.random() * 20) + 1;

// ELCHECKBTN CLICK EVENT
elChekBtn.addEventListener("click", () => {
  let guessValue = elGuessInput.value;

  if (!guessValue) {
    elMessage.textContent = "Iltimos son kiriting";
  } else if (guessValue == secretNumber) {
    elMessage.textContent = "Topdingiz!";
    elNumber.textContent = secretNumber;
    document.body.style.background = "green";
    if (score > highScore) {
      highScore = score;
      elHighScore.textContent = highScore;
    }
  } else if (guessValue < secretNumber) {
    elMessage.textContent = "Bu son kichikroq!";
    score--;
    elScore.textContent = `💯 Hisob: ${score}`;
    if (score === 0) {
      elMessage.textContent = "Game Over";
      document.body.style.background = "red";
      elChekBtn.disabled = true;
      elGuessInput.value = null;
    }
  } else if (guessValue > secretNumber) {
    elMessage.textContent = "Bu son kattaroq!";
    score--;
    elScore.textContent = `💯 Hisob: ${score}`;
    if (score === 0) {
      elMessage.textContent = "Game Over";
      document.body.style.background = "red";
      elChekBtn.disabled = true;
      elGuessInput.value = null;
    }
  }
});

elAgain.addEventListener("click", () => {
  score = 10;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  elNumber.textContent = "?";
  document.body.style.background = "#222";
  elGuessInput.value = null;
  elScore.textContent = `💯 Hisob: ${score}`;
  elMessage.textContent = "Loading...";
  elHighScore.textContent = 0;
  elChekBtn.disabled = false;
});