import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ModalPortal } from 'react-native-modals';
// Component
import Loader from './components/Loader/Loader';
// Stack
import AppStack from './stack/AppStack';
// App theme
import { DarkTheme } from './constants/theme';
// API
import useApi from './utils/api/useApi';

export default function App() {
  const [loading, setLoading] = useState(true);
  const { handleIOSAuthentication } = useApi();

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
    handleIOSAuthentication();
  }, []);

  return (
    <SafeAreaProvider style={DarkTheme}>
      <StatusBar animated={true} barStyle="light-content" />
      {loading ? <Loader /> : <AppStack />}
      {/* <TestingScreen /> */}
      <ModalPortal />
    </SafeAreaProvider>
  );
}
