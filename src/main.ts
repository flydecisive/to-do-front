import "./styles/style.scss";
import { addTodo, getTodos } from "./api";

export let tasks: any = [];
const tasksContainer = document.querySelector(".tasks__container");

const createTask = (title: string, id: number) => {
  return `
    <div class="task">
        <div class="checkbox">
            <input type="checkbox" value="None" id="${id}" />
            <label for="${id}"></label>
        </div>
        <p class="task__content">${title}</p>
    </div>
`;
};

const createMessage = (message: string) => {
  return `
        <p class="message-info">${message}</p>
    `;
};

tasks = await getTodos();

if (tasksContainer !== null) {
  tasksContainer.innerHTML = tasks
    .map((task: any) => {
      return createTask(task.title, task.id);
    })
    .join("");
}

// if (tasks.length === 0) {
// }
