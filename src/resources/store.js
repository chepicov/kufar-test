import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'

import sagas from './sagas';
import reducer from './reducer';

const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(
        sagaMiddleware,
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  );

  sagaMiddleware.run(sagas);

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer').default; // eslint-disable-line
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
