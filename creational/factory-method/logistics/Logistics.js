export class Logistics {
  createTransport() {
    throw new Error("Method not implemented");
  };

  planDelivery() {
    const transport = this.createTransport();
    return transport.deliver();
  };
};