import "../styles/style.scss";
// import javascriptLogo from './javascript.svg'
import { Header } from "./components/header/header";
import { getTodos, addTodo } from "./api/api";

const header = new Header("#app");
header.addHeader();

document.addEventListener("DOMContentLoaded", () => {
  getTodos().then((responseData) => {
    console.log(responseData);
  });
});
