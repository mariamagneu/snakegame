class Game {
  constructor(screens, gameArea) {
    this.startScreen = screens.start;
    this.gameScreen = screens.game;
    this.endScreen = screens.end;

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
    this.lives = 5;
    this.score = 0;
    this.gameOver = false;
  }

  addFood() {
    const left =
      Math.floor(Math.random() * (this.width / this.size)) * this.size;
    const top =
      Math.floor(Math.random() * (this.height / this.size)) * this.size;

    const foodItem = new Food(this.size, top, left);

    console.log(foodItem);

    this.gameScreen.appendChild(foodItem.element);

    this.foods.push(foodItem);
  }

  gameOver() {
    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.height = `${this.height}px`;

    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "none";
    this.endScreen.style.display = "block";

    clearInterval(intervalId);
  }
  start() {
    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.height = `${this.height}px`;

    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.endScreen.style.display = "none";

    this.addFood();

    const intervalId = setInterval(() => {
      this.currentFrame += 1;

      const previousHeadTop = this.player.top;
      const previousHeadLeft = this.player.left;

      this.player.move();

      this.foods.forEach((currentFood, index) => {
        if (this.player.didCollideWall(this.gameScreen)) {
          console.log("game-over");
          this.gameOver();
        }
        if (this.player.didCollideFood(currentFood)) {
          //increase score

          console.log(
            "prev head top " +
              previousHeadTop +
              ", " +
              "prev head left " +
              previousHeadLeft
          );

          this.score++;
          console.log(this.score);

          //make food dissapear (remove from array & dom)
          currentFood.destroy();
          this.foods.splice(index, 1);

          // increase body length
          this.player.increaseBodyLength(previousHeadTop, previousHeadLeft);

          // add food again
          this.addFood();
        }
      });
    }, 200);
  }
}
