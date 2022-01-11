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

async function setHotelIDMiddleware() {
  const { hotelList, hotelID } = await store.getState().hotelReducer;
  if (hotelID === null) {
    const defaultHotel = {
      hotelID: hotelList[0].id,
      hotelName: hotelList[0].name,
    };
    store.dispatch(setDefaultHotelIDAction(defaultHotel));
  } else {
    store.dispatch(noHotelFoundAction());
  }
}

export { getHotelsDataMiddleware, setHotelIDMiddleware };
