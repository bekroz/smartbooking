import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, POSITIONING, SIZES } from '../../../../constants';

const StatusIndicator = ({ status }) => (
  <View style={styles.container}>
    <Text style={styles.statusText}>{status}</Text>
  </View>
);
export default StatusIndicator;

const styles = StyleSheet.create({
  container: {
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
