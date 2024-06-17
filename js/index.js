document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.querySelector("#start");

  let game;
  function startGame() {
    console.log("game has officially started");

    const screens = {
      start: document.querySelector("#start-screen"),
      game: document.querySelector("#game-screen"),
      end: document.querySelector("#game-end"),
    };

    const viewPort = {
      height: 600,
      width: 700,
    };
    game = new Game(screens, viewPort);

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
});
