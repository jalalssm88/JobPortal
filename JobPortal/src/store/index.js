import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/index';
import { rootSaga } from './sagas/';

const sagaMiddleware = createSagaMiddleware();

// Redux: Store
const store = createStore(
    rootReducer,
    applyMiddleware(
        sagaMiddleware,
    ),
);

sagaMiddleware.run(rootSaga);

// Exports
export {
    store,
}