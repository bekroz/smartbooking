import { DATE } from '../types';
import {
  today,
  currentMonth,
  monthRangeUntilToday,
  currentYear,
} from '../../helpers';

const initialState = {
  chosenDay: today,
  chosenMonth: currentMonth,
  chosenMonthRange: monthRangeUntilToday,
  chosenYear: currentYear,
};

const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATE.CHOSEN_DAY:
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
        chosenMonthRange: action.payload,
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
