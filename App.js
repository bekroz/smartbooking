import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ModalPortal } from 'react-native-modals';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
// Redux setup
import { store, persistor } from './app/redux/store';
// Crash tracker
import * as Sentry from '@sentry/react-native';
// Main container
import AppContainer from './app/navigator';
// Navigator
import navigationService from './app/services/navigationService';
import Remove from './Remove';

// Crash tracker setup
Sentry.init({
  dsn: 'https://1329c9b248134401acc8ae1a7a34cc54@o1092790.ingest.sentry.io/6111610',
});

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar animated={true} barStyle="light-content" />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer
            ref={navigatorRef => {
              navigationService.setTopLevelNavigator(navigatorRef);
            }}
            theme={DarkTheme}>
            <AppContainer />
          </NavigationContainer>
        </PersistGate>
      </Provider>
      <ModalPortal />
    </SafeAreaProvider>
  );
};

export default App;
