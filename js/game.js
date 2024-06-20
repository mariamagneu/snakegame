class Game {
  constructor(screens, gameArea) {
    this.startScreen = screens.start;
    this.gameScreen = screens.game;
    this.endScreen = screens.end;
    this.winScreen = screens.win;

    this.width = gameArea.width;
    this.height = gameArea.height;
    this.size = 20;

    this.playerLeft = Math.floor(0.5 * (this.width / this.size)) * this.size;
    this.playerTop = Math.floor(0.5 * (this.height / this.size)) * this.size;

    this.player = new Player(
      this.gameScreen,
      this.playerLeft,
      this.playerTop,
      this.size,
      this.size,
      "#89f336"
    );

    this.foods = [];

    this.currentFrame = 0;
    this.score = 0;
    this.gameOver = false;
    this.win = false;
  }

  addFood() {
    const left =
      Math.floor(Math.random() * (this.width / this.size)) * this.size;
    const top =
      Math.floor(Math.random() * (this.height / this.size)) * this.size;

    const foodItem = new Food(this.size, top, left);

    this.gameScreen.appendChild(foodItem.element);

    this.foods.push(foodItem);
  }

  winFunction() {
    console.log("you won!");
    this.win = true;
    this.startScreen.style.display = "none";
    this.winScreen.style.display = "flex";
    this.gameScreen.style.display = "none";
    this.endScreen.style.display = "none";
  }

  reset() {
    this.player.destroy();
    this.foods.forEach((currentFood, index) => {
      currentFood.destroy();
      this.foods.splice(index, 1);
      const score = document.querySelector("#score");
      score.innerHTML = `Your Score = 0`;
    });
  }
  gameOverFunction() {
    console.log("you lost!");

    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.height = `${this.height}px`;

    this.startScreen.style.display = "none";
    this.winScreen.style.display = "none";
    this.gameScreen.style.display = "none";
    this.endScreen.style.display = "flex";
  }
  start() {
    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.height = `${this.height}px`;

    this.startScreen.style.display = "none";
    this.winScreen.style.display = "none";
    this.gameScreen.style.display = "flex";
    this.endScreen.style.display = "none";

    this.addFood();

    const intervalId = setInterval(() => {
      this.currentFrame += 1;

      const previousHeadTop = this.player.top;
      const previousHeadLeft = this.player.left;

      this.player.move();
      if (this.player.didCollideWall(this.gameScreen)) {
        console.log("game-over");
        this.gameOver = true;
        clearInterval(intervalId);
      }
      this.foods.forEach((currentFood, index) => {
        if (this.player.didCollideFood(currentFood)) {
          //increase score

          const score = document.querySelector("#score");
          this.score = this.score + 20;
          score.innerHTML = `Your Score = ${this.score}`;

          //make food dissapear (remove from array & dom)
          currentFood.destroy();
          this.foods.splice(index, 1);

          // increase body length
          this.player.increaseBodyLength(previousHeadTop, previousHeadLeft);

          // add food again
          this.addFood();
        }
      });
      if (this.score >= 100) {
        this.winFunction();
        this.gameOver = false;
        this.reset();
      }
      if (this.gameOver) {
        this.gameOverFunction();
        this.reset();
      }
    }, 200);
  }
}
