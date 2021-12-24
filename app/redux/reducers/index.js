import { combineReducers } from 'redux';

// All imported reducers
import authReducer from './authReducer';
import hotelReducer from './hotelReducer';
import dashboardReducer from './dashboardReducer';
import reservationReducer from './reservationReducer';
import comparisonReducer from './comparisonReducer';
import annualReducer from './annualReducer';
import channelsReducer from './channelsReducer';
import dateReducer from './dateReducer';

const rootReducer = combineReducers({
  authReducer,
  hotelReducer,
  dashboardReducer,
  reservationReducer,
  comparisonReducer,
  annualReducer,
  channelsReducer,
  dateReducer,
});

export default rootReducer;
