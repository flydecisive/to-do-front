import "../styles/style.scss";
import { Header } from "./components/header/header";
import { SearchSection } from "./components/search_section/search_section";
import { Todos } from "./components/todos/todos";
import { AddButton } from "./components/add_button/add_button";
import { getTodos, addTodo } from "./api/api";
import { AddTodoModal } from "./components/add_todo_modal/add_todo_modal";

const header = new Header("#app");
const searchSection = new SearchSection("#app");
const todos = new Todos("#app");
const addTodoModal = new AddTodoModal("#app");

header.addHeader();
searchSection.addSearchSection();
todos.createToDoContainer();
addTodoModal.createAddTodoModal();
const addButton = new AddButton(".todos__container");
addButton.addButton();
addButton.handleClick(document.querySelector(".add-todo-modal"));
addTodoModal.handleCancelButton(
  document.querySelector(".add-todo-modal__button-cancel")
);

document.addEventListener("DOMContentLoaded", () => {
  getTodos().then((responseData) => {
    todos.addTodos(responseData);
  });
});
