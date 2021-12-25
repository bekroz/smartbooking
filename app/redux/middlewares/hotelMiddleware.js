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
  try {
    if (hotelID === null) {
      if (hotelList.length > 1) {
        store.dispatch(showHotelModalToChooseAction());
      } else if (hotelList.length == 1) {
        const defaultHotel = {
          hotelID: hotelList[0].id,
          hotelName: hotelList[0].name,
        };
        store.dispatch(setDefaultHotelIDAction(defaultHotel));
        return defaultHotel;
      } else {
        store.dispatch(noHotelFoundAction());
      }
    }
  } catch (error) {
    console.error(error);
  }
}

export { getHotelsDataMiddleware, setHotelIDMiddleware };
