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
// DEV ==>> Testing new screens
import TestingScreen from './components/Dashboard/Modals/HotelModalBox';

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
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
