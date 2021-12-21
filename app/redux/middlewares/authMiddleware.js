import { handleAppTokenizationAPI, handleUserTokenizationAPI } from '../../api'
import { getUser } from '../../utils/useCustomAsyncStorage';
import { 
  appTokenRequestAction,
  appTokenSuccessAction,
  appTokenFailureAction,
  loginRequestAction,
  loginSuccessAction,
  loginFailureAction,
 } from '../actions'

  
async function appTokenMiddleware() {
  appTokenRequestAction();
  try {
    await handleAppTokenizationAPI().then(appToken => {
      appTokenSuccessAction(appToken);
    });
  } catch (error) {
    appTokenFailureAction(error);
    console.error(error);
  }
}

async function loginUserMiddleware() {
  const user = await getUser();
  loginRequestAction(user);
  try {
    await handleUserTokenizationAPI(user).then(userToken => {
      loginSuccessAction(userToken);
    });
  } catch (error) {
    loginFailureAction(error);
    console.error(error);
  }
}

const authMiddleware = async () => {
  try {
    await appTokenMiddleware().then(loginUserMiddleware())
  } catch (error) {
    console.error(error);
  }
}

export {
    appTokenMiddleware,
    loginUserMiddleware,
    authMiddleware,
};