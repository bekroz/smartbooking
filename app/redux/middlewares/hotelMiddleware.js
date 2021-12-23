import { getAllHotelPropertiesDataAPI } from '../../api';
import {
  getHotelDataRequestAction,
  getHotelDataSuccessAction,
  getHotelDataFailureAction,
  showHotelModalToChooseAction,
  setDefaultHotelIDAction,
  noHotelFoundAction,
} from '../actions';
import { store } from '../store';

async function getHotelsDataMiddleware() {
  store.dispatch(getHotelDataRequestAction());
  try {
    return await getAllHotelPropertiesDataAPI().then(hotelList => {
      store.dispatch(getHotelDataSuccessAction(hotelList));
      return hotelList;
    });
  } catch (error) {
    store.dispatch(getHotelDataFailureAction(error));
    console.error(error);
  }
}

async function setHotelIDMiddleware(hotelList) {
  const hotelID = await store.getState().hotelReducer.hotelID;
  if (hotelID === null) {
    if (hotelList.length > 1) {
      store.dispatch(showHotelModalToChooseAction());
    } else if (hotelList.length == 1) {
      const defaultOneHotelID = hotelList[0].id;
      const defaultOneHotelName = hotelList[0].name;
      store.dispatch(
        setDefaultHotelIDAction(defaultOneHotelID, defaultOneHotelName),
      );
      return defaultOneHotelID;
    } else {
      store.dispatch(noHotelFoundAction());
    }
  } else {
    return hotelID;
  }
}

export { getHotelsDataMiddleware, setHotelIDMiddleware };
