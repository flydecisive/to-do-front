import { addTodo } from "./api";
import { App } from "./main";

export default class addTodoModal {
  textFieldsRegex = /^[A-Za-z0-9А-Яа-я '".,!?-]$/;
  _title = "";
  _description = "";
  modal: HTMLDivElement | null;
  overlay: HTMLDivElement | null;
  addButton: HTMLButtonElement | null;
  submitButton: HTMLButtonElement | null;
  titleElem: HTMLInputElement | null;
  descriptionElem: HTMLTextAreaElement | null;
  app: any;

  constructor() {
    this.modal = document.querySelector(".modal");
    this.overlay = document.querySelector(".overlay");
    this.addButton = document.querySelector(".button-add");
    this.submitButton = document.querySelector(".button__modal-save");
    this.titleElem = document.querySelector(".modal__textfield-title");
    this.descriptionElem = document.querySelector(
      ".modal__textfield-description"
    );

    this.app = new App();
  }

  _handleAddButton() {
    this.modal?.classList.remove("hidden");
    this.overlay?.classList.remove("hidden");
  }

  initAddButtonListener() {
    this.addButton?.addEventListener("click", () => {
      this._handleAddButton();
    });
  }

  set setTitle(value: string) {
    this._title = value;
  }

  set setDescription(value: string) {
    this._description = value;
  }

  _handleTitle(e: any) {
    // Добавить сюда валидацию
    this.setTitle = e.target.value;
  }

  initTitleElemListener() {
    this.titleElem?.addEventListener("input", (e: any) => {
      this._handleTitle(e);
    });
  }

  _handleDescription(e: any) {
    // Добавить сюда валидацию
    this.setDescription = e.target.value;
  }

  initDescriptionELemListener() {
    this.descriptionElem?.addEventListener("input", (e: any) => {
      this._handleDescription(e);
    });
  }

  _clearInputs() {
    this._title = "";
    this._description = "";
    if (this.titleElem !== null && this.descriptionElem !== null) {
      this.titleElem.value = "";
      this.descriptionElem.value = "";
    }
  }

  _handleSubmitButton() {
    this.modal?.classList.add("hidden");
    this.overlay?.classList.add("hidden");

    addTodo(this._title, this._description).then((data) => {
      this.app.setTodos = data;
      this.app.render();
      this._clearInputs();
    });
  }

  initSubmitButtonListener() {
    this.submitButton?.addEventListener("click", () => {
      this._handleSubmitButton();
    });
  }
}
