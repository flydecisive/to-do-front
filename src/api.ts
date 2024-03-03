// "https://to-do-back-rust.vercel.app"

import axios from "axios";

const API_URL = "http://127.0.0.1:3000";

// получение задач
export const getTodos = async () => {
  const data = await axios.get(API_URL + "/todos").then((response) => {
    return response.data;
  });

  return data;
};

// Добавление задачи
export const addTodo = async (title: string, description: string) => {
  const data = await axios
    .post(API_URL + "/todos", { title, description })
    .then((response) => {
      return response.data;
    });

  return data;
};
