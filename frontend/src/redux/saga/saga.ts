import { getTodosAsync, GET_TODOS } from "redux/actions/todosAction";
import { fetchTodosInfo } from "apis/api";
import { call, put, takeEvery } from 'redux-saga/effects'
import { TodosType } from "types/types";

interface TodosData {
  todos: TodosType
}

function* getTodosSaga(action: ReturnType<typeof getTodosAsync.request>) {
  try {
    const data: TodosData = yield call(fetchTodosInfo);
    yield put(getTodosAsync.success(data.todos))
  // any 없애면 오류남. 나중에 알아볼 것.
  } catch(e: any) {
    yield put(getTodosAsync.failure(e));
  }
}

export function* todosSaga() {
  yield takeEvery(GET_TODOS, getTodosSaga)
}