export class Header {
  constructor(selector) {
    this.parent = document.querySelector(selector);
  }

  _createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
    header.textContent = "Test header";

    return header;
  }

  addHeader() {
    const header = this._createHeader();
    this.parent.appendChild(header);
  }
}
