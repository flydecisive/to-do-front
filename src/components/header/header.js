export class Header {
  constructor(selector) {
    this.parent = document.querySelector(selector);
  }

  createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
    header.textContent = "Test header";

    return header;
  }

  addHeader() {
    const header = this.createHeader();
    this.parent.appendChild(header);
  }
}
