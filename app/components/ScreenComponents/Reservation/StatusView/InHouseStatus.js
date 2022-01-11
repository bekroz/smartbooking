import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, POSITIONING, SIZES } from '../../../../constants';

const InHouseStatus = () => (
  <View style={styles.statusInHouseViewStyle}>
    <Text style={styles.statusInHouseTextStyle}>В номере</Text>
  </View>
);

export default InHouseStatus;

const styles = StyleSheet.create({
  statusInHouseViewStyle: {
    height: 21,
    borderRadius: 4,
    width: 81,
    right: -16,
    backgroundColor: '#1E4432',
    ...POSITIONING.center,
  },
  statusInHouseTextStyle: {
    fontWeight: SIZES.fontWeight1,
    color: COLORS.greenProgress,
    fontSize: 13,
  },
});
