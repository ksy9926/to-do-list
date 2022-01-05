import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers, { rootSaga } from 'redux/reducers';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initStates) =>
  createStore(
    combineReducers(rootReducers),
    initStates,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

const store = configureStore({});

sagaMiddleware.run(rootSaga); // 루트 사가를 실행해줍니다. 꼭 스토어 생성 후에 실행 할 것!

export { store };
