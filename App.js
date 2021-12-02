import React, { useEffect, useState } from 'react';
import { View, StatusBar } from 'react-native';
// Components
import { SAFEAREASTYLE, LOADERSTYLE } from './constants/theme';
import Loader from './components/Additionals/Loader';
import AppStack from './AppStack';
import useApi from './utils/useApi';
import Testing from './removables/Calendar';

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  const { handleIOSAuthentication, handleIOSAuthorization } = useApi();

  // useEffect(async () => {
  //   try {
  //     await handleIOSAuthentication();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);

  return (
    <View style={loading ? LOADERSTYLE : SAFEAREASTYLE}>
      <StatusBar animated={true} barStyle="light-content" />
      {/* {loading ? <Loader /> : <AppStack />} */}
      <Testing />
    </View>
  );
}
