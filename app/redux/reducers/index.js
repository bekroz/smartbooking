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
import arrivalsReducer from './arrivalsReducer';

const rootReducer = combineReducers({
  authReducer,
  hotelReducer,
  dashboardReducer,
  reservationReducer,
  comparisonReducer,
  annualReducer,
  channelsReducer,
  dateReducer,
  arrivalsReducer,
});

export default rootReducer;
