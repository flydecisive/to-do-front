import "./logo.scss";

export class Logo {
  container;

  constructor(selector) {
    this.container = document.querySelector(selector);
  }

  createLogo() {
    this.container.innerHTML = `<p class='logo'>TODO LIST</p>`;
  }
}
