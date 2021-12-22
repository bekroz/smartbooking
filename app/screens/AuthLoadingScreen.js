import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { LaunchScreenSvg } from '../assets/icons/SvgIcons';
import { COLORS, SIZES } from '../constants/theme';
import { useSelector } from 'react-redux';

const AuthLoadingScreen = ({ navigation }) => {
  const userLoggedIn = useSelector(store => store.authReducer.userLoggedIn);

  bootstrapAsync = () => {
    setTimeout(() => navigation.navigate(!userLoggedIn ? 'App' : 'Auth'), 1000);
  };

  useEffect(() => {
    bootstrapAsync();
  }, []);

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
