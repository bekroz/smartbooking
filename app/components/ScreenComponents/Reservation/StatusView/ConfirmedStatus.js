import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, POSITIONING, SIZES } from '../../../../constants';

const ConfirmedStatus = () => (
  <View style={styles.statusConfirmedViewStyle}>
    <Text style={styles.statusConfirmedTextStyle}>Подтверждено</Text>
  </View>
);
export default ConfirmedStatus;

const styles = StyleSheet.create({
  statusConfirmedViewStyle: {
    height: 21,
    borderRadius: 4,
    width: 112,
    right: 15,
    backgroundColor: '#2C384E',
    alignContent: 'center',
    marginRight: 30,
    ...POSITIONING.center,
  },
  statusConfirmedTextStyle: {
    fontWeight: SIZES.fontWeight1,
    color: COLORS.blue,
    fontSize: 13,
  },
});
