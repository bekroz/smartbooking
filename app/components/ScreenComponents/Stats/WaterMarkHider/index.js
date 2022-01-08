import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants';

export default function WaterMarkHider() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 150,
    height: 36,
    backgroundColor: COLORS.grayPlaceholder,
    position: 'absolute',
    bottom: 30,
    zIndex: 1,
    alignSelf: 'flex-start',
    backgroundColor: 'red',
    opacity: 0.5,
    left: 0,
  },
});
