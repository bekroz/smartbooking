import {
  getChannelsDataRequestAction,
  getChannelsDataSuccessAction,
  getChannelsDataFailureAction,
} from '../actions';
import { getChannelsDataAPI } from '../../api';

async function getChannelsDataMiddleware(channelsOutgoingData) {
  store.dispatch(
    getChannelsDataRequestAction(channelsOutgoingData.chosenDateRange),
  );
  try {
    await getChannelsDataAPI(channelsOutgoingData).then(channelsData => {
      getChannelsDataSuccessAction(channelsData);
    });
  } catch (error) {
    getChannelsDataFailureAction(error);
    console.error(error);
  }
}

export default getChannelsDataMiddleware;
