import { createAsyncAction } from 'typesafe-actions';
import { TodoType, TodosType, PutTodoType } from 'types/types';
import { AxiosError } from 'axios';

export const GET_TODOS = 'todos/GET_TODOS' as const
export const GET_TODOS_SUCCESS = 'todos/GET_TODOS_SUCCESS' as const
export const GET_TODOS_ERROR = 'todos/GET_TODOS_ERROR' as const

export const POST_TODOS = 'todos/POST_TODOS' as const
export const POST_TODOS_SUCCESS = 'todos/POST_TODOS_SUCCESS' as const
export const POST_TODOS_ERROR = 'todos/POST_TODOS_ERROR' as const

export const PUT_TODOS = 'todos/PUT_TODOS' as const
export const PUT_TODOS_SUCCESS = 'todos/PUT_TODOS_SUCCESS' as const
export const PUT_TODOS_ERROR = 'todos/PUT_TODOS_ERROR' as const

export const DELETE_TODOS = 'todos/DELETE_TODOS' as const
export const DELETE_TODOS_SUCCESS = 'todos/DELETE_TODOS_SUCCESS' as const
export const DELETE_TODOS_ERROR = 'todos/DELETE_TODOS_ERROR' as const

export const getTodosAsync = createAsyncAction(
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR
  // 아래 줄은 각각의 매개 변수 타입
)<undefined, TodosType, AxiosError>();

export const postTodosAsync = createAsyncAction(
  POST_TODOS,
  POST_TODOS_SUCCESS,
  POST_TODOS_ERROR,
)<string, TodoType, AxiosError>();

export const putTodosAsync = createAsyncAction(
  PUT_TODOS,
  PUT_TODOS_SUCCESS,
  PUT_TODOS_ERROR,
)<PutTodoType, PutTodoType, AxiosError>();

export const deleteTodosAsync = createAsyncAction(
  DELETE_TODOS,
  DELETE_TODOS_SUCCESS,
  DELETE_TODOS_ERROR,
)<number, number, AxiosError>();

