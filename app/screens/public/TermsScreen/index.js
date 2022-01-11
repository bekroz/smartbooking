import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
// Theme
import { COLORS, POSITIONING, SIZES } from '../../../constants';

export default function TermsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../../assets/icons/splash.json')}
        autoPlay
      />
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
    ...POSITIONING.center,
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
    fontWeight: SIZES.fontWeight2,
    fontSize: 14,
  },
});
