import React, { useRef, useContext } from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Tab
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
// Context
import { LoginContext } from '../utils/auth/LoginProvider';

const Stack = createStackNavigator();

const AppStack = navigation => {
  const navigationRef = useRef();
  const { user } = useContext(LoginContext);

  // Public Stack for authenticated users
  const DashboardStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'HomeScreen'}>
        {/* Private Routes */}
        <Stack.Screen name="HomeScreen" component={HomeNavigator} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="ReservationScreen" component={ReservationScreen} />
        <Stack.Screen name="ComparisonScreen" component={ComparisonScreen} />
        <Stack.Screen name="StatsScreen" component={StatsScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="ArrivalsScreen" component={ArrivalsScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    );
  };

  // Private Stack for UNauthenticated users
  const LoginStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'LoginScreen'}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="RestoreScreen" component={RestoreScreen} />
        <Stack.Screen name="TermsScreen" component={TermsScreen} />
        <Stack.Screen name="NoFoundScreen" component={NoFoundScreen} />
        <Stack.Screen name="HomeScreen" component={HomeNavigator} />
        <Stack.Screen name="ArrivalsScreen" component={ArrivalsScreen} />
        <Stack.Screen name="ComparisonScreen" component={ComparisonScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer theme={DarkTheme} ref={navigationRef}>
      {user && <DashboardStack />}
      {!user && <LoginStack />}
    </NavigationContainer>
  );
};

export default AppStack;
