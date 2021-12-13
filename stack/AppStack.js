import React, { useRef, useContext, useEffect } from 'react';
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
import RNBootSplash from 'react-native-bootsplash';

const Stack = createStackNavigator();

const AppStack = navigation => {
  const navigationRef = useRef();
  const { user } = useContext(LoginContext);

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
      console.log('Bootsplash has been hidden successfully');
    });
  }, []);

  const showContainer = () => {
    RNBootSplash.hide();
  };

  // Public Stack for authenticated users

  return (
    <NavigationContainer
      theme={DarkTheme}
      ref={navigationRef}
      onReady={() => showContainer()}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="LoginScreen">
        {/* Private Routes */}
        <>
          <Stack.Screen name="HomeScreen" component={HomeNavigator} />
          <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
          <Stack.Screen name="Reservation" component={ReservationScreen} />
          <Stack.Screen name="Comparison" component={ComparisonScreen} />
          <Stack.Screen name="StatsScreen" component={StatsScreen} />
          <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
          <Stack.Screen name="ArrivalsScreen" component={ArrivalsScreen} />
          {/* Public Routes */}
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="RestoreScreen" component={RestoreScreen} />
          <Stack.Screen name="TermsScreen" component={TermsScreen} />
          <Stack.Screen name="NoFoundScreen" component={NoFoundScreen} />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
