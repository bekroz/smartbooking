import { handleAppTokenizationAPI, handleUserTokenizationAPI } from '../../api';
import {
  appTokenRequestAction,
  appTokenSuccessAction,
  appTokenFailureAction,
  loginRequestAction,
  loginSuccessAction,
  loginFailureAction,
  logOutSuccessAction,
  logOutRequestAction,
  logOutFailureAction,
  // HotelDataRemover
  purgeHotelDataAction,
} from '../actions';
import { store } from '../store';

async function appTokenMiddleware() {
  store.dispatch(appTokenRequestAction());
  try {
    return await handleAppTokenizationAPI().then(appToken => {
      store.dispatch(appTokenSuccessAction(appToken));
      return appToken;
    });
  } catch (error) {
    store.dispatch(appTokenFailureAction(error));
    console.error(error);
  }
}

async function loginUserMiddleware(user) {
  store.dispatch(loginRequestAction());
  try {
    if (user) {
      return await handleUserTokenizationAPI(user).then(userToken => {
        if (userToken) {
          store.dispatch(loginSuccessAction({ user, userToken }));
          return userToken;
        } else {
          store.dispatch(loginFailureAction());
        }
      });
    } else {
      store.dispatch(loginFailureAction());
      return null;
    }
  } catch (error) {
    store.dispatch(loginFailureAction(error));
    console.error(error);
  }
}

const splashScreenMiddleware = async user => {
  try {
    await appTokenMiddleware().then(loginUserMiddleware(user));
  } catch (error) {
    console.error(error);
  }
};

const logOutMiddleware = async () => {
  store.dispatch(logOutRequestAction());
  try {
    store.dispatch(logOutSuccessAction());
    store.dispatch(purgeHotelDataAction());
  } catch (error) {
    store.dispatch(logOutFailureAction(error));
    console.error(error);
  }
};

export {
  appTokenMiddleware,
  loginUserMiddleware,
  splashScreenMiddleware,
  logOutMiddleware,
};
