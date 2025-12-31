import { Builder } from "./Builder.js";
import { CarManual } from "../products/CarManual.js";

export class CarManualBuilder extends Builder {
  constructor() {
    super();
    this.reset();
  };

  reset() {
    this.manual = new CarManual();
  };

  buildSeats() {
    this.manual.addSection("This car has 5 seats.");
  };

  buildEngineType() {
    this.manual.addSection("The car runs on combustion.");
  };

  buildGps() {
    this.manual.addSection("This car has GPS.");
  };

  buildTripComputer() {
    this.manual.addSection("This car has Trip Computer.");
  };

  getResult() {
    const result = this.manual;
    this.reset();
    return result;
  };
};