import { DATE } from '../types';

const setChosenDate = chosenDate => {
  return {
    type: DATE.CHOSEN_DATE,
    payload: chosenDate,
  };
};

const setChosenMonth = chosenMonth => {
  return {
    type: DATE.CHOSEN_MONTH,
    payload: chosenMonth,
  };
};

const setChosenMonthRange = (formattedStartDate, formattedEndDate) => {
  return {
    type: DATE.CHOSEN_MONTH_RANGE,
    payload: {
      chosenStartDate: formattedStartDate,
      chosenEndDate: formattedEndDate,
    },
  };
};

const setChosenYear = chosenYear => {
  return {
    type: DATE.CHOSEN_YEAR,
    payload: chosenYear,
  };
};

export { setChosenDate, setChosenMonth, setChosenMonthRange, setChosenYear };
