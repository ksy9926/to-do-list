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
  __v: number;
  _id: string;
}

export type TodosType = TodoType[]

export interface TodosState {
  todos: {
    data: TodoType[],
    error: Error | null;
  }
}

export type TodosAction = ActionType<typeof actions>;