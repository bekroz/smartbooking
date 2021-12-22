import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
// TabNavigator
import TabNavigator from '../navigation/TabNavigator';
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
      }}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
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
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="RestoreScreen" component={RestoreScreen} />
      <Stack.Screen name="TermsScreen" component={TermsScreen} />
      <Stack.Screen name="NoFoundScreen" component={NoFoundScreen} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
};

const RootStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
