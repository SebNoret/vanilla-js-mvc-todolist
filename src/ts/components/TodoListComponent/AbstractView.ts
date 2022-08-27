class AbstractView {
  constructor() {}
  createElement(tag, classes) {
    const element = document.createElement(tag);
    if (classes) {
      classes.forEach((className) => {
        element.classList.add(className);
      });
    }
    return element;
  }
}

export default AbstractView;
