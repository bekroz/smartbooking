import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, combineReducers, createStore } from 'redux';

import loggerMiddleware from 'redux-logger';

// Reducers
import reducers from '../Redux/Reducer';
// Types
import AUTH from '../authentication/types/authTypes';

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

const middleware = applyMiddleware(loggerMiddleware);
const allConfiguredStores = createStore(
  persistedReducer,
  initialState,
  middleware,
);
export const store = allConfiguredStores;
export const persistor = persistStore(store);
