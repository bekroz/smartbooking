import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Tabs
import TabNavigator from './navigation/TabNavigator';
// Screens
import Registration from './screens/Registration';
import Reservation from './screens/Reservation';
import TermsLoader from './components/TermsLoader';
import Dashboard from './screens/Dashboard';
import Calendar from './components/Calendar';
import Settings from './screens/Settings';

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
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="TermsLoader" component={TermsLoader} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Reservation" component={Reservation} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// TODO: Screens: // 1. <Dashboard />
// 2. <DashboardModal /> Component // 3. <Reservation />
// 4. <Comparison />
// 5. <Stats />
// 6. <Calendar /> Component // 7. <NavigationBar /> Component
