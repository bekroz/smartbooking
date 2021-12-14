import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../../constants/theme';

const CanceledStatus = () => (
  <View style={styles.statusCanceledViewStyle}>
    <Text style={styles.statusCanceledTextStyle}>Отменено</Text>
  </View>
);
export default CanceledStatus;

const styles = StyleSheet.create({
  statusCanceledViewStyle: {
    height: 21,
    borderRadius: 4,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    right: -15,
    backgroundColor: '#47434B',
    alignContent: 'center',
    marginRight: 10,
  },
  statusCanceledTextStyle: {
    fontWeight: SIZES.fontWeight1,
    color: COLORS.coral,
    fontSize: 13,
  },
});
