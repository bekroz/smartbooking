import { useSelector } from 'react-redux';
import { getAllHotelPropertiesDataAPI } from '../../api';
import {
  getHotelDataRequestAction,
  getHotelDataSuccessAction,
  getHotelDataFailureAction,
} from '../actions';
import { setUserChosenHotelIDAction } from '../actions/hotelActions';
import { store } from '../store';

async function getHotelsDataMiddleware() {
  store.dispatch(getHotelDataRequestAction());
  try {
    return await getAllHotelPropertiesDataAPI().then(hotelList => {
      store.dispatch(getHotelDataSuccessAction(hotelList));
    });
  } catch (error) {
    store.dispatch(getHotelDataFailureAction(error));
    console.error(error);
  }
}

const setHotelIDMiddleware = hotelList => {
  const hotelID = useSelector(store => store.hotelReducer.hotelID);
  if (hotelID === null) {
    if (hotelList.length == 1) {
      const defaultOneHotelID = hotelList[0].id;
      store.dispatch(setDefaultHotelIDAction(defaultOneHotelID));
      return defaultOneHotelID;
    } else {
      store.dispatch(noHotelFoundAction());
    }
  } else {
    return hotelID;
  }
};

export { getHotelsDataMiddleware, setHotelIDMiddleware };
