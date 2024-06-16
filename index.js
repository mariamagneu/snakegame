document.addEventListener("DOMContentLoaded", () => {
  const startScreen = document.getElementById("start-screen");
  const gameScreen = document.getElementById("game-area");

  const startBtn = document.getElementById("start");
  const recordLogBtn = document.getElementById("record-log");
  const liveCount = document.getElementById("lives");
  const snakeChoiceBtn = document.getElementById("snakestyle");
  const lvlEasy = document.getElementById("easy");
  const lvlHard = document.getElementById("hard");

  startBtn.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
  });
});
