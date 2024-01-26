export class AddTodoModal {
  data = {
    tags: [],
    task: "",
  };

  constructor(selector) {
    this.parent = document.querySelector(selector);
  }

  _createAddTodoModalTemplate() {
    return `
        <h2 class="add-todo-modal__header">новая задача</h2>
        <div class="add-todo-modal__inputs">
          <input
            type="text"
            class="add-todo-modal__input add-todo-modal__input-task"
            placeholder="Введите новую задачу..."
          />
          <input
            type="text"
            class="add-todo-modal__input add-todo-modal__input-tags"
            placeholder="Введите теги через пробел..."
          />
        </div>
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

  handleModalClick() {
    this.addTodoModal.addEventListener("click", (event) => {
      const modalRect = this.addTodoModal.getBoundingClientRect();
      if (
        event.clientX < modalRect.left ||
        event.clientX > modalRect.right ||
        event.clientY < modalRect.top ||
        event.clientY > modalRect.bottom
      ) {
        this.addTodoModal.close();
        this.addTodoModal.classList.add("hide");
      }
    });
  }

  handleModalInputTask() {
    const input = this.addTodoModal.querySelector(
      ".add-todo-modal__input-task"
    );
    this.taskInput = input;

    input.addEventListener("input", (e) => {
      this.data = { ...this.data, task: e.target.value };
    });
  }

  _handleModalInputTags() {
    const input = this.addTodoModal.querySelector(
      ".add-todo-modal__input-tags"
    );
    this.tagsInput = input;

    const tags = input.value.split(" ");
    const newTags = tags.map((tag) => {
      if (!tag.startsWith("#")) return "#" + tag;

      return tag;
    });

    this.data = { ...this.data, tags: newTags };
  }

  handleApplyButton(button, callback) {
    button.addEventListener("click", () => {
      this._handleModalInputTags();
      callback(this.data);
      this._clearInputsAndData();
      this.tagsInput = this.addTodoModal.close();
      this.addTodoModal.classList.add("hide");
    });
  }

  handleCancelButton(button) {
    button.addEventListener("click", () => {
      this._clearInputsAndData();
      this.addTodoModal.close();
      this.addTodoModal.classList.add("hide");
    });
  }

  _clearInputsAndData() {
    this.data = {
      tags: [],
      task: "",
    };
    this.taskInput.value = "";
    this.tagsInput.value = "";
  }
}
