import React, {
  useState,
  useEffect,
  createContext,
  useRef,
  useContext,
} from 'react';
// API
import useApi from './useApi';

export const LoginContext = createContext({});

export function useAuth() {
  return useContext(LoginContext);
}

const { handleIOSAuthentication, handleIOSAuthorization } = useApi();

const LoginProvider = props => {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  const mountedRef = useRef(true);

  const authenticateUser = async () => {
    try {
      await handleIOSAuthentication().then(appToken =>
        handleIOSAuthorization(appToken).then(userToken => {
          setUser(userToken);
          setInitializing(false);
        }),
      );
    } catch (error) {
      console.error(error);
    }
    return () => {
      mountedRef.current = false;
      authenticateUser;
    };
  };

  useEffect(() => {
    authenticateUser;
  }, []);

  const value = {
    user,
    initializing,
    setUser,
    setInitializing,
  };

  return (
    <LoginContext.Provider value={value}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
