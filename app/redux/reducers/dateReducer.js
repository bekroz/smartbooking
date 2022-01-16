import { DATE } from '../types';
import {
  today,
  currentMonth,
  currentYear,
  firstDayOfMonth,
} from '../../helpers';

const initialState = {
  chosenDate: today,
  chosenMonth: currentMonth,
  chosenStartDate: firstDayOfMonth,
  chosenEndDate: today,
  chosenYear: currentYear,
};

const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATE.CHOSEN_DATE:
      return {
        ...state,
        chosenDay: action.payload,
      };
    case DATE.CHOSEN_MONTH:
      return {
        ...state,
        chosenMonth: action.payload,
      };
    case DATE.CHOSEN_MONTH_RANGE:
      return {
        ...state,
        chosenStartDate: action.payload.chosenStartDate,
        chosenEndDate: action.payload.chosenEndDate,
      };
    case DATE.CHOSEN_YEAR:
      return {
        ...state,
        chosenYear: action.payload,
      };
    default:
      return state;
  }
};
export default dateReducer;
