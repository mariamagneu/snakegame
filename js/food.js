class Food {
  constructor(size, top, left) {
    this.width = size;
    this.height = size;

    this.top = top;
    this.left = left;

    this.element = document.createElement("div");

    this.element.style.backgroundColor = "#FF0000";
    this.element.style.borderRadius = "50%";
    this.element.style.boxShadow = "0px 0px 20px 0px rgba(255, 0, 0, 0.75)";
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
  }
}
