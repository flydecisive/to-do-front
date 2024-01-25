export class Loader {
  constructor(selector) {
    this.parent = document.querySelector(selector);
  }

  createLoader() {
    const loader = document.createElement("div");
    loader.classList.add("spinner");
    loader.classList.add("hide");
    this.loader = loader;
    this.parent.appendChild(loader);
  }

  showLoader() {
    this.loader.classList.remove("hide");
  }

  hideLoader() {
    this.loader.classList.add("hide");
  }
}
