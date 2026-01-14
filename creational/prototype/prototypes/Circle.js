import { Shape } from "./Shape.js";

export class Circle extends Shape {
  constructor() {
    super();
    this.radius = 0;
  };

  clone() {
    const clone = new Circle();
    clone.x = this.x;
    clone.y = this.y;
    clone.color = this.color;
    clone.radius = this.radius;
    return clone;
  };
};
