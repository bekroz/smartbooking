import React, { useContext, useEffect, useRef, useState } from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Alert } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
// Navigator
import HomeNavigator from '../navigation/TabNavigator';
// Private Screens
import {
  DashboardScreen,
  ComparisonScreen,
  ReservationScreen,
  SettingsScreen,
  StatsScreen,
  ArrivalsScreen,
} from '../screens/private';
// Public Screens
import {
  LoginScreen,
  SignUpScreen,
  RestoreScreen,
  NoFoundScreen,
  TermsScreen,
} from '../screens/public';
import Loader from '../components/Loader/Loader';

const Stack = createStackNavigator();

const AppStack = ({ navigation }) => {
  // import NetInfo from '@react-native-community/netinfo';

  // const [disconnectionAlert, setDisconnectionAlert] = useState(false);

  // NetInfo.addEventListener(networkState => {
  //   // console.log('Connection type - ', networkState.type);
  //   // console.log('Is connected? - ', networkState.isConnected);
  //   setDisconnectionAlert(true);
  // });
  // if (!disconnectionAlert) {
  //   Alert.alert('Network error', ' go find a free WiFI! :)', [
  //     {
  //       text: 'Try again',
  //       onPress: () => {
  //         // console.log('OK button Pressed');
  //         setDisconnectionAlert(!disconnectionAlert);
  //       },
  //       style: 'Cancel',
  //     },
  //   ]);
  // }

  const DashboardNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeNavigator} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="Reservation" component={ReservationScreen} />
        <Stack.Screen name="ComparisonScreen" component={ComparisonScreen} />
        <Stack.Screen name="StatsScreen" component={StatsScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="ArrivalsScreen" component={ArrivalsScreen} />
      </Stack.Navigator>
    );
  };

  const LoginNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="HomeScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="RestoreScreen" component={RestoreScreen} />
        <Stack.Screen name="TermsScreen" component={TermsScreen} />
        <Stack.Screen name="NoFoundScreen" component={NoFoundScreen} />
        {/* DELETE */}
        <Stack.Screen name="HomeScreen" component={HomeNavigator} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="Reservation" component={ReservationScreen} />
        <Stack.Screen name="ComparisonScreen" component={ComparisonScreen} />
        <Stack.Screen name="StatsScreen" component={StatsScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="ArrivalsScreen" component={ArrivalsScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer theme={DarkTheme}>
      {/* <DashboardNavigator /> */}
      <LoginNavigator />
    </NavigationContainer>
  );
};

export default AppStack;
