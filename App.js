import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ModalPortal } from 'react-native-modals';
// Stack
import AppStack from './app/stack/AppStack';
// App theme
import { DarkTheme } from './constants/theme';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore } from 'redux-persist';
import store from './redux/store/store';

const App = () => {
  const persistor = persistStore(store);

  return (
    <SafeAreaProvider style={DarkTheme}>
      <StatusBar animated={true} barStyle="light-content" />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppStack />
        </PersistGate>
      </Provider>
      <ModalPortal />
    </SafeAreaProvider>
  );
};

export default App;
