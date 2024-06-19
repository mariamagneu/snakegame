document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.querySelector("#start");
  const restartBtn = document.querySelector("#restart-button");

  let newGameInstance;
  function startGame() {
    console.log("game has officially started");

    const screens = {
      start: document.querySelector("#start-screen"),
      game: document.querySelector("#game-screen"),
      end: document.querySelector("#game-end"),
    };

    const gameArea = {
      height: 600,
      width: 700,
    };
    newGameInstance = new Game(screens, gameArea);

    newGameInstance.start();
  }

  startBtn.addEventListener("click", () => {
    startGame();
  });

  restartBtn.addEventListener("click", () => {
    startGame();
  });
  document.addEventListener("keydown", (event) => {
    if (event.code === "KeyA" || event.code === "ArrowLeft") {
      newGameInstance.player.directionX = -1;
      newGameInstance.player.directionY = 0; // Ensure only horizontal movement
    }
    if (event.code === "KeyD" || event.code === "ArrowRight") {
      newGameInstance.player.directionX = 1;
      newGameInstance.player.directionY = 0; // Ensure only horizontal movement
    }
    if (event.code === "KeyW" || event.code === "ArrowUp") {
      newGameInstance.player.directionY = -1;
      newGameInstance.player.directionX = 0; // Ensure only vertical movement
    }
    if (event.code === "KeyS" || event.code === "ArrowDown") {
      newGameInstance.player.directionY = 1;
      newGameInstance.player.directionX = 0; // Ensure only vertical movement
    }
  });
});
