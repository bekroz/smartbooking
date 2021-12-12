import React from 'react';
import { View, Image, PixelRatio } from 'react-native';
import { SvgXml } from 'react-native-svg';
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
// Icons

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
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SvgXml
                xml={`<svg
                  width="17"
                  height="17"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.581172 2.66035C0 3.75799 0 5.20533 0 8.1V9.9C0 12.7947 0 14.242 0.581172 15.3396C1.05017 16.2254 1.77456 16.9498 2.66035 17.4188C3.75799 18 5.20533 18 8.1 18H10.2531C13.1478 18 14.5951 18 15.6928 17.4188C16.5786 16.9498 17.303 16.2254 17.772 15.3396C18.3531 14.242 18.3531 12.7947 18.3531 9.9V8.1C18.3531 5.20533 18.3531 3.75799 17.772 2.66035C17.303 1.77456 16.5786 1.05017 15.6928 0.581172C14.5951 0 13.1478 0 10.2531 0H8.1C5.20533 0 3.75799 0 2.66035 0.581172C1.77456 1.05017 1.05017 1.77456 0.581172 2.66035ZM11.4289 10.8434L14.3448 7.15994L14.3044 7.17969C14.4659 6.96238 14.4961 6.68579 14.3852 6.43885C14.2752 6.1919 14.032 6.02397 13.7707 6.00422C13.4973 5.97458 13.2259 6.09312 13.0634 6.31043L10.6227 9.40223L7.82687 7.24884C7.65534 7.12042 7.45355 7.07005 7.25176 7.09079C7.05097 7.12042 6.86936 7.22809 6.74727 7.38614L3.76173 11.1901L3.70019 11.279C3.52866 11.5941 3.60938 11.9991 3.91207 12.2174C4.05333 12.3063 4.20467 12.3656 4.3762 12.3656C4.60927 12.3755 4.83023 12.256 4.97149 12.0693L7.504 8.87771L10.3796 10.9926L10.4704 11.0509C10.7932 11.2188 11.1968 11.1408 11.4289 10.8434Z"
                    fill="#5F85DB"
                  />
                </svg>`}
                width="23"
                height="26"
                marginBottom={5}
              />
            ) : (
              <SvgXml
                xml={`<svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.581172 2.66035C0 3.75799 0 5.20533 0 8.1V9.9C0 12.7947 0 14.242 0.581172 15.3396C1.05017 16.2254 1.77456 16.9498 2.66035 17.4188C3.75799 18 5.20533 18 8.1 18H10.2531C13.1478 18 14.5951 18 15.6928 17.4188C16.5786 16.9498 17.303 16.2254 17.772 15.3396C18.3531 14.242 18.3531 12.7947 18.3531 9.9V8.1C18.3531 5.20533 18.3531 3.75799 17.772 2.66035C17.303 1.77456 16.5786 1.05017 15.6928 0.581172C14.5951 0 13.1478 0 10.2531 0H8.1C5.20533 0 3.75799 0 2.66035 0.581172C1.77456 1.05017 1.05017 1.77456 0.581172 2.66035ZM11.4289 10.8434L14.3448 7.15994L14.3044 7.17969C14.4659 6.96238 14.4961 6.68579 14.3852 6.43885C14.2752 6.1919 14.032 6.02397 13.7707 6.00422C13.4973 5.97458 13.2259 6.09312 13.0634 6.31043L10.6227 9.40223L7.82687 7.24884C7.65534 7.12042 7.45355 7.07005 7.25176 7.09079C7.05097 7.12042 6.86936 7.22809 6.74727 7.38614L3.76173 11.1901L3.70019 11.279C3.52866 11.5941 3.60938 11.9991 3.91207 12.2174C4.05333 12.3063 4.20467 12.3656 4.3762 12.3656C4.60927 12.3755 4.83023 12.256 4.97149 12.0693L7.504 8.87771L10.3796 10.9926L10.4704 11.0509C10.7932 11.2188 11.1968 11.1408 11.4289 10.8434Z"
                  fill="white"
                />
              </svg>`}
                width="23"
                height="26"
                marginBottom={5}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Брони"
        component={ReservationScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SvgXml
                xml={`<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.81 0H13.191C16.28 0 18 1.74264 18 4.72863V14.8418C18 17.8768 16.28 19.5802 13.191 19.5802H4.81C1.77 19.5802 0 17.8768 0 14.8418V4.72863C0 1.74264 1.77 0 4.81 0ZM5.08 4.56219V4.5524H8.069C8.5 4.5524 8.85 4.89506 8.85 5.31505C8.85 5.7468 8.5 6.08945 8.069 6.08945H5.08C4.649 6.08945 4.3 5.7468 4.3 5.32582C4.3 4.90485 4.649 4.56219 5.08 4.56219ZM5.08 10.5146H12.92C13.35 10.5146 13.7 10.1719 13.7 9.75095C13.7 9.32998 13.35 8.98635 12.92 8.98635H5.08C4.649 8.98635 4.3 9.32998 4.3 9.75095C4.3 10.1719 4.649 10.5146 5.08 10.5146ZM5.08 14.9887H12.92C13.319 14.9495 13.62 14.6157 13.62 14.225C13.62 13.8236 13.319 13.4908 12.92 13.4516H5.08C4.78 13.4223 4.49 13.5593 4.33 13.8139C4.17 14.0586 4.17 14.3817 4.33 14.6362C4.49 14.881 4.78 15.0278 5.08 14.9887Z" fill="#5F85DB"/>
                </svg>`}
                marginBottom={5}
                width="23"
                height="26"
              />
            ) : (
              <SvgXml
                xml={`<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.81 0H13.191C16.28 0 18 1.74264 18 4.72863V14.8418C18 17.8768 16.28 19.5802 13.191 19.5802H4.81C1.77 19.5802 0 17.8768 0 14.8418V4.72863C0 1.74264 1.77 0 4.81 0ZM5.08 4.56219V4.5524H8.069C8.5 4.5524 8.85 4.89506 8.85 5.31505C8.85 5.7468 8.5 6.08945 8.069 6.08945H5.08C4.649 6.08945 4.3 5.7468 4.3 5.32582C4.3 4.90485 4.649 4.56219 5.08 4.56219ZM5.08 10.5146H12.92C13.35 10.5146 13.7 10.1719 13.7 9.75095C13.7 9.32998 13.35 8.98635 12.92 8.98635H5.08C4.649 8.98635 4.3 9.32998 4.3 9.75095C4.3 10.1719 4.649 10.5146 5.08 10.5146ZM5.08 14.9887H12.92C13.319 14.9495 13.62 14.6157 13.62 14.225C13.62 13.8236 13.319 13.4908 12.92 13.4516H5.08C4.78 13.4223 4.49 13.5593 4.33 13.8139C4.17 14.0586 4.17 14.3817 4.33 14.6362C4.49 14.881 4.78 15.0278 5.08 14.9887Z" fill="#fff"/>
                </svg>`}
                marginBottom={5}
                width="23"
                height="26"
              />
            ),
        }}
      />
      <Tab.Screen
        name="Календарь"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SvgXml
                xml={`<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4109 0.752485L13.4119 1.48638C16.1665 1.69774 17.9862 3.5354 17.9891 6.35354L18 14.6025C18.0039 17.675 16.0322 19.5655 12.8718 19.5704L5.15188 19.5802C2.01119 19.5841 0.0148166 17.6486 0.0108673 14.5673L6.64975e-06 6.41519C-0.00394266 3.57846 1.75153 1.74568 4.50617 1.49812L4.50518 0.764228C4.5042 0.333678 4.83001 0.00978743 5.26444 0.00978743C5.69886 0.00880891 6.02468 0.331721 6.02567 0.76227L6.02666 1.44724L11.8914 1.43941L11.8904 0.754442C11.8894 0.323893 12.2152 0.000980739 12.6496 2.21794e-06C13.0742 -0.000976304 13.4099 0.321936 13.4109 0.752485ZM1.52148 6.71755L16.4696 6.69798V6.3555C16.4272 4.25168 15.349 3.14791 13.4138 2.98351L13.4148 3.73698C13.4148 4.15774 13.0801 4.49142 12.6556 4.49142C12.2211 4.49239 11.8943 4.1597 11.8943 3.73893L11.8934 2.94633L6.02863 2.95416L6.02962 3.74578C6.02962 4.16752 5.70479 4.50022 5.27036 4.50022C4.83594 4.5012 4.50913 4.16948 4.50913 3.74774L4.50815 2.99428C2.58286 3.18313 1.51753 4.29082 1.52049 6.41323L1.52148 6.71755ZM12.2399 11.1649V11.1757C12.2498 11.6258 12.625 11.9673 13.0801 11.9575C13.5244 11.9468 13.8789 11.574 13.869 11.1238C13.8483 10.6933 13.4918 10.342 13.0485 10.343C12.5944 10.3528 12.2389 10.7148 12.2399 11.1649ZM13.0554 15.5585C12.6013 15.5487 12.235 15.1779 12.234 14.7277C12.2241 14.2776 12.5884 13.9048 13.0426 13.894H13.0525C13.5165 13.894 13.8927 14.2649 13.8927 14.7248C13.8937 15.1847 13.5185 15.5575 13.0554 15.5585ZM8.17212 11.1806C8.19187 11.6307 8.56804 11.982 9.02221 11.9624C9.46651 11.9419 9.82096 11.57 9.80121 11.1199C9.79035 10.6796 9.42504 10.3371 8.98074 10.3381C8.52657 10.3577 8.17113 10.7305 8.17212 11.1806ZM9.02616 15.5145C8.57199 15.534 8.1968 15.1827 8.17607 14.7326C8.17607 14.2825 8.53052 13.9107 8.98469 13.8901C9.42899 13.8891 9.79529 14.2316 9.80516 14.671C9.82589 15.1221 9.47046 15.4939 9.02616 15.5145ZM4.10433 11.2148C4.12408 11.665 4.50025 12.0172 4.95442 11.9967C5.39872 11.9771 5.75317 11.6043 5.73243 11.1542C5.72256 10.7138 5.35725 10.3714 4.91196 10.3723C4.45779 10.3919 4.10334 10.7647 4.10433 11.2148ZM4.95837 15.5194C4.5042 15.5399 4.12901 15.1876 4.10828 14.7375C4.10729 14.2874 4.46273 13.9146 4.9169 13.895C5.3612 13.894 5.7275 14.2365 5.73737 14.6768C5.7581 15.127 5.40365 15.4998 4.95837 15.5194Z" fill="#5F85DB"/>
                </svg>`}
                width="23"
                height="26"
                marginBottom={5}
              />
            ) : (
              <SvgXml
                xml={`<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4109 0.752485L13.4119 1.48638C16.1665 1.69774 17.9862 3.5354 17.9891 6.35354L18 14.6025C18.0039 17.675 16.0322 19.5655 12.8718 19.5704L5.15188 19.5802C2.01119 19.5841 0.0148166 17.6486 0.0108673 14.5673L6.64975e-06 6.41519C-0.00394266 3.57846 1.75153 1.74568 4.50617 1.49812L4.50518 0.764228C4.5042 0.333678 4.83001 0.00978743 5.26444 0.00978743C5.69886 0.00880891 6.02468 0.331721 6.02567 0.76227L6.02666 1.44724L11.8914 1.43941L11.8904 0.754442C11.8894 0.323893 12.2152 0.000980739 12.6496 2.21794e-06C13.0742 -0.000976304 13.4099 0.321936 13.4109 0.752485ZM1.52148 6.71755L16.4696 6.69798V6.3555C16.4272 4.25168 15.349 3.14791 13.4138 2.98351L13.4148 3.73698C13.4148 4.15774 13.0801 4.49142 12.6556 4.49142C12.2211 4.49239 11.8943 4.1597 11.8943 3.73893L11.8934 2.94633L6.02863 2.95416L6.02962 3.74578C6.02962 4.16752 5.70479 4.50022 5.27036 4.50022C4.83594 4.5012 4.50913 4.16948 4.50913 3.74774L4.50815 2.99428C2.58286 3.18313 1.51753 4.29082 1.52049 6.41323L1.52148 6.71755ZM12.2399 11.1649V11.1757C12.2498 11.6258 12.625 11.9673 13.0801 11.9575C13.5244 11.9468 13.8789 11.574 13.869 11.1238C13.8483 10.6933 13.4918 10.342 13.0485 10.343C12.5944 10.3528 12.2389 10.7148 12.2399 11.1649ZM13.0554 15.5585C12.6013 15.5487 12.235 15.1779 12.234 14.7277C12.2241 14.2776 12.5884 13.9048 13.0426 13.894H13.0525C13.5165 13.894 13.8927 14.2649 13.8927 14.7248C13.8937 15.1847 13.5185 15.5575 13.0554 15.5585ZM8.17212 11.1806C8.19187 11.6307 8.56804 11.982 9.02221 11.9624C9.46651 11.9419 9.82096 11.57 9.80121 11.1199C9.79035 10.6796 9.42504 10.3371 8.98074 10.3381C8.52657 10.3577 8.17113 10.7305 8.17212 11.1806ZM9.02616 15.5145C8.57199 15.534 8.1968 15.1827 8.17607 14.7326C8.17607 14.2825 8.53052 13.9107 8.98469 13.8901C9.42899 13.8891 9.79529 14.2316 9.80516 14.671C9.82589 15.1221 9.47046 15.4939 9.02616 15.5145ZM4.10433 11.2148C4.12408 11.665 4.50025 12.0172 4.95442 11.9967C5.39872 11.9771 5.75317 11.6043 5.73243 11.1542C5.72256 10.7138 5.35725 10.3714 4.91196 10.3723C4.45779 10.3919 4.10334 10.7647 4.10433 11.2148ZM4.95837 15.5194C4.5042 15.5399 4.12901 15.1876 4.10828 14.7375C4.10729 14.2874 4.46273 13.9146 4.9169 13.895C5.3612 13.894 5.7275 14.2365 5.73737 14.6768C5.7581 15.127 5.40365 15.4998 4.95837 15.5194Z" fill="white"/>
                </svg>`}
                width="23"
                height="26"
                marginBottom={5}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Статистика"
        component={StatsScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SvgXml
                xml={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33 0H14.669C18.07 0 19.99 1.88852 20 5.21814V14.3621C20 17.6908 18.07 19.5803 14.669 19.5803H5.33C1.929 19.5803 0 17.6908 0 14.3621V5.21814C0 1.88852 1.929 0 5.33 0ZM10.049 15.5271C10.48 15.5271 10.839 15.2139 10.879 14.7929V4.81674C10.919 4.51325 10.77 4.20878 10.5 4.04332C10.219 3.87689 9.879 3.87689 9.61 4.04332C9.339 4.20878 9.19 4.51325 9.219 4.81674V14.7929C9.27 15.2139 9.629 15.5271 10.049 15.5271ZM14.65 15.5271C15.07 15.5271 15.429 15.2139 15.48 14.7929V11.5817C15.509 11.2675 15.36 10.9747 15.089 10.8083C14.82 10.6419 14.48 10.6419 14.2 10.8083C13.929 10.9747 13.78 11.2675 13.82 11.5817V14.7929C13.86 15.2139 14.219 15.5271 14.65 15.5271ZM6.219 14.7929C6.179 15.2139 5.82 15.5271 5.389 15.5271C4.959 15.5271 4.599 15.2139 4.56 14.7929V8.02791C4.53 7.72343 4.679 7.42092 4.95 7.25449C5.219 7.08805 5.56 7.08805 5.83 7.25449C6.099 7.42092 6.25 7.72343 6.219 8.02791V14.7929Z" fill="#5F85DB"/>
                </svg>`}
                marginBottom={5}
                width="23"
                height="26"
              />
            ) : (
              <SvgXml
                xml={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33 0H14.669C18.07 0 19.99 1.88852 20 5.21814V14.3621C20 17.6908 18.07 19.5803 14.669 19.5803H5.33C1.929 19.5803 0 17.6908 0 14.3621V5.21814C0 1.88852 1.929 0 5.33 0ZM10.049 15.5271C10.48 15.5271 10.839 15.2139 10.879 14.7929V4.81674C10.919 4.51325 10.77 4.20878 10.5 4.04332C10.219 3.87689 9.879 3.87689 9.61 4.04332C9.339 4.20878 9.19 4.51325 9.219 4.81674V14.7929C9.27 15.2139 9.629 15.5271 10.049 15.5271ZM14.65 15.5271C15.07 15.5271 15.429 15.2139 15.48 14.7929V11.5817C15.509 11.2675 15.36 10.9747 15.089 10.8083C14.82 10.6419 14.48 10.6419 14.2 10.8083C13.929 10.9747 13.78 11.2675 13.82 11.5817V14.7929C13.86 15.2139 14.219 15.5271 14.65 15.5271ZM6.219 14.7929C6.179 15.2139 5.82 15.5271 5.389 15.5271C4.959 15.5271 4.599 15.2139 4.56 14.7929V8.02791C4.53 7.72343 4.679 7.42092 4.95 7.25449C5.219 7.08805 5.56 7.08805 5.83 7.25449C6.099 7.42092 6.25 7.72343 6.219 8.02791V14.7929Z" fill="white"/>
                </svg>`}
                marginBottom={5}
                width="23"
                height="26"
              />
            ),
        }}
      />
      <Tab.Screen
        name="Ещё"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SvgXml
                xml={`<svg width="23" height="5" viewBox="0 0 23 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.5" cy="2.5" r="2.5" fill="#5F85DB"/>
                <circle cx="11.5" cy="2.5" r="2.5" fill="#5F85DB"/>
                <circle cx="20.5" cy="2.5" r="2.5" fill="#5F85DB"/>
                </svg>
                `}
                marginBottom={5}
                width="23"
                height="26"
              />
            ) : (
              <SvgXml
                xml={`<svg width="23" height="5" viewBox="0 0 23 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.5" cy="2.5" r="2.5" fill="white"/>
                <circle cx="11.5" cy="2.5" r="2.5" fill="white"/>
                <circle cx="20.5" cy="2.5" r="2.5" fill="white"/>
                </svg>`}
                marginBottom={5}
                width="23"
                height="26"
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
