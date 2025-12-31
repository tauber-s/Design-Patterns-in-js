export class CarManual {
  constructor() {
    this.content = [];
  };

  addSection(text) {
    this.content.push(text);
  };

  print() {
    return this.content.join("\n");
  };
};
