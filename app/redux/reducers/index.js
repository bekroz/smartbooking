import { combineReducers } from 'redux';

// All imported reducers
import authReducer from './authReducer';
import hotelReducer from './hotelReducer';
import dashboardReducer from './dashboardReducer';
import reservationReducer from './reservationReducer';
import statsReducer from './statsReducer';
import comparisonReducer from './comparisonReducer'

// Redux: Root Reducer
const rootReducer = combineReducers({
  authState: authReducer,
  hotelState: hotelReducer,
  dashboardState: dashboardReducer,
  reservationState: reservationReducer,  
  statsState: statsReducer,
  comparisonState: comparisonReducer
});

export default rootReducer;
