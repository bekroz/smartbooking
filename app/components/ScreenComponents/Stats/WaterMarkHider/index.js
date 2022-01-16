import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants';

export default function WaterMarkHider({ customStyle }) {
  return <View style={[styles.container, { ...customStyle }]} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 160,
    height: 36,
    backgroundColor: COLORS.grayPlaceholder,
    position: 'absolute',
    bottom: 30,
    zIndex: 1,
    alignSelf: 'flex-start',
    left: -10,
    // backgroundColor: 'red',
  },
});
