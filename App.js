import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { ModalPortal } from 'react-native-modals';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
// Redux store
import { store, persistor } from './app/redux/store';
// Crash tracker
import * as Sentry from '@sentry/react-native';
// Main container
import AppContainer from './app/container/AppContainer';
// Navigator
import navigationService from './app/services/navigationService';
// Crash tracker setup

import Modal from './app/components/Dashboard/Modals/DashboardModal';
import Test from './app/components/ScreenComponents/Stats/RevenueDonut';

Sentry.init({
  dsn: 'https://1329c9b248134401acc8ae1a7a34cc54@o1092790.ingest.sentry.io/6111610',
  integrations: [
    new Sentry.ReactNativeTracing({
      tracingOrigins: ['localhost', 'smartbooking.uz', /^\//],
    }),
  ],
});

const App = () => {
  return (
    <Sentry.TouchEventBoundary>
      <SafeAreaProvider>
        <StatusBar animated={true} barStyle="light-content" />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer
              ref={navRef => navigationService.setTopLevelNavigator(navRef)}
              theme={DarkTheme}>
              <AppContainer />
              {/* <Modal /> */}
              {/* <Test /> */}
            </NavigationContainer>
          </PersistGate>
        </Provider>
        <ModalPortal />
      </SafeAreaProvider>
    </Sentry.TouchEventBoundary>
  );
};

export default Sentry.wrap(App);
