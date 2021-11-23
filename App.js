import React, { useEffect, useState } from 'react';
import { View, StatusBar } from 'react-native';
// Components
import { SAFEAREASTYLE, LOADERSTYLE } from './constants/theme';
import Loader from './components/Loader';
import AppStack from './AppStack';
import Arc from './components/Arc';

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <View style={loading ? LOADERSTYLE : SAFEAREASTYLE}>
      <StatusBar animated={true} barStyle="light-content" />
      <AppStack />
      {/* <Arc /> */}
    </View>
  );
}
