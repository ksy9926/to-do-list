import axios from "axios";
import { TodoType, ResTodosType, PutTodoType } from "types/types";

const api = process.env.REACT_APP_API_URL;

// To do 조회 api
export const fetchTodosInfo = async () => {
  // 받아오는 res.data의 type이 axios.get<> 안에 들어감.
  const res = await axios.get<ResTodosType>(api + '/todos');

  return res.data
};

// To do 생성 api
export const createTodosInfo = async (todoValue: string) => {
  const res = await axios.post<TodoType>(api + '/todos', {
    content: todoValue
  });

  return res.data
};

// To do 수정 api
export const putTodosInfo = async (payload: PutTodoType) => {
  const todoid = payload.todoid
  const todo = payload.todo
  
  const res = await axios.put<TodoType>(api + `/todos/${todoid}`, todo);
  return res.data
};

// To do 삭제 api
export const deleteTodosInfo = async (todoid: number) => {
  const res = await axios.delete<string>(api + `/todos/${todoid}`);

  return res.data
};