import { combineReducers } from 'redux';
import todo from 'redux/reducers/todosReducer';
import menu from 'redux/reducers/menuReducer';
import search from 'redux/reducers/searchReducer';
import selected from 'redux/reducers/selectedReducer';
import { all } from 'redux-saga/effects'
import { todosSaga } from 'redux/saga/saga';

const rootReducer = combineReducers({
  todo,
  menu,
  search,
  selected
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
  yield all([todosSaga()])
}