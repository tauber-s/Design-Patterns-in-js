import { Circle } from "./prototypes/Circle.js";
import { Rectangle } from "./prototypes/Rectangle.js";
import { ShapeRegistry } from "./ShapeRegistry.js";

const registry = new ShapeRegistry();

const circle = new Circle();
circle.x = 10;
circle.y = 20;
circle.color = "green";
circle.radius = 15;

const rectangle = new Rectangle();
rectangle.x = 5;
rectangle.y = 5;
rectangle.color = "blue";
rectangle.width = 20;
rectangle.height = 10;

registry.add("greenCircle", circle);
registry.add("blueRectangle", rectangle);

const clonedCircle = registry.get("greenCircle");
const clonedRectangle = registry.get("blueRectangle");

console.log("Cloned Circle:", clonedCircle);
console.log("Cloned Rectangle:", clonedRectangle);
