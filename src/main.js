import "../styles/style.scss";
import { Header } from "./components/header/header";
import { SearchSection } from "./components/search_section/search_section";
import { Todos } from "./components/todos/todos";
import { AddButton } from "./components/add_button/add_button";
import { getTodos, addTodo } from "./api/api";

const header = new Header("#app");
const searchSection = new SearchSection("#app");
const todos = new Todos("#app");

header.addHeader();
searchSection.addSearchSection();
todos.createToDoContainer();
const addButton = new AddButton(".todos__container");
addButton.addButton();

document.addEventListener("DOMContentLoaded", () => {
  getTodos().then((responseData) => {
    todos.addTodos(responseData);
  });
});
