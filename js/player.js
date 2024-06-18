class Player {
  constructor(gameScreen, left, top, width, height, backgroundColor) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.speed = 1;
    this.snakeHead = document.createElement("div");
    this.snakeBody = [];

    this.snakeHead.style.position = "relative";
    this.snakeHead.style.backgroundColor = backgroundColor;
    this.snakeHead.style.borderRadius = "5px";
    this.snakeHead.style.left = `${left}px`;
    this.snakeHead.style.top = `${top}px`;
    this.snakeHead.style.width = `${width}px`;
    this.snakeHead.style.height = `${height}px`;

    this.gameScreen.appendChild(this.snakeHead);
  }

  move() {
    this.left += this.width * this.directionX;
    this.top += this.directionY * this.height;

    this.snakeHead.style.top = `${this.top}px`;
    this.snakeHead.style.left = `${this.left}px`;
  }

  didCollide(food) {
    const playerRect = this.snakeHead.getBoundingClientRect();
    const foodRect = food.element.getBoundingClientRect();

    if (
      playerRect.left < foodRect.right &&
      playerRect.right > foodRect.left &&
      playerRect.top < foodRect.bottom &&
      playerRect.bottom > foodRect.top
    ) {
      console.log("yummy");

      return true;
    } else {
      return false;
    }
  }
  increaseBodyLength(top, left) {
    const newBodyPart = document.createElement("div");
    this.snakeBody.unshift(newBodyPart);

    newBodyPart.style.position = "relative";
    newBodyPart.style.backgroundColor = this.snakeHead.style.backgroundColor;
    newBodyPart.style.borderRadius = "5px";

    newBodyPart.style.left = `${left}px`;
    newBodyPart.style.top = `${top}px`;

    newBodyPart.style.width = `${this.width}px`;
    newBodyPart.style.height = `${this.height}px`;

    this.gameScreen.appendChild(newBodyPart);

    console.log(`the snakes bodypart count is at ${this.snakeBody.length}`);
  }
}
