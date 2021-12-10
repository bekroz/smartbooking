import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';
import {
  AppleButton,
  // appleAuth,
} from '@invertase/react-native-apple-authentication';
import { COLORS, POSITIONING, SIZES } from '../../../constants/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useApi from '../../../utils/api/useApi';
import { emailValidator, passwordValidator } from '../../../helpers';
// Icons
import showEye from '../../../assets/icons/showEye.png';
import noShowEye from '../../../assets/icons/noShowEye.png';
// Components
import { AuthContext } from '../../../contexts/AuthContext';

export default function LoginScreen({ navigation }) {
  // const {
  //   authenticated,
  //   setAuthenticated,
  //   userLoggedIn,
  //   setUserLoggedIn,
  //   error,
  //   setError,
  //   hotelID,
  //   setHotelID,
  //   userToken,
  //   setUserToken,
  //   userLogInHandler,
  //   userLogOutHandler,
  // } = useContext(AuthContext);

  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [user, setUser] = useState(null);

  function registerButtonPress() {
    navigation.navigate('NoFoundScreen');
  }

  function resetPasswordButtonPress() {
    navigation.navigate('NoFoundScreen');
  }
  const { handleIOSAuthentication, handleIOSAuthorization } = useApi();

  const handleLogin = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      Alert.alert(
        'Неверные данные',
        'Такого адреса нет или неправильный пароль',
        [
          {
            text: 'Окей',
            onPress: () => console.log('OK button Pressed'),
            style: 'cancel',
          },
        ],
      );
    }
    const userSecret = {
      email: email.value,
      password: password.value,
    };

    await AsyncStorage.setItem('USER', JSON.stringify(userSecret));
    try {
      await handleIOSAuthentication().then(
        handleIOSAuthorization(userSecret).then(userToken => {
          if (userToken) {
            navigation.replace('HomeScreen');
            setUser(userToken);
          } else {
            console.error(error);
          }
        }),
      );
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   user ? handleLogin() : navigation.navigate('Login');
  // }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
      <View style={[styles.titleBlock, POSITIONING.center]}>
        <Text style={styles.titleText}>Добро пожаловать</Text>
        <Text style={styles.loginAccountText}>Зайдите в свой аккаунт</Text>
        <View>
          <Text style={styles.email}>E-mail</Text>
          <View>
            <TextInput
              returnKeyType="next"
              label="E-mail"
              style={styles.placeholder}
              value={email}
              onChangeText={text => setEmail({ value: text, error: '' })}
              autoCapitalize="none"
              autoCompleteType="email"
              textContentType="emailAddress"
              keyboardType="email-address"
              es
            />
          </View>
          <Text style={styles.password}>Password</Text>
          <View style={{ justifyContent: 'center' }}>
            <TextInput
              label="Password"
              secureTextEntry={secureTextEntry}
              style={styles.placeholder}
              value={password}
              onChangeText={text => setPassword({ value: text, error: '' })}
              returnKeyType="done"
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                alignSelf: 'flex-end',
              }}
              onPress={() => setSecureTextEntry(!secureTextEntry)}>
              <Image
                source={secureTextEntry ? noShowEye : showEye}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: COLORS.grayPlaceholderBorder,
                  right: 0,
                  marginRight: 10,
                  top: 2,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={POSITIONING.align}
          onPress={resetPasswordButtonPress}>
          <Text style={styles.forgotPasswordText}>Забыли пароль?</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.socialButtonsBlock, POSITIONING.center]}>
        <TouchableOpacity
          style={[styles.emailSignInButton, POSITIONING.center]}
          onPress={handleLogin}>
          <Text style={styles.loginText}>Войти</Text>
        </TouchableOpacity>
        {/* <AppleButton
          buttonStyle={AppleButton.Style.WHITE}
          buttonType={AppleButton.Type.SIGN_IN}
          style={styles.appleButton}
          onPress={loginButtonPress}
        /> */}
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
    top: -220,
    height: SIZES.blockHeight,
  },
  emailSignInButton: {
    backgroundColor: COLORS.blue,
    padding: 15,
    marginBottom: 0,
    borderRadius: 5,
    width: SIZES.blockWidth,
    height: SIZES.blockHeight,
    top: -50,
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
    fontSize: SIZES.body6,
    fontWeight: SIZES.fontWeight1,
    color: COLORS.white,
    top: -15,
  },
  registerText: {
    color: COLORS.blue,
  },
});
