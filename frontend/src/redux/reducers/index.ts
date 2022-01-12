import { combineReducers } from 'redux';
import todo from 'redux/reducers/todosReducer';
import { all } from 'redux-saga/effects'
import { todosSaga } from 'redux/saga/saga';

const rootReducer = combineReducers({
  todo
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
  yield all([todosSaga()])
}