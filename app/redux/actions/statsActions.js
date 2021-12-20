import { USER_SELECTION } from '../types/index';

const setHotelIDAction = (hotelID) => {
  return {
    type: USER_SELECTION.CHOSEN_HOTEL_ID,
    hotelID: hotelID
  };
};

const setDateRangeAction = (dateRange) => {
  return {
    type: USER_SELECTION.CHOSEN_RANGE,
    dateRange: dateRange
  };
};

const setChosenYearAction = (chosenYear) => {
  return {
    type: USER_SELECTION.CHOSEN_RANGE,
    chosenYear: chosenYear
  };
};

export { setHotelIDAction, setDateRangeAction, setChosenYearAction };
