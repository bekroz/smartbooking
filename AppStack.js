import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Tabs
import TabNavigator from './navigation/TabNavigator';
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

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}>
        {/* Public Routes */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="NoFoundScreen" component={NoFoundScreen} />
        {/* Private Routes */}
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="TermsLoader" component={TermsLoader} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Reservation" component={ReservationScreen} />
        <Stack.Screen name="Comparison" component={ComparisonScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Stats" component={StatsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
