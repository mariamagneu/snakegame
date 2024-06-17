class Game {
  constructor() {
    this.startScreen = document.querySelector("#start-screen");
    this.gameScreen = document.querySelector("#game-screen");
    this.endScreen = document.querySelector("#game-end");
    this.width = 700;
    this.height = 600;

    this.player = new Player(
      this.gameScreen,
      150,
      150,
      10,
      10,
      "images/player.png"
    );
    this.food = [];

    this.currentFrame = 0;
    this.lives = 5;
    this.gameOver = false;
  }

  start() {
    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.height = `${this.height}px`;

    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.endScreen.style.display = "none";

    const intervalId = setInterval(() => {
      this.currentFrame += 1;

      this.player.move();
    }, 1000 / 60);
  }
}

console.log("hello from game js");
