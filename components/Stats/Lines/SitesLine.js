import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/theme';

const SitesLine = ({ lineWidth }) => {
  return <View style={[styles.lineStyle, { width: lineWidth }]} />;
};

export default SitesLine;

const styles = StyleSheet.create({
  lineStyle: {
    maxWidth: 250,
    height: 10,
    borderRadius: 50,
    marginRight: 6,
    backgroundColor: COLORS.yellow,
  },
});
