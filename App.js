import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// Components
import { SAFEAREASTYLE, LOADERSTYLE } from './constants/theme';
import Loader from './components/Additionals/Loader';
import AppStack from './AppStack';
import Testing from './removables/Modal/Modal';
import { ModalPortal } from 'react-native-modals';

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar animated={true} barStyle="light-content" />
      {loading ? <Loader /> : <AppStack />}
      {/* <Testing /> */}
      <ModalPortal />
    </SafeAreaProvider>
  );
}
