import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import { COLORS } from '../../constants/theme';
import loader from '../../assets/icons/splash.json';

export default function Loader() {
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderBottomText: {
    color: '#F0F0F0',
    top: 150,
  },
});
