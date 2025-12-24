import { Logistics } from "./Logistics.js";
import { Ship } from "../transport/Ship.js";

export class SeaLogistics extends Logistics {
  createTransport() {
    return new Ship();
  };
};