import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from '../reducers/index';

// Dev tools
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authReducer', 'hotelReducer'],
  blacklist: ['reservationReducer', 'statsReducer', 'comparisonReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// applyMiddleware(logger, thunk)
const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };
