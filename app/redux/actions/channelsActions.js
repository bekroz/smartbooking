import { CHANNELS } from '../types';

const getChannelsDataRequestAction = chosenDateRange => {
  return {
    type: CHANNELS.DATA_REQUEST,
    payload: chosenDateRange,
  };
};

const getChannelsDataSuccessAction = (
  channelsData,
  totalRevenue,
  totalSoldNights,
  totalAverageSum,
) => {
  return {
    type: CHANNELS.DATA_SUCCESS,
    payload: {
      channelsData,
      totalRevenue,
      totalSoldNights,
      totalAverageSum,
    },
  };
};

const getChannelsDataFailureAction = error => {
  return {
    type: CHANNELS.DATA_FAILURE,
    payload: error,
  };
};

export {
  getChannelsDataRequestAction,
  getChannelsDataSuccessAction,
  getChannelsDataFailureAction,
};
