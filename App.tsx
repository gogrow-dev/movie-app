import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'store/index';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
    </Provider>
  );
};

export default App;
