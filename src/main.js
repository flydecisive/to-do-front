import "../styles/style.scss";
import { Header } from "./components/header/header";
import { SearchSection } from "./components/search_section/search_section";
import { getTodos, addTodo } from "./api/api";

const header = new Header("#app");
const searchSection = new SearchSection("#app");

header.addHeader();
searchSection.addSearchSection();

document.addEventListener("DOMContentLoaded", () => {
  getTodos().then((responseData) => {
    console.log(responseData);
  });
});
