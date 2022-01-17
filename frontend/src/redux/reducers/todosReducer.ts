import { createReducer } from 'typesafe-actions';
import { TodosState, TodosAction, TodoType } from 'types/types';
import {
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR,
  POST_TODOS,
  POST_TODOS_SUCCESS,
  POST_TODOS_ERROR,
  PUT_TODOS,
  PUT_TODOS_SUCCESS,
  PUT_TODOS_ERROR,
  DELETE_TODOS,
  DELETE_TODOS_SUCCESS,
  DELETE_TODOS_ERROR,
} from 'redux/actions/todosAction';

const initialState: TodosState = {
  todos: {
    data: [],
    error: null,
  },
};

const todosReducer = createReducer<TodosState, TodosAction>(initialState, {
  [GET_TODOS]: (state) => ({
    ...state,
  }),
  [GET_TODOS_SUCCESS]: (state, action) => ({
    ...state,
    todos: {
      data: action.payload,
      error: null,
    },
  }),
  [GET_TODOS_ERROR]: (state, action) => ({
    ...state,
    todos: {
      data: [],
      error: action.payload,
    },
  }),
  [POST_TODOS]: (state) => ({
    ...state,
  }),
  [POST_TODOS_SUCCESS]: (state, action) => {
    return {
      ...state,
      todos: {
        data: [...state.todos.data, action.payload],
        error: null,
      },
    };
  },
  [POST_TODOS_ERROR]: (state, action) => ({
    ...state,
    todos: {
      data: [],
      error: action.payload,
    },
  }),
  [PUT_TODOS]: (state) => ({
    ...state,
  }),
  [PUT_TODOS_SUCCESS]: (state, action) => {
    const newData = [...state.todos.data]
    const todoid = action.payload.todoid

    const index = newData.findIndex(item => item.todoid === todoid)

    if (action.payload.todo) newData[index] = action.payload.todo

    return {
      ...state,
      todos: {
        data: newData,
        error: null,
      },
    };
  },
  [PUT_TODOS_ERROR]: (state, action) => ({
    ...state,
    todos: {
      data: [],
      error: action.payload,
    },
  }),
  [DELETE_TODOS]: (state) => ({
    ...state,
  }),
  [DELETE_TODOS_SUCCESS]: (state, action) => {
    const todoid = action.payload;
    const newData = state.todos.data.filter(item => item.todoid !== todoid)

    return {
      ...state,
      todos: {
        data: newData,
        error: null,
      },
    };
  },
  [DELETE_TODOS_ERROR]: (state, action) => ({
    ...state,
    todos: {
      data: [],
      error: action.payload,
    },
  }),
});

export default todosReducer;
