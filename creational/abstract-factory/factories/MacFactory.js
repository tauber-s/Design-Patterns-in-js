import { GUIFactory } from "./GUIFactory.js";
import { MacButton } from "../products/MacButton.js";
import { MacCheckbox } from "../products/MacCheckbox.js";

export class MacFactory extends GUIFactory {
  createButton() {
    return new MacButton();
  };

  createCheckbox() {
    return new MacCheckbox();
  };
};