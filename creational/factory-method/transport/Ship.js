import { Transport } from "./Transport.js";

export class Ship extends Transport {
  deliver() {
    return "Delivering in a ship";
  };
};