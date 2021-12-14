/* eslint-disable */
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducers from '../Redux/Reducer';
import AUTH from '../authentication/types/authTypes';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware];
const persistConfig = {
  key: 'root',
  keyPrefix: '',
  storage: AsyncStorage,
};

const rootReducer = (state, action) => {
  if (action.type === AUTH.LOGOUT_SUCCESS) {
    state = {};
  }
  return appReducer(state, action);
};

const appReducer = combineReducers({
  ...reducers,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const initialState = {};

const composedEnhancers = compose(applyMiddleware(...middleware));

const allConfiguredStores = createStore(
  persistedReducer,
  initialState,
  composedEnhancers,
);
export const store = allConfiguredStores;
export const persistor = persistStore(store);
