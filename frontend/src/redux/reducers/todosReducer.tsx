import { action, createReducer } from 'typesafe-actions';
import { TodosState, TodosAction } from 'types/types';
import { GET_TODOS, GET_TODOS_SUCCESS, GET_TODOS_ERROR } from 'redux/actions/todosAction';

const initialState: TodosState = {
  todos: {
    data: [],
    error: null,
  },
};

const todosReducer = createReducer<TodosState, TodosAction>(initialState, {
  [GET_TODOS]: (state) => ({
    ...state,
    todos: {
      data: [],
      error: null,
    },
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
});

export default todosReducer;
