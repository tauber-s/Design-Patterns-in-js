import { Director } from "./Director.js";
import { CarBuilder } from "./builders/CarBuilder.js";
import { CarManualBuilder } from "./builders/CarManualBuilder.js";

const director = new Director();

const carBuilder = new CarBuilder();
director.constructSimpleCar(carBuilder);
const simpleCar = carBuilder.getResult();
console.log('simple car:', simpleCar);

const manualBuilder = new CarManualBuilder();
director.constructLuxuryCar(manualBuilder);
const luxuryCarManual = manualBuilder.getResult()
console.log('\nluxury car manual:');
console.log(luxuryCarManual.print());