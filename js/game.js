class Game {
  constructor() {
    this.startScreen = document.querySelector("#start-screen");
    this.gameScreen = document.querySelector("#game-screen");
    this.endScreen = document.querySelector("#game-end");
    this.width = 70;
    this.height = 60;

    this.player;
    this.obstacles = [];

    this.currentFrame = 0;
    this.lives = 5;
    this.gameOver = false;
  }

  start() {
    this.gameScreen.style.width = `${this.width}vw`;
    this.gameScreen.style.height = `${this.height}vh`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.endScreen.style.display = "none";
  }
}

console.log("hello from game js");
