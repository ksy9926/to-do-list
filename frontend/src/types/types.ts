import * as actions from 'redux/actions/todosAction'
import { ActionType } from "typesafe-actions";

export interface DayType {
  [key: number]: string,
}

export interface TodoType {
  completed: boolean;
  content: string;
  createdAt: string;
  todoid: number;
  updatedAt: string;
  completedAt: string;
  description: string;
  __v: number;
  _id: string;
}

export type TodosType = TodoType[]

export interface ResTodosType {
  todos: TodosType
}

export interface TodosState {
  todos: {
    data: TodosType,
    error: Error | null;
  }
}

export type TodosAction = ActionType<typeof actions>;

export interface TodosData {
  todos: TodosType
}

export interface PutTodoType {
  todoid: number,
  todo: TodoType,
  index: number
}