import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {
  AppleButton,
  // appleAuth,
} from '@invertase/react-native-apple-authentication';
import { COLORS, POSITIONING, SIZES } from '../../constants/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useApi from '../../utils/useApi';

export default function LoginScreen({ navigation }) {
  function registerButtonPress() {
    alert('Register Button is fired');
  }

  function forgotPasswordButtonPress() {
    alert('Forgot Password Button is fired');
  }
  const { handleIOSAuthentication, handleIOSAuthorization } = useApi();

  const [username, setUsername] = useState('test@smartbooking.uz');
  const [password, setPassword] = useState('12345678');

  const handleLogin = async () => {
    const user_secret = {
      username: username,
      password: password,
    };
    await AsyncStorage.setItem('USER', JSON.stringify(user_secret))
      .then(handleIOSAuthentication())
      .then(
        handleIOSAuthorization().then(userToken => {
          if (userToken) {
            navigation.navigate('Home');
          } else {
            alert('USER NOT FOUND!');
          }
        }),
      );
  };

  useEffect(() => {
    handleLogin();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
      <View style={[styles.titleBlock, POSITIONING.center]}>
        <Text style={styles.titleText}>Добро пожаловать</Text>
        <Text style={styles.loginAccountText}>Зайдите в свой аккаунт</Text>
        <View>
          <Text style={styles.email}>E-mail</Text>
          <View>
            <TextInput
              style={styles.placeholder}
              onChange={event => setUsername(event.target.value)}
            />
          </View>
          <Text style={styles.password}>Password</Text>
          <View>
            <TextInput
              secureTextEntry={true}
              style={styles.placeholder}
              onChange={event => setPassword(event.target.value)}
            />
          </View>
        </View>
        <TouchableOpacity
          style={POSITIONING.align}
          onPress={forgotPasswordButtonPress}>
          <Text style={styles.forgotPasswordText}>Забыли пароль?</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.socialButtonsBlock, POSITIONING.center]}>
        <TouchableOpacity
          style={[styles.emailSignInButton, POSITIONING.center]}
          onPress={handleLogin}>
          <Text style={styles.loginText}>Войти</Text>
        </TouchableOpacity>
        <AppleButton
          buttonStyle={AppleButton.Style.WHITE}
          buttonType={AppleButton.Type.SIGN_IN}
          style={styles.appleButton}
          onPress={handleLogin}
        />
        <View style={styles.registerTextBlock}>
          <Text style={styles.registerTextBlock}>Нет аккаунта? </Text>
          <TouchableOpacity onPress={registerButtonPress}>
            <Text style={[styles.registerTextBlock, styles.registerText]}>
              Регистрируйтесь!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleBlock: {
    flexGrow: 2,
    top: -120,
  },
  titleText: {
    color: COLORS.white,
    fontSize: SIZES.mainTitle,
    fontWeight: SIZES.fontWeight3,
    lineHeight: 36,
    width: 299,
    height: 75,
    textAlign: 'center',
  },
  loginAccountText: {
    color: COLORS.white,
    fontSize: SIZES.body5,
    margin: 10,
  },
  email: {
    color: COLORS.grayText,
  },
  password: {
    color: COLORS.grayText,
    marginTop: 10,
    marginBottom: 10,
  },
  placeholder: {
    width: SIZES.blockWidth,
    height: 40,
    borderColor: COLORS.grayPlaceholderBorder,
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5,
    color: COLORS.white,
    backgroundColor: COLORS.grayPlaceholder,
    fontWeight: SIZES.fontWeight1,
    fontSize: SIZES.body5,
  },
  socialButtonsBlock: {
    top: -200,
    height: SIZES.blockHeight,
    position: 'relative',
  },
  emailSignInButton: {
    backgroundColor: COLORS.blue,
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    width: SIZES.blockWidth,
    height: SIZES.blockHeight,
  },
  forgotPasswordText: {
    color: COLORS.blue,
    position: 'absolute',
    top: 25,
  },
  loginText: {
    color: COLORS.white,
    width: 53,
    height: 21,
    fontSize: SIZES.body4,
    fontWeight: SIZES.fontWeight3,
    // fontFamily: 'SF Pro Display',
  },
  appleButton: {
    width: SIZES.blockWidth,
    height: SIZES.blockHeight,
  },
  registerTextBlock: {
    flexDirection: 'row',
    marginTop: 10,
    fontSize: SIZES.body6,
    fontWeight: SIZES.fontWeight1,
    color: COLORS.white,
  },
  registerText: {
    color: COLORS.blue,
  },
});
