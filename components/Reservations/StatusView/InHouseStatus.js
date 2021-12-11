import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants/theme';

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
    alignItems: 'center',
    justifyContent: 'center',
    right: -16,
    backgroundColor: '#1E4432',
  },
  statusInHouseTextStyle: {
    fontWeight: SIZES.fontWeight1,
    color: COLORS.greenProgress,
    fontSize: 13,
  },
});
