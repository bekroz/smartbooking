import { DATE } from '../types';

const setChosenDay = chosenDay => {
  return {
    type: DATE.CHOSEN_DAY,
    payload: chosenDay,
  };
};

const setChosenMonth = chosenMonth => {
  return {
    type: DATE.CHOSEN_MONTH_RANGE,
    payload: chosenMonth,
  };
};

const setChosenMonthRange = chosenMonthRange => {
  return {
    type: DATE.CHOSEN_MONTH_RANGE,
    payload: chosenMonthRange,
  };
};

const setChosenYear = chosenYear => {
  return {
    type: DATE.CHOSEN_YEAR,
    payload: chosenYear,
  };
};

export { setChosenDay, setChosenMonth, setChosenMonthRange, setChosenYear };
