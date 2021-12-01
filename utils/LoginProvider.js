// import React, {
//   useState,
//   useEffect,
//   createContext,
//   useRef,
//   useContext,
// } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import useApi from './useApi';

// export const LoginContext = createContext({});

// export function useAuth() {
//   return useContext(LoginContext);
// }

// const LoginProvider = props => {
//   const { handleIOSAuthentication, handleIOSAuthorization } = useApi();
//   const [initializing, setInitializing] = useState(true);
//   const mountedRef = useRef(true);

//   const authenticateUser = async () => {
//     try {
//       handleIOSAuthentication().then(handleIOSAuthorization({ user_secret }));
//       setInitializing(false);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     return () => {
//       mountedRef.current = false;
//       authenticateUser;
//     };
//   }, []);

//   const value = {
//     user,
//     initializing,
//     setUser,
//     setInitializing,
//   };
//   return (
//     <LoginContext.Provider value={value}>
//       {props.children}
//     </LoginContext.Provider>
//   );
// };

// export default LoginProvider;
