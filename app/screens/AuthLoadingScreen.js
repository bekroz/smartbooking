import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { LaunchScreenSvg } from '../assets/icons/SvgIcons';
import { COLORS, SIZES } from '../constants/theme';
import { useSelector } from 'react-redux';
import { authMiddleware } from '../redux/middlewares';

const AuthLoadingScreen = ({ navigation }) => {
  const user = useSelector(store => store.authReducer.user);
  console.log('====================================');
  console.log(user);
  console.log('====================================');
  async function splashRefreshTokenHandler() {
    try {
      return await authMiddleware(user).then(userToken =>
        setTimeout(
          () => navigation.navigate(!userToken ? 'App' : 'Auth'),
          1000,
        ),
      );
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    splashRefreshTokenHandler();
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
