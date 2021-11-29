import React, { useEffect, useState } from 'react';
import { View, StatusBar } from 'react-native';
// Components
import { SAFEAREASTYLE, LOADERSTYLE } from './constants/theme';
import Loader from './components/Additionals/Loader';
import AppStack from './AppStack';

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <View style={loading ? LOADERSTYLE : SAFEAREASTYLE}>
      <StatusBar animated={true} barStyle="light-content" />
      {loading ? <Loader /> : <AppStack />}
      {/* <Testing /> */}
    </View>
  );
}
