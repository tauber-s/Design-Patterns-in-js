import { RoadLogistics } from "./logistics/RoadLogistics.js";
import { SeaLogistics } from "./logistics/SeaLogistics.js";

function clientCode(logistics) {
  console.log(logistics.planDelivery());
}

clientCode(new RoadLogistics());
clientCode(new SeaLogistics());