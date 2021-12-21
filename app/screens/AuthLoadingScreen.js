import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { store } from '../redux/store';
import { LaunchScreenSvg } from '../assets/icons/SvgIcons';
import { COLORS, SIZES } from '../constants/theme';
// import navigationService from '../services/navigationService';

const AuthLoadingScreen = ({ navigation }) => {
  console.log('AuthLoadingScreen');
  console.log(navigation);
  useEffect(() => {
    bootstrapAsync();
  }, []);

  bootstrapAsync = async () => {
    const { userLoggedIn } = store.getState().authReducer;
    console.log('STATE');
    console.log(userLoggedIn);
    setTimeout(
      () => navigation.navigate(userLoggedIn ? 'HomeScreen' : 'LoginScreen'),
      1000,
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <LaunchScreenSvg />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SIZES.width,
    height: SIZES.height,
    backgroundColor: COLORS.darkBackground,
  },
});

export default AuthLoadingScreen;
