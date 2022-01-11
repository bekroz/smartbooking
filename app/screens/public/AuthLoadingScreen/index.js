import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { LaunchScreenSvg } from '../../../assets/icons/SvgIcons';
import { COLORS, SIZES } from '../../../constants';
import { connect, useSelector } from 'react-redux';
import {
  authMiddleware,
  loginUserMiddleware,
} from '../../../redux/middlewares';
import { store } from '../../../redux/store';

const AuthLoadingScreen = ({
  navigation,
  loading,
  userLoggedIn,
  user,
  appToken,
  error,
}) => {
  async function splashRefreshTokenHandler() {
    try {
      loginUserMiddleware(user).then(userToken => {
        if (userToken && userLoggedIn) {
          navigation.navigate('AppStack');
        } else {
          navigation.navigate('AuthStack');
        }
      });
    } catch (err) {
      console.error(err);
      alert('Server error. Please, try again later');
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

function mapStateToProps({ authReducer }) {
  const { loading, user, userLoggedIn, appToken, userToken, error } =
    authReducer;
  return {
    loading,
    user,
    userLoggedIn,
    appToken,
    userToken,
    error,
  };
}
export default connect(mapStateToProps)(AuthLoadingScreen);
