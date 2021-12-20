import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/theme';

const ByUserDot = () => {
  return (
    <View style={styles.dotBlock}>
      <View style={[styles.dotStyle, { backgroundColor: COLORS.blueCircle }]} />
      <Text style={{ color: COLORS.white }}>От стойки</Text>
    </View>
  );
};

export default ByUserDot;

const styles = StyleSheet.create({
  dotBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 50,
    marginRight: 6,
  },
});
