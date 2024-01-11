import axios from "axios";

const API_PATH = "https://to-do-back-rust.vercel.app/todos";

export const getTodos = async () => {
  return await axios.get(API_PATH).then((response) => {
    console.log(response);
  });
};

export const addTodo = async (title, task) => {
  return await axios.post(API_PATH, { title, task });
};