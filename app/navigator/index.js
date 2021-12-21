import React, { useState } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
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

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeNavigator} />
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
      <Stack.Screen name="Reservation" component={ReservationScreen} />
      <Stack.Screen name="ComparisonScreen" component={ComparisonScreen} />
      <Stack.Screen name="StatsScreen" component={StatsScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="ArrivalsScreen" component={ArrivalsScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="RestoreScreen" component={RestoreScreen} />
      <Stack.Screen name="TermsScreen" component={TermsScreen} />
      <Stack.Screen name="NoFoundScreen" component={NoFoundScreen} />
    </>
  );
};

const RootStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    HomeScreen: AppStack,
    LoginScreen: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
