import { combineReducers } from 'redux';

// All imported reducers
import authReducer from './authReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  authReducer: authReducer,
});

export default rootReducer;
