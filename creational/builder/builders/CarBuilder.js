import { Builder } from "./Builder.js";
import { Car } from "../products/Car.js";

export class CarBuilder extends Builder {
  constructor() {
    super();
    this.reset();
  };

  reset() {
    this.car = new Car();
  };

  buildSeats() {
    this.car.seats = 5;
  };

  buildEngineType() {
    this.car.engineType = 'combustion';
  };

  buildGps() {
    this.car.hasGps = true;
  };

  buildTripComputer() {
    this.car.hasTripComputer = true;
  };

  getResult() {
    const result = this.car;
    this.reset();
    return result;
  };
};