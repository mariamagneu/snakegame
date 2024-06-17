class Food {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.width = 20;
    this.height = 20;

    const gameScreenWidth = this.gameScreen.clientWidth;
    const gameScreenHeight = this.gameScreen.clientHeight;

    this.top = Math.random() * (gameScreenHeight - this.height);
    this.left = Math.random() * (gameScreenWidth - this.width);

    this.food = document.createElement("div");

    this.food.style.backgroundColor = "#FF0000";
    this.food.style.position = "absolute";
    this.food.style.width = `${this.width}px`;
    this.food.style.height = `${this.height}px`;
    this.food.style.top = `${this.top}px`;
    this.food.style.left = `${this.left}px`;

    this.gameScreen.appendChild(this.food);
  }
}
