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
          this.score++;
          console.log(this.score);
          //increase score
          //increae body length

          const newBodyPart = document.createElement("div");
          newBodyPart.style.position = "relative";
          newBodyPart.style.backgroundColor = backgroundColor;
          newBodyPart.style.borderRadius = "5px";
          newBodyPart.style.left = `${left}px`;
          newBodyPart.style.top = `${top}px`;
          newBodyPart.style.width = `${width}px`;
          newBodyPart.style.height = `${height}px`;
          this.player.snakeBody.push(newBodyPart);

          //make food dissapear (removed from array & dom)
          currentFood.element.remove();
          const newBodyElement = this.player.snakeBody.push(newBodyElement);
        }
      });
    }, 1000 / 60);
  }
}
