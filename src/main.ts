import "./styles/style.scss";
import { addTodo, getTodos } from "./api";
import addTodoModal from "./addTodoModal";

export class App {
  _todos: {}[];
  observers: any;
  tasksContainer: HTMLDivElement | null;

  constructor() {
    this._todos = [];
    this.observers = [];
    this.tasksContainer = document.querySelector(".tasks__container");
  }

  createTask(title: string, id: number) {
    return `
        <div class="task">
            <div class="checkbox">
                <input type="checkbox" value="None" id="${id}" />
                <label for="${id}"></label>
            </div>
            <p class="task__content">${title}</p>
        </div>
    `;
  }

  set setTodos(value: any) {
    this._todos = value;
  }

  async getAllTodos() {
    this._todos = await getTodos();
  }

  render() {
    if (this.tasksContainer !== null) {
      this.tasksContainer.innerHTML = this._todos
        .map((task: any) => {
          return this.createTask(task.title, task.id);
        })
        .join("");
    }
  }
}

const app = new App();
const addModal = new addTodoModal();

app.getAllTodos().then(() => {
  app.render();
});

addModal.initAddButtonListener();
addModal.initTitleElemListener();
addModal.initDescriptionELemListener();
addModal.initSubmitButtonListener();

// const createMessage = (message: string) => {
//   return `
//         <p class="message-info">${message}</p>
//     `;
// };
