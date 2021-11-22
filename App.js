import React, { useEffect, useState } from 'react';
import { View, StatusBar, Text } from 'react-native';
// Components
// import {SAFEAREASTYLE, LOADERSTYLE} from './constants/theme';
// import Loader from './components/Loader';
// import AppStack from './AppStack';
// import BarChart from './components/BarChart';

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <View>
      <StatusBar animated={true} barStyle="light-content" />
      {/* <AppStack /> */}
      {/* <BarChart /> */}
      <Text>Hello</Text>
    </View>
  );
}

// {loading ? <Loader /> : <AppStack />}
