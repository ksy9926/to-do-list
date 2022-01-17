import { getTodosAsync, GET_TODOS, postTodosAsync, POST_TODOS, putTodosAsync, PUT_TODOS, deleteTodosAsync, DELETE_TODOS } from "redux/actions/todosAction";
import { fetchTodosInfo, createTodosInfo, putTodosInfo, deleteTodosInfo } from "apis/api";
import { call, put, takeEvery } from 'redux-saga/effects'
import { TodosData, TodosType, TodoType } from "types/types";

function* getTodosSaga(action: ReturnType<typeof getTodosAsync.request>) {
  try {
    const data: TodosData = yield call(fetchTodosInfo);
    yield put(getTodosAsync.success(data.todos))
  // any 없애면 오류남. 나중에 알아볼 것.
  } catch(e: any) {
    yield put(getTodosAsync.failure(e));
  }
}

function* postTodosSaga(action: ReturnType<typeof postTodosAsync.request>) {
  try {
    const data: TodoType = yield call(createTodosInfo, action.payload);
    yield put(postTodosAsync.success(data))
  // any 없애면 오류남. 나중에 알아볼 것.
  } catch(e: any) {
    yield put(postTodosAsync.failure(e));
  }
}

function* putTodosSaga(action: ReturnType<typeof putTodosAsync.request>) {
  try {
    const data: TodoType = yield call(putTodosInfo, action.payload);
    console.log('put data: ', data)
    yield put(putTodosAsync.success(action.payload))
  // any 없애면 오류남. 나중에 알아볼 것.
  } catch(e: any) {
    yield put(putTodosAsync.failure(e));
  }
}

function* deleteTodosSaga(action: ReturnType<typeof deleteTodosAsync.request>) {
  try {
    yield call(deleteTodosInfo, action.payload);
    yield put(deleteTodosAsync.success(action.payload))
  // any 없애면 오류남. 나중에 알아볼 것.
  } catch(e: any) {
    yield put(deleteTodosAsync.failure(e));
  }
}

export function* todosSaga() {
  yield takeEvery(GET_TODOS, getTodosSaga)
  yield takeEvery(POST_TODOS, postTodosSaga)
  yield takeEvery(PUT_TODOS, putTodosSaga)
  yield takeEvery(DELETE_TODOS, deleteTodosSaga)
}