import { combineReducers } from 'redux';
import { authDataReducer } from './authReducer/authDataReducer';

const rootReducer = combineReducers({
  authDataReducer: authDataReducer,
});

export default rootReducer;
