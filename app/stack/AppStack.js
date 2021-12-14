import React, { useContext, useEffect, useRef, useState } from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
import useApi from '../utils/api/useApi';

const Stack = createStackNavigator();

const AppStack = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const { handleIOSAuthentication } = useApi();
  const [user, setUser] = useState(true);
  useEffect(() => {
    try {
      handleIOSAuthentication();
    } catch (error) {}
    setLoading(false);
  }, []);

  const DashboardNavigator = () => {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="HomeScreen" component={HomeNavigator} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="Reservation" component={ReservationScreen} />
        <Stack.Screen name="Comparison" component={ComparisonScreen} />
        <Stack.Screen name="StatsScreen" component={StatsScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="ArrivalsScreen" component={ArrivalsScreen} />
      </Stack.Navigator>
    );
  };

  const LoginNavigator = () => {
    return (
      <Stack.Navigator headerMode="none" initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="RestoreScreen" component={RestoreScreen} />
        <Stack.Screen name="TermsScreen" component={TermsScreen} />
        <Stack.Screen name="NoFoundScreen" component={NoFoundScreen} />
        <Stack.Screen name="HomeScreen" component={HomeNavigator} />
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
