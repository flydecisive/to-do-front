import "../styles/style.scss";
import { Header } from "./components/header/header";
import { SearchSection } from "./components/search_section/search_section";
import { Todos } from "./components/todos/todos";
import { AddButton } from "./components/add_button/add_button";
import { getTodos, addTodo } from "./api/api";
import { AddTodoModal } from "./components/add_todo_modal/add_todo_modal";
import { Loader } from "./components/loader/loader";
import { MainContainer } from "./components/main_container/main_container";

const header = new Header("#app");
const searchSection = new SearchSection("#app");
const addTodoModal = new AddTodoModal("#app");
const mainContainer = new MainContainer("#app");
const loader = new Loader();
const todos = new Todos();
const addButton = new AddButton();

header.addHeader();
searchSection.addSearchSection();
mainContainer.createMainContainer();
todos.createToDoContainer(".main__container");
addTodoModal.createAddTodoModal();
addButton.addButton(".main__container");
loader.createLoader(".todos__container");
addButton.handleClick(document.querySelector(".add-todo-modal"));
addTodoModal.handleCancelButton(
  document.querySelector(".add-todo-modal__button-cancel")
);
addTodoModal.handleModalClick();
addTodoModal.handleModalInputTask();
// addTodoModal.handleModalInputTags();
addTodoModal.handleApplyButton(
  document.querySelector(".add-todo-modal__button-apply"),
  addNewTodo
);

document.addEventListener("DOMContentLoaded", () => {
  requestTodos();
});

function requestTodos() {
  loader.showLoader();
  getTodos().then((responseData) => {
    console.log(responseData);
    todos.addTodos(responseData);
  });
}

function addNewTodo(title, task) {
  loader.showLoader();
  addTodo(title, task).then((responseData) => {
    console.log(responseData);
    todos.addTodos(responseData);
  });
}
