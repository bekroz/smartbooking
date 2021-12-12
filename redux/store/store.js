import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { PERSIST, persistStore, persistReducer } from 'redux-persist';

import rootReducer from '../reducers/index';

const persistConfig = {
  key: 'persistedReducer',
  storage: AsyncStorage,
  whiteList: ['authReducer'],
  blackList: null,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

let persistedStore = persistStore(store);

export { store, persistedStore };
