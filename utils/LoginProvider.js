import React, {
  useState,
  useEffect,
  createContext,
  useRef,
  useContext,
} from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginContext = createContext({});

export function useAuth() {
  return useContext(LoginContext);
}

const LoginProvider = props => {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  const mountedRef = useRef(true);  
  firebase.onAuthStateChanged(user => {
    if (mountedRef.current) {
      setUser(user);
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(data => {
      setUser(data);
      setInitializing(false);
      if (data) {
        data.getIdToken().then(async token => {
          await AsyncStorage.setItem('token', token);
        });
      }
    });

    GoogleSignin.configure({
      webClientId:
        //TODO: WebClient ID
        '',
    });

    return () => {
      mountedRef.current = false;
      subscriber;
    };
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
