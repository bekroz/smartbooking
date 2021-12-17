import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Theme
import { COLORS, SIZES } from '../constants/theme';
// Screens
import {
  DashboardScreen,
  ReservationScreen,
  StatsScreen,
  SettingsScreen,
  CalendarScreen,
} from '../screens/private';
// Tab Icons
import {
  DashboardTabSvg,
  DashboardActiveTabSvg,
  ReservationTabSvg,
  ReservationActiveTabSvg,
  StatsTabSvg,
  StatsActiveTabSvg,
  MoreTabSvg,
  MoreActiveTabSvg,
  CalendarTabSvg,
  CalendarActiveTabSvg,
} from '../assets/icons/SvgIcons';
import { persistor, store } from '../redux/store';
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  // console.log(store.getState());
  // console.log('====================================');
  // console.log(persistor.getState());
  // console.log('====================================');

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: COLORS.blackBackground,
          borderTopColor: COLORS.blackBackground,
          height: 80,
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: 999,
          paddingTop: 10,
        },
        headerShown: false,
        tabBarActiveTintColor: COLORS.blue,
        tabBarInactiveTintColor: COLORS.white,
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          fontWeight: SIZES.fontWeight1,
        },
      }}>
      <Tab.Screen
        name="Дашборд"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <DashboardActiveTabSvg /> : <DashboardTabSvg />,
        }}
      />
      <Tab.Screen
        name="Брони"
        component={ReservationScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <ReservationActiveTabSvg /> : <ReservationTabSvg />,
        }}
      />
      <Tab.Screen
        name="Календарь"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <CalendarActiveTabSvg /> : <CalendarTabSvg />,
        }}
      />
      <Tab.Screen
        name="Статистика"
        component={StatsScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <StatsActiveTabSvg /> : <StatsTabSvg />,
        }}
      />
      <Tab.Screen
        name="Ещё"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <MoreActiveTabSvg /> : <MoreTabSvg />,
        }}
      />
    </Tab.Navigator>
  );
}
