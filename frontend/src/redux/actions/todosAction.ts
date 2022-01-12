import { createAsyncAction } from 'typesafe-actions';
import { TodosType } from 'types/types';
import { AxiosError } from 'axios';

export const GET_TODOS = 'todos/GET_TODOS' as const
export const GET_TODOS_SUCCESS = 'todos/GET_TODOS_SUCCESS' as const
export const GET_TODOS_ERROR = 'todos/GET_TODOS_ERROR' as const

export const getTodosAsync = createAsyncAction(
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR
)<undefined, TodosType, AxiosError>();