import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';

import rootReducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: __DEV__,
});
const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export { store, persistor };
