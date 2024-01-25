export class MainContainer {
  constructor(selector) {
    this.parent = document.querySelector(selector);
  }

  createMainContainer() {
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("main__container");
    this.parent.appendChild(mainContainer);
  }
}
