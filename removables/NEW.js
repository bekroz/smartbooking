import React, { useEffect, useRef, useContext } from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Tabs
import TabNavigator from '../navigation/TabNavigator';
// Private Screens
import ReservationScreen from './screens/private/ReservationScreen';
import TermsLoader from './components/Terms/TermsLoader';
import DashboardScreen from './screens/private/DashboardScreen';
import ComparisonScreen from './screens/private/ComparisonScreen';
import SettingsScreen from './screens/private/SettingsScreen';
import StatsScreen from './screens/private/StatsScreen';
// Public Screens
import LoginScreen from './screens/public/LoginScreen';
import NoFoundScreen from './screens/public/NoFoundScreen';
import SignUpScreen from './screens/public/SignUpScreen';
// Context
import LoginProvider from './utils/LoginProvider';

const Stack = createStackNavigator();

const AppStack = ({ navigation }) => {
  const navigationRef = useRef();
  const { user } = useContext(LoginProvider);

  // Public Stack for authenticated users
  const DashboardNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}>
        {/* Private Routes */}
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="TermsLoader" component={TermsLoader} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Reservation" component={ReservationScreen} />
        <Stack.Screen name="Comparison" component={ComparisonScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Stats" component={StatsScreen} />
      </Stack.Navigator>
    );
  };

  // Private Stack for UNauthenticated users
  const LoginNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Login'}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="RestoreScreen" component={RestoreScreen} />
        <Stack.Screen name="NoFoundScreen" component={NoFoundScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer theme={DarkTheme} ref={navigationRef}>
      {user && <DashboardNavigator />}
      {!user && <LoginNavigator />}
    </NavigationContainer>
  );
};

export default AppStack;
