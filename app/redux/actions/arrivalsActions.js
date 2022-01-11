import { ARRIVALS } from '../types';

const getArrivalsDataRequestAction = arrivalsType => {
  return {
    type: ARRIVALS.DATA_REQUEST,
    payload: arrivalsType,
  };
};

const getArrivalsDataSuccessAction = ({
  arrivalsData,
  pageIndex,
  arrivalsLength,
}) => {
  return {
    type: ARRIVALS.DATA_SUCCESS,
    payload: {
      arrivalsData,
      pageIndex,
      arrivalsLength,
    },
  };
};

const getArrivalsInitialDataFailureAction = error => {
  return {
    type: ARRIVALS.DATA_FAILURE,
    payload: error,
  };
};

// Next page handler

const getArrivalsNextPageDataRequestAction = () => {
  return {
    type: ARRIVALS.NEXT_PAGE_REQUEST,
  };
};

const getArrivalsNextPageDataSuccessAction = ({
  arrivalsData,
  pageIndex,
  arrivalsLength,
}) => {
  return {
    type: ARRIVALS.NEXT_PAGE_SUCCESS,
    payload: {
      arrivalsData,
      pageIndex,
      arrivalsLength,
    },
  };
};

const getArrivalsNextPageDataFailureAction = error => {
  return {
    type: ARRIVALS.NEXT_PAGE_FAILURE,
    payload: error,
  };
};

// Last Page handler

const arrivalsLastPageReachedAction = () => {
  return {
    type: ARRIVALS.LAST_PAGE_REACHED,
  };
};

// Type change handler
const setArrivalsTypeChangeAction = arrivalsType => {
  return {
    type: ARRIVALS.TYPE_CHANGE,
    payload: arrivalsType,
  };
};

export {
  getArrivalsDataRequestAction,
  getArrivalsDataSuccessAction,
  getArrivalsInitialDataFailureAction,
  getArrivalsNextPageDataRequestAction,
  getArrivalsNextPageDataSuccessAction,
  getArrivalsNextPageDataFailureAction,
  arrivalsLastPageReachedAction,
  setArrivalsTypeChangeAction,
};
