class Game {
  constructor(screens, viewPort) {
    this.startScreen = screens.start;
    this.gameScreen = screens.game;
    this.endScreen = screens.end;

    this.width = viewPort.width;
    this.height = viewPort.height;

    this.player = new Player(this.gameScreen, 150, 150, 20, 20, "#89f336");
    this.foods = [];

    this.currentFrame = 0;
    this.lives = 5;
    this.score = 0;
    this.gameOver = false;
  }

  addFood() {
    const size = 20;
    const top = Math.random() * (this.gameScreen.clientHeight - size);
    const left = Math.random() * (this.gameScreen.clientWidth - size);
    const foodItem = new Food(size, top, left);

    this.gameScreen.appendChild(foodItem.element);

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
      this.foods.forEach((currentFood, index) => {
        if (this.player.didCollide(currentFood)) {
          //increase score

          this.score++;
          console.log(this.score);

          //make food dissapear (remove from array & dom)
          currentFood.destroy();
          this.foods.splice(index, 1);
          this.player.increaseBodyLength();

          this.addFood();
        }
      });
    }, 1000 / 60);
  }
}
