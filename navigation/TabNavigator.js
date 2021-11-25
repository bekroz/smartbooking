import React from 'react';
import { Image, PixelRatio } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Components
import { COLORS, SIZES } from '../constants/theme';
// Screens
import RegistrationScreen from '../screens/RegistrationScreen';
import DashboardScreen from '../screens/DashboardScreen';
import ReservationScreen from '../screens/ReservationScreen';
import Calendar from '../components/Calendar';
import StatsScreen from '../screens/StatsScreen';
import SettingsScreen from '../screens/SettingsScreen';
// Icons
import dashboardIcon from '../images/dashboard.png';
import registrationIcon from '../images/registration.png';
import reservationIcon from '../images/reservation.png';
import calendarIcon from '../images/calendar.png';
import statsIcon from '../images/stats.png';
import moreIcon from '../images/more.png';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const size = 7;
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
          tabBarIcon: ({ focused }) => (
            <Image
              source={dashboardIcon}
              style={{
                width: PixelRatio.getPixelSizeForLayoutSize(size),
                height: PixelRatio.getPixelSizeForLayoutSize(size),
                tintColor: focused ? COLORS.blue : COLORS.white,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Брони"
        component={ReservationScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={reservationIcon}
              style={{
                width: PixelRatio.getPixelSizeForLayoutSize(size),
                height: PixelRatio.getPixelSizeForLayoutSize(size),
                tintColor: focused ? COLORS.blue : COLORS.white,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Календарь"
        component={Calendar}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={calendarIcon}
              style={{
                width: PixelRatio.getPixelSizeForLayoutSize(size),
                height: PixelRatio.getPixelSizeForLayoutSize(size),
                tintColor: focused ? COLORS.blue : COLORS.white,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Статистика"
        component={StatsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={statsIcon}
              style={{
                width: PixelRatio.getPixelSizeForLayoutSize(size),
                height: PixelRatio.getPixelSizeForLayoutSize(size),
                tintColor: focused ? COLORS.blue : COLORS.white,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Ещё"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={moreIcon}
              style={{
                tintColor: focused ? COLORS.blue : COLORS.white,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
