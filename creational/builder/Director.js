export class Director {
  constructSimpleCar(builder) {
    builder.buildSeats();
    builder.buildEngineType();
  };

  constructLuxuryCar(builder) {
    builder.buildSeats();
    builder.buildEngineType();
    builder.buildGps();
    builder.buildTripComputer();
  };
};