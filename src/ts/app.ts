import { ComponentSettings } from "./types";

class App {
  root: HTMLElement;
  settings: ComponentSettings;
  constructor(root: HTMLElement, settings: ComponentSettings) {
    this.root = root;
    this.settings = settings;
  }
  _getComponents() {
    this.settings.forEach((item) => {
      const tag = item.tag;
      const element = document.createElement(tag);
      if (item.classes) {
        item.classes.forEach((className) => {
          element.classList.add(className);
        });
      }
      this.root.append(element);
      const newComponent = item.component;
      newComponent.hook = element;

      newComponent.displayComponent(element);
    });
  }
  run() {
    this._getComponents();
  }
}

export default App;
