import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import { Header } from 'react-native-elements';

//import components
import ModalWindow from '../../../components/Modal';
import useApi from '../../utils/useApi';

const SignUpScreen = ({ navigation }) => {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const mountedRef = useRef(true);
  const { handleIOSAuthorization } = useApi();
  const signUp = async () => {
    try {
      setLoading(true);
      if (email && password === confirmPassword) {
        await handleIOSAuthorization(username, password);
      }
      setLoading(false);
    } catch (e) {
      alert(e);
      setLoading(false);
      console.log('SignUp: ', e);
    }
  };

  useEffect(() => {
    if (!mountedRef.current) return null;

    return () => {
      mountedRef.current = false;
      signUp;
      setPassword('');
      setEmail('');
      setConfirmPassword('');
    };
  }, []);

  return (
    <View style={styles.container}>
      <Header
        placement="center"
        centerComponent={{ text: 'Sign Up', style: styles.header }}
        leftComponent={{
          icon: 'arrow-back-ios',
          iconStyle: { color: '#FED800' },
          onPress: async () => await navigation.goBack(),
        }}
        containerStyle={{
          backgroundColor: '#262E3A',
          color: '#262E3A',
          position: 'absolute',
          top: 0,
          width: 410,
        }}
      />

      <TextInput
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        style={styles.textInput}
        keyboardAppearance="dark"
        placeholderTextColor="#A4AAB3"
      />
      <TextInput
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        style={styles.textInput}
        secureTextEntry={true}
        keyboardAppearance="dark"
        placeholderTextColor="#A4AAB3"
      />
      <TextInput
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        placeholder="Confirm password"
        style={styles.textInput}
        secureTextEntry={true}
        keyboardAppearance="dark"
        placeholderTextColor="#A4AAB3"
      />

      <>
        <Pressable style={styles.buttonSignUp}>
          <Text style={styles.textButton} onPress={() => signUp()}>
            Sign Up
          </Text>
        </Pressable>

        {loading && <ActivityIndicator color="#fff" size="large" />}

        <Text style={styles.text} onPress={() => navigation.navigate('signIn')}>
          Sign In
        </Text>
      </>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262E3A',
    justifyContent: 'center',
    padding: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: '#A4AAB3',
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    padding: 10,
    borderRadius: 5,
    color: '#A4AAB3',
  },
  buttonSignUp: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    backgroundColor: '#FED800',
    borderColor: 'transparent',
    marginTop: 31,
    marginBottom: 24,
  },
  textButton: {
    fontSize: 18,
    textAlign: 'center',
  },
  text: {
    marginTop: 20,
    color: '#A4AAB3',
    fontSize: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#A4AAB3',
    width: 40,
  },
  header: {
    position: 'absolute',
    top: 0,
    color: '#B6BBBF',
    fontSize: 20,
    borderBottomColor: '#262E3A',
  },
});
