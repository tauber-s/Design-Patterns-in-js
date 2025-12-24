import { Logistics } from "./Logistics.js";
import { Truck } from "../transport/Truck.js";

export class RoadLogistics extends Logistics {
  createTransport() {
    return new Truck();
  };
};