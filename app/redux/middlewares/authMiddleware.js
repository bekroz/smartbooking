import { handleAppTokenizationAPI, handleUserTokenizationAPI } from '../../api';
import { getUser } from '../../utils/useCustomAsyncStorage';
import {
  appTokenRequestAction,
  appTokenSuccessAction,
  appTokenFailureAction,
  loginRequestAction,
  loginSuccessAction,
  loginFailureAction,
} from '../actions';
import { store } from '../store';

async function appTokenMiddleware() {
  // store.dispatch(appTokenRequestAction());
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
  try {
    store.dispatch(loginRequestAction(user));
    return await handleUserTokenizationAPI(user).then(userToken => {
      store.dispatch(loginSuccessAction(userToken));
      console.log('====================================');
      console.log(userToken);
      console.log('====================================');
      return userToken;
    });
  } catch (error) {
    store.dispatch(loginFailureAction(error));
    console.error(error);
  }
}

const authMiddleware = async user => {
  try {
    return await appTokenMiddleware().then(loginUserMiddleware(user));
  } catch (error) {
    console.error(error);
  }
};

export { appTokenMiddleware, loginUserMiddleware, authMiddleware };
