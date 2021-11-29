import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants/theme';

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
    alignItems: 'center',
    justifyContent: 'center',
    right: 15,
    backgroundColor: '#2C384E',
    alignContent: 'center',
    marginRight: 10,
  },
  statusConfirmedTextStyle: {
    fontWeight: SIZES.fontWeight1,
    color: COLORS.blue,
    fontSize: 13,
  },
});
