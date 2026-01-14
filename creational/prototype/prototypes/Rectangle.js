import { Shape } from "./Shape.js";

export class Rectangle extends Shape {
  constructor() {
    super();
    this.width = 0;
    this.height = 0;
  };

  clone() {
    const clone = new Rectangle();
    clone.x = this.x;
    clone.y = this.y;
    clone.color = this.color;
    clone.width = this.width;
    clone.height = this.height;
    return clone;
  };
};
