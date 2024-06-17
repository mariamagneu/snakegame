class Player {
  constructor(gameScreen, left, top, width, height, image) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.speed = 3;

    this.element = document.createElement("img");
    this.element.src = image;

    this.element.style.position = "absolute";
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;

    this.gameScreen.appendChild(this.element);
  }

  move() {
    this.left += this.directionX * this.speed;
    this.top += this.directionY * this.speed;

    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
  }
}
