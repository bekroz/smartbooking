import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Tabs
import TabNavigator from './navigation/TabNavigator';
// Screens
import RegistrationScreen from './screens/RegistrationScreen';
import ReservationScreen from './screens/ReservationScreen';
import TermsLoader from './components/TermsLoader';
import DashboardScreen from './screens/DashboardScreen';
import Calendar from './components/Calendar';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="TermsLoader" component={TermsLoader} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Reservation" component={ReservationScreen} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// TODO: Screens: // 1. <Dashboard />
// 2. <DashboardModal /> Component // 3. <Reservation />
// 4. <Comparison />
// 5. <Stats />
// 6. <Calendar /> Component // 7. <NavigationBar /> Component
