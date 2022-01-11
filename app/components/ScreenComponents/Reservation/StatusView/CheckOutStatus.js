import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, POSITIONING, SIZES } from '../../../../constants';
const CheckOutStatus = () => (
  <View style={styles.statusCheckOutViewStyle}>
    <Text style={styles.statusCheckOutTextStyle}>Выехал</Text>
  </View>
);
export default CheckOutStatus;

const styles = StyleSheet.create({
  statusCheckOutViewStyle: {
    height: 21,
    borderRadius: 4,
    width: 112,
    right: 15,
    backgroundColor: '#353B42',
    alignContent: 'center',
    marginRight: 10,
    ...POSITIONING.center,
  },
  statusCheckOutTextStyle: {
    fontWeight: SIZES.fontWeight1,
    color: '#C4C4C4',
    fontSize: 13,
  },
});
