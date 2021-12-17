import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, DarkTheme } from 'react-native-safe-area-context';
import { ModalPortal } from 'react-native-modals';
// Stack
import AppStack from './app/stack/AppStack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './app/redux/store';
import { connect } from 'react-redux';
import Loader from './app/components/Loader/Loader';
import TestingScreen from './removables/ReduxExample';

const App = () => {
  return (
    <SafeAreaProvider style={DarkTheme}>
      <StatusBar animated={true} barStyle="light-content" />
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          {/* <AppStack /> */}
          <TestingScreen />
        </PersistGate>
      </Provider>
      <ModalPortal />
    </SafeAreaProvider>
  );
};

// store.subscribe(() => {
//   console.log('STORE UPDATED ===>>> ====================================');
//   console.log(store.getState());
//   console.log('====================================');
// });
// store.dispatch({
//   type: 'AUTH_APP_TOKEN_GET',
//   payload: 'dsfasdsa'
// });

  console.log('====================================');
  console.log('PERSISTOR  ===>>> ');
  console.log(persistor);
  console.log('====================================');

export default App;
