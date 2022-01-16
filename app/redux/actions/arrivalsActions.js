import { ARRIVALS_TYPE } from '../../constants';
import { ARRIVALS } from '../types';
const getArrivalsDataRequestAction = arrivalsType => {
  let activeIndex;
  switch (arrivalsType) {
    case ARRIVALS_TYPE[0]:
      activeIndex = 0;
      break;
    case ARRIVALS_TYPE[1]:
      activeIndex = 1;
      break;
    case ARRIVALS_TYPE[2]:
      activeIndex = 2;
      break;
    default:
      return;
  }
  return {
    type: ARRIVALS.DATA_REQUEST,
    payload: {
      arrivalsType,
      activeIndex,
    },
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
