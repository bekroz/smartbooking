import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  SafeAreaView,
  ActivityIndicator,
  Alert,
} from 'react-native';
// Redux
import { connect, useDispatch } from 'react-redux';
// Theme
import { COLORS, POSITIONING, SIZES } from '../../../constants';
// Icons
import {
  ShowPasswordSvg,
  HidePasswordSvg,
} from '../../../assets/icons/SvgIcons';
// Helpers
import { emailValidator, passwordValidator } from '../../../helpers';
import {
  appTokenMiddleware,
  loginUserMiddleware,
} from '../../../redux/middlewares';

const LoginScreen = ({ navigation, userLoggedIn }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const [loginRequest, setLoginRequest] = useState(false);

  function registerButtonPress() {
    navigation.navigate('NoFoundScreen');
  }
  function resetPasswordButtonPress() {
    navigation.navigate('NoFoundScreen');
  }

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
            style: 'cancel',
          },
        ],
      );
    }
    const user = {
      username: email.value,
      password: password.value,
    };
    setLoginRequest(true);
    try {
      return await loginUserMiddleware(user).then(userToken => {
        if (userToken && userLoggedIn) {
          navigation.replace('TabNavigator');
        } else {
          // Alert.alert(
          //   'Неверные данные',
          //   'Такого адреса нет или неправильный пароль',
          //   [
          //     {
          //       text: 'Окей',
          //       style: 'cancel',
          //     },
          //   ],
          // );
          setLoginRequest(false);
        }
      });
    } catch (error) {
      setLoginRequest(false);
      console.error(error);
    }
  };

  useEffect(() => {
    appTokenMiddleware();
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
              returnKeyType="next"
              label="E-mail"
              style={styles.placeholder}
              value={email.value}
              onChangeText={text => setEmail({ value: text, error: '' })}
              autoCapitalize="none"
              autoCompleteType="email"
              textContentType="emailAddress"
              keyboardType="email-address"
            />
          </View>
          <Text style={styles.password}>Пароль</Text>
          <View style={{ ...POSITIONING.justify }}>
            <TextInput
              label="Пароль"
              secureTextEntry={secureTextEntry}
              style={styles.placeholder}
              value={password.value}
              onChangeText={text => setPassword({ value: text, error: '' })}
              returnKeyType="done"
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                alignSelf: 'flex-end',
                right: 10,
                top: 8,
              }}
              onPress={() => setSecureTextEntry(!secureTextEntry)}>
              {secureTextEntry ? <HidePasswordSvg /> : <ShowPasswordSvg />}
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
          {loginRequest ? (
            <ActivityIndicator
              animating={true}
              color={COLORS.white}
              marginTop={0}
            />
          ) : (
            <Text style={styles.loginText}>Войти</Text>
          )}
        </TouchableOpacity>
        <View style={styles.registerTextBlock}>
          <Text style={styles.registerTextBlock}>Нет аккаунта? </Text>
          <TouchableOpacity
            onPress={registerButtonPress}
            style={styles.registerTextBlock}>
            <Text style={styles.registerText}>Регистрируйтесь!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

function mapStateToProps({ authReducer }) {
  const { loading, appToken, user, userToken, userLoggedIn, error } =
    authReducer;
  return {
    loading,
    appToken,
    user,
    userToken,
    userLoggedIn,
    error,
  };
}

export default connect(mapStateToProps)(LoginScreen);

const styles = StyleSheet.create({
  titleBlock: {
    flexGrow: 1,
    top: -180,
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
    marginBottom: 24,
  },
  email: {
    color: '#939393',
    marginBottom: 4,
    marginLeft: 10,
  },
  password: {
    color: '#939393',
    marginBottom: 4,
    marginLeft: 5,
  },
  placeholder: {
    width: SIZES.blockWidth,
    height: 40,
    borderColor: '#35373A',
    borderWidth: 0.5,
    borderRadius: 6,
    paddingLeft: 10,
    paddingRight: 10,
    color: COLORS.white,
    backgroundColor: COLORS.grayPlaceholder,
    fontWeight: SIZES.fontWeight1,
    fontSize: SIZES.body5,
    marginBottom: 16,
  },
  socialButtonsBlock: {
    top: -280,
    height: SIZES.blockHeight,
  },
  emailSignInButton: {
    backgroundColor: COLORS.blue,
    padding: 15,

    borderRadius: 6,
    width: SIZES.blockWidth,
    height: SIZES.blockHeight,
    top: -55,
  },
  forgotPasswordText: {
    color: COLORS.blue,
    position: 'absolute',
    fontSize: 14,
    marginBottom: 36,
    // fontFamily: 'SF Pro Display',
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
    top: -20,
  },
  registerText: {
    color: COLORS.blue,
    fontWeight: SIZES.fontWeight2,
  },
});
