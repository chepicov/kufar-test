import React from 'react';
import { Provider } from 'react-redux';
import Layout from 'components/layout';

import configureStore from './resources/store';

const initialState = {};
const store = configureStore(initialState);

const App = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
