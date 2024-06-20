class Player {
  constructor(gameScreen, left, top, width, height, backgroundColor) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 1;
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
    // Update the position of each body part to follow the head
    for (let i = this.snakeBody.length - 1; i > 0; i--) {
      this.snakeBody[i].style.left = this.snakeBody[i - 1].style.left;
      this.snakeBody[i].style.top = this.snakeBody[i - 1].style.top;
    }
    if (this.snakeBody.length > 0) {
      this.snakeBody[0].style.left = this.snakeHead.style.left;
      this.snakeBody[0].style.top = this.snakeHead.style.top;
    }

    // Move the head
    this.left += this.width * this.directionX;
    this.top += this.directionY * this.height;

    this.snakeHead.style.top = `${this.top}px`;
    this.snakeHead.style.left = `${this.left}px`;
  }

  didCollideFood(food) {
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

  didCollideWall(gameScreen) {
    if (this.snakeHead.offsetLeft < 0) {
      console.log("touchedWall left side");
      return true;
    } else if (this.snakeHead.offsetTop < 0) {
      console.log("touched TOP side wall");
      return true;
    } else if (
      this.snakeHead.offsetTop >
      gameScreen.clientHeight - this.height
    ) {
      console.log("touched bottom side wall");
      return true;
    } else if (
      this.snakeHead.offsetLeft >
      gameScreen.clientWidth - this.width
    ) {
      console.log("touched RIGHT wall ok");
      return true;
    }
    return false;
  }

  increaseBodyLength(top, left) {
    const newBodyPart = document.createElement("div");
    this.snakeBody.unshift(newBodyPart);

    newBodyPart.style.position = "absolute";
    newBodyPart.style.backgroundColor = this.snakeHead.style.backgroundColor;
    newBodyPart.style.borderRadius = "5px";

    newBodyPart.style.left = `${left}px`;
    newBodyPart.style.top = `${top}px`;

    newBodyPart.style.width = `${this.width}px`;
    newBodyPart.style.height = `${this.height}px`;

    this.gameScreen.appendChild(newBodyPart);

    console.log(`the snakes bodypart count is at ${this.snakeBody.length}`);
  }

  destroy() {
    this.snakeHead.remove();
    this.snakeBody.forEach((currentBodyElement) => currentBodyElement.remove());
  }
}
