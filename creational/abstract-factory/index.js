import { WinFactory } from "./factories/WinFactory.js";
import { MacFactory } from "./factories/MacFactory.js";

const application = (factory) => {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();

  console.log(button.paint());
  console.log(checkbox.paint());
};

application(new WinFactory());
application(new MacFactory());