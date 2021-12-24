import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { LaunchScreenSvg } from '../../../assets/icons/SvgIcons';
import { COLORS, SIZES } from '../../../constants/theme';
import { connect, useSelector } from 'react-redux';
import { authMiddleware } from '../../../redux/middlewares';

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
      if (user === null) {
        navigation.navigate('AuthStack');
      } else {
        return await authMiddleware(user).then(userToken => {
          navigation.navigate(userToken ? 'AppStack' : 'AuthStack');
        });
      }
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
