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
  document.addEventListener("keydown", (event) => {
    if (event.code === "KeyA" || event.code === "ArrowLeft") {
      game.player.directionX = -1;
      game.player.directionY = 0; // Ensure only horizontal movement
    }
    if (event.code === "KeyD" || event.code === "ArrowRight") {
      game.player.directionX = 1;
      game.player.directionY = 0; // Ensure only horizontal movement
    }
    if (event.code === "KeyW" || event.code === "ArrowUp") {
      game.player.directionY = -1;
      game.player.directionX = 0; // Ensure only vertical movement
    }
    if (event.code === "KeyS" || event.code === "ArrowDown") {
      game.player.directionY = 1;
      game.player.directionX = 0; // Ensure only vertical movement
    }
  });

  document.addEventListener("keyup", (event) => {
    if (
      event.code === "KeyA" ||
      event.code === "ArrowLeft" ||
      event.code === "KeyD" ||
      event.code === "ArrowRight"
    ) {
      game.player.directionX = 0;
    }
    if (
      event.code === "KeyW" ||
      event.code === "ArrowUp" ||
      event.code === "KeyS" ||
      event.code === "ArrowDown"
    ) {
      game.player.directionY = 0;
    }
  });
});
