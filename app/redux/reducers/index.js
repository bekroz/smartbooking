import { combineReducers } from 'redux';

// All imported reducers
import authReducer from './authReducer';
import reservationReducer from './reservationReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  authReducer: authReducer,
  reservationReducer: reservationReducer,
});

export default rootReducer;
