import { createStore, applyMiddleware } from 'redux';
import rootReducers, { rootSaga } from 'redux/reducers';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga); // 루트 사가를 실행해줍니다. 꼭 스토어 생성 후에 실행 할 것!

export { store };
