export class AddTodoModal {
  constructor(selector) {
    this.parent = document.querySelector(selector);
  }

  _createAddTodoModalTemplate() {
    return `
        <h2 class="add-todo-modal__header">новая задача</h2>
        <input
        type="text"
        class="add-todo-modal__input"
        placeholder="Напишите новую задачу..."
        />
        <div class="add-todo-modal__buttons">
        <button class="add-todo-modal__button add-todo-modal__button-cancel">
            отменить
        </button>
        <button class="add-todo-modal__button add-todo-modal__button-apply">
            добавить
        </button>
        </div>
    `;
  }

  createAddTodoModal() {
    this.addTodoModal = document.createElement("dialog");
    this.addTodoModal.classList.add("add-todo-modal");
    this.addTodoModal.classList.add("hide");
    this.addTodoModal.innerHTML = this._createAddTodoModalTemplate();
    this.parent.appendChild(this.addTodoModal);
  }

  handleCancelButton(button) {
    button.addEventListener("click", () => {
      this.addTodoModal.close();
      this.addTodoModal.classList.add("hide");
    });
  }
}