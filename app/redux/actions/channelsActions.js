import { CHANNELS } from '../types';

const getChannelsDataRequestAction = () => {
  return {
    type: CHANNELS.DATA_REQUEST,
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
