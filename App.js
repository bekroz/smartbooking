import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ModalPortal } from 'react-native-modals';
import { Provider, connect } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
// Redux setup
import { store, persistor } from './app/redux/store';
// Crash tracker
import * as Sentry from '@sentry/react-native';
// Main container
import AppContainer from './app/container/AppContainer';
// Navigator
import navigationService from './app/services/navigationService';
import ModalBox from './app/components/Dashboard/Modals/DashboardModal';
// Crash tracker setup
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
              ref={navigatorRef =>
                navigationService.setTopLevelNavigator(navigatorRef)
              }
              theme={DarkTheme}>
              <AppContainer />
              {/* <ModalBox /> */}
            </NavigationContainer>
          </PersistGate>
        </Provider>
        <ModalPortal />
      </SafeAreaProvider>
    </Sentry.TouchEventBoundary>
  );
};

export default Sentry.wrap(App);
