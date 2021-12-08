import React, { useEffect, useState } from 'react';
import { View, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// Components
import { SAFEAREASTYLE, LOADERSTYLE } from './constants/theme';
import Loader from './components/Additionals/Loader';
import AppStack from './AppStack';
import useApi from './utils/useApi';
// import AuthProvider from './contexts/AuthContext';
import LoginProvider from './utils/LoginProvider';
// import Testing from './removables/AnimatedArc';

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
    </SafeAreaProvider>
  );
}
