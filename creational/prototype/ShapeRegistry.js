export class ShapeRegistry {
  constructor() {
    this.items = {};
  };

  add(key, shape) {
    this.items[key] = shape;
  };

  get(key) {
    const shape = this.items[key];
    return shape ? shape.clone() : null;
  };
}
