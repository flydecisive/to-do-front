import "../styles/style.scss";
import { Header } from "./components/header/header";
import { SearchSection } from "./components/search_section/search_section";
import { Todos } from "./components/todos/todos";
import { getTodos, addTodo } from "./api/api";

const header = new Header("#app");
const searchSection = new SearchSection("#app");
const todos = new Todos("#app", ["Тест", "Тест 2"]);

header.addHeader();
searchSection.addSearchSection();
todos.addTodos();

document.addEventListener("DOMContentLoaded", () => {
  getTodos().then((responseData) => {
    console.log(responseData);
  });
});
