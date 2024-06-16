document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.querySelector("#start");

  let game;
  console.log("is someone there???");
  function startGame() {
    console.log("game has officially started");
    game = new Game();
    game.start();
  }

  startBtn.addEventListener("click", () => {
    startGame();
  });
});
