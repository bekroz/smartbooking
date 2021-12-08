import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from './AuthContext';
// import { showWarning } from '../../components/toast';
// import { validateEmail } from '../../utils/utilsFunctions';
// import { InputEmail } from '../../components/inputEmail';
// import { InputPassword } from '../../components/inputPassword';
// import OverlayCompanies from '../../components/overlayCompanies/index';

import axios from '../../services/axios';

function LoginScreen({ navigation }) {
  const {
    splash,
    setSplash,
    authenticated,
    setAuthenticated,
    userLoggedIn,
    setUserLoggedIn,
    error,
    setError,
    hotelID,
    setHotelID,
    userToken,
    setUserToken,
    userLogInHandler,
    userLogOutHandler,
  } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userSecret, setUserSecret] = useState({
    email: email,
    password: password,
  });
  const [inputEmailErrorMessage, setInputEmailErrorMessage] = useState('');
  const [inputEmailErr, setInputEmailErr] = useState(false);

  useEffect(() => {
    if (error) {
      showWarning('Server error, please contact support!');
    }
  }, [error]);

  useEffect(() => {
    const handleLoginCompany = async userId => {
      await axios.get(`user/${userId}`).then(async res => {
        console.log(res.data.companies);
        if (res.data.companies.length > 1) {
          setOverlayVisible(true);
        } else {
          setType(1);
          setLogged(true);
          setCompanyId(res.data.companies[0].companyId);
        }
      });
    };
  }, [authenticated, navigation, setType, setLogged, setCompanyId]);

  //   useEffect(() => {
  //     if (!validateEmail(email) && email !== '') {
  //       setInputEmailErrorMessage('Email inválido');
  //     } else {
  //       setInputEmailErrorMessage('');
  //     }
  //   }, [email]);

  const handleLogin = () => {
    const isOk = verifyFields();

    if (isOk) {
      Keyboard.dismiss();
      userLogInHandler(userSecret)
    }
  };

  const verifyFields = () => {
    if (email === '' || password === '') {
      showWarning('Verification failed');
      return false;
    }
    return true;
  };

  return (
    <BaseLayout title="iValet">
      <InputEmail
        onChange={text => setUsername(text)}
        value={username}
        hasErrors={err => setInputEmailErr(err)}
      />
      <InputPassword
        onChange={text => setPassword(text)}
        value={password}
        showPasswordSize={false}
      />
      <Button
        containerStyle={styles.button}
        title="Login"
        onPress={() => handleLogin()}
        loading={loading}
        disabled={checkEnabledButton()}
        raised
      />
      <View style={styles.infoContainer}>
        <TouchableWithoutFeedback onPress={() => goToForgotPassword()}>
          <Text style={styles.txtForgotPassword}>Esqueci a senha</Text>
        </TouchableWithoutFeedback>
        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.txtLogin}>Não possui login?</Text>
          <TouchableWithoutFeedback onPress={() => goToCadastro()}>
            <Text style={styles.txtUnderline}>Cadastre-se</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <OverlayCompanies
        visible={overlayVisible}
        onPress={handleSelectedCompany}
        onClose={() => closeOverlay()}
      />
    </BaseLayout>
  );
}

const styles = StyleSheet.create({
  forgotPasswordContainer: {
    paddingTop: 16,
    flexDirection: 'row',
  },
  infoContainer: {
    alignItems: 'center',
  },
  txtForgotPassword: {
    textDecorationLine: 'underline',
    paddingTop: 10,
    fontSize: 16,
  },
  txtUnderline: {
    textDecorationLine: 'underline',
    paddingLeft: 2,
    fontSize: 16,
  },
  txtLogin: {
    fontSize: 16,
  },
  button: {
    alignSelf: 'center',
    width: '50%',
  },
});

export default LoginScreen;
