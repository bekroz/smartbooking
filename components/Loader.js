import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import { COLORS } from '../constants/theme';

export default function Loader({ navigation }) {
  return (
    <View style={styles.container}>
      <LottieView source={require('../images/splash.json')} autoPlay />
      <Text style={styles.loaderBottomText}>Magic takes time ...</Text>
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
