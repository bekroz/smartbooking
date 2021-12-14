import { createStore, combineReducers } from 'redux';
import { compose, applyMiddleware, createStore } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';

import authReducer from '../authentication/reducer/authReducer';

const rootReducer = combineReducers({ authReducer: authReducer });

const store = () => createStore(rootReducer);

export default store;
