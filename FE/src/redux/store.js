import createSagaMiddleware from 'redux-saga';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { CookieStorage } from 'redux-persist-cookie-storage';
import Cookies from 'cookies-js';

import postSlice from './Reducers/postSlice';
import commentSlice from './Reducers/commentSlice';
import authSlice from './Reducers/authSlice';
import { rootSaga } from './sagas/rootSaga';
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: new CookieStorage(Cookies),
  whitelist: ['authSlice'],
};

const rootReducer = combineReducers({
  postSlice,
  commentSlice,
  authSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
