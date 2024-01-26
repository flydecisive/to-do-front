import axios from "axios";

const API_PATH = "https://to-do-back-rust.vercel.app/todos";

export const getTodos = async () => {
  return await axios.get(API_PATH).then((response) => {
    return response.data;
  });
};

export const addTodo = async (data) => {
  const { task, tags } = data;
  return await axios.post(API_PATH, { task, tags }).then((response) => {
    return response.data;
  });
};
