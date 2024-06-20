document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.querySelector("#start");
  const winRestartBtn = document.querySelector("#Win-Restart-Button");
  const gameOverRestartBtn = document.querySelector(
    "#Game-Over-Restart-button"
  );

  let newGameInstance;
  function startGame() {
    console.log("game has officially started");

    const screens = {
      start: document.querySelector("#start-screen"),
      game: document.querySelector("#game-screen"),
      end: document.querySelector("#game-end"),
      win: document.querySelector("#game-win"),
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

  winRestartBtn.addEventListener("click", () => {
    startGame();
  });

  gameOverRestartBtn.addEventListener("click", () => {
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

  document.querySelectorAll(".coming-soon").forEach(function (element) {
    let originalText = element.textContent;

    element.addEventListener("mouseenter", function () {
      element.textContent = "coming soon";
    });

    element.addEventListener("mouseleave", function () {
      element.textContent = originalText;
    });
  });
});
