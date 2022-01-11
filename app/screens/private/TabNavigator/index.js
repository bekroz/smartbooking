import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Theme
import { COLORS, SIZES } from '../../../constants';
// Screens
import {
  DashboardScreen,
  ReservationScreen,
  StatsScreen,
  SettingsScreen,
  CalendarScreen,
} from '..';
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
} from '../../../assets/icons/SvgIcons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const AppleScreenOptions = {
    tabBarLabelStyle: styles.tabBarLabelStyle,
    tabBarStyle: styles.AppleTabBarStyle,
    headerShown: false,
    tabBarActiveTintColor: COLORS.blue,
    tabBarInactiveTintColor: COLORS.white,
    tabBarHideOnKeyboard: true,
  };

  return (
    <Tab.Navigator screenOptions={AppleScreenOptions}>
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

const styles = StyleSheet.create({
  AppleTabBarStyle: {
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
  tabBarLabelStyle: {
    fontWeight: SIZES.fontWeight1,
  },
});
