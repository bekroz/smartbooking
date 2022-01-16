import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { COLORS, POSITIONING } from '../../../constants';
import loader from '../../../assets/icons/splash.json';

export default function SplashLoader() {
  return (
    <View style={styles.container}>
      <LottieView source={loader} autoPlay />
      <Text style={styles.loaderBottomText}>Чудеса требуют времени ...</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blackBackground,
    ...POSITIONING.center,
  },
  loaderBottomText: {
    color: '#F0F0F0',
    top: 150,
  },
});
