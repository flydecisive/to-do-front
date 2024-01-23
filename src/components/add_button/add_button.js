export class AddButton {
  constructor(selector) {
    this.parent = document.querySelector(selector);
  }

  _createAddButtonTemplate() {
    return `
        <svg
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="add-button__icon"
        >
            <path
            d="M4 12H20M12 4V20"
            stroke="current"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            />
        </svg>
    `;
  }

  _createAddButton() {
    const addButton = document.createElement("div");
    addButton.classList.add("add-button");
    addButton.innerHTML = this._createAddButtonTemplate();

    return addButton;
  }

  addButton() {
    this.parent.appendChild(this._createAddButton());
  }
}
