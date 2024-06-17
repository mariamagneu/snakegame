class Game {
  constructor() {
    this.startScreen = document.querySelector("#start-screen");
    this.gameScreen = document.querySelector("#game-screen");
    this.endScreen = document.querySelector("#game-end");
    this.width = 700;
    this.height = 600;

    this.player = new Player(this.gameScreen, 150, 150, 20, 20, "#89f336");
    this.foods = [];

    this.currentFrame = 0;
    this.lives = 5;
    this.gameOver = false;
  }

  addFood() {
    const foodItem = new Food(this.gameScreen);
    this.foods.push(foodItem);
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
      this.player.move();
      this.foods.forEach((currentFood) => {
        if (this.player.didCollide(currentFood)) {
          //increase score
          //increae body length
          //make food dissapear (removed from array & dom)
          currentFood.element.remove();
        }
      });
    }, 1000 / 60);
  }
}
