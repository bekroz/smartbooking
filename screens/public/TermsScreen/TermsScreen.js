import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import { COLORS } from '../../../constants/theme';

export default function TermsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LottieView source={require('../../../images/splash.json')} autoPlay />

      <Text style={styles.loaderBottomText}>Setting up dashboard ...</Text>
      <TouchableOpacity
        style={styles.userAgreementBlock}
        onPress={() => navigation.navigate('userAgreementScreen')}>
        <Text style={styles.userAgreementText}>
          Условия пользовательского соглашения
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderBottomText: {
    color: '#F0F0F0',
    top: 150,
  },
  userAgreementBlock: {
    padding: 10,
    top: 280,
  },
  userAgreementText: {
    color: COLORS.blue,
    fontWeight: '600',
    fontSize: 14,
  },
});
