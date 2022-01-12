import axios from "axios";
import { TodosType } from "types/types";

// const api = process.env.REACT_APP_API_URL;
const api = 'http://localhost:8080';

// To do 조회 api
export const fetchTodosInfo = async () => {
  const res = await axios.get<TodosType>(api + '/todos');

  return res.data
};