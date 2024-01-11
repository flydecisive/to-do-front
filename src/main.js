import "../styles/style.scss";
// import javascriptLogo from './javascript.svg'
import { Header } from "./components/header/header";
import { getTodos, addTodo } from "./api/api";

const header = new Header("#app");
header.addHeader();

getTodos();
addTodo("задача 1", "описание");
// getTodos();
