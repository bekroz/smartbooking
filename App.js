import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ModalPortal } from 'react-native-modals';
// Stack
import AppStack from './app/stack/AppStack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './app/redux/store';
import AppContainer from './app/navigator';
import * as Sentry from '@sentry/react-native';
import AuthLoadingScreen from './app/screens/AuthLoadingScreen';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import navigationService from './app/services/navigationService';

Sentry.init({
  dsn: 'https://1329c9b248134401acc8ae1a7a34cc54@o1092790.ingest.sentry.io/6111610',
});

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar animated={true} barStyle="light-content" />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer ref={navigationRef} theme={DarkTheme}>
            <AppContainers
              ref={navigatorRef => {
                navigationService.setTopLevelNavigator(navigatorRef);
              }}
            />
          </NavigationContainer>
        </PersistGate>
      </Provider>
      <ModalPortal />
    </SafeAreaProvider>
  );
};

export default App;
