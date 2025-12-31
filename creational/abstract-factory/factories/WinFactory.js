import { GUIFactory } from "./GUIFactory.js";
import { WinButton } from "../products/WinButton.js";
import { WinCheckbox } from "../products/WinCheckbox.js";

export class WinFactory extends GUIFactory {
  createButton() {
    return new WinButton();
  };

  createCheckbox() {
    return new WinCheckbox();
  };
};