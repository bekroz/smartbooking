import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

const YellowLineIndicator = () => {
  return (
    <View style={[styles.lineIndicator, { backgroundColor: COLORS.yellow }]} />
  );
};

const BlueLineIndicator = () => {
  return (
    <View style={[styles.lineIndicator, { backgroundColor: COLORS.blue }]} />
  );
};

const GreenLineIndicator = () => {
  return (
    <View
      style={[styles.lineIndicator, { backgroundColor: COLORS.greenProgress }]}
    />
  );
};

export { YellowLineIndicator, BlueLineIndicator, GreenLineIndicator };

const styles = StyleSheet.create({
  lineIndicator: {
    width: 4,
    height: 142,
    borderRadius: 0,
    borderTopEndRadius: 4,
    borderBottomEndRadius: 4,
    position: 'absolute',
    alignSelf: 'flex-start',
    left: -15,
  },
});
