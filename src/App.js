import React from 'react';
import { Provider } from 'react-redux';
import Layout from 'components/layout';

import createHistory from 'history/createBrowserHistory';

import configureStore from './resources/store';

const initialState = {};

const history = createHistory();
const store = configureStore(initialState, history);

const App = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
