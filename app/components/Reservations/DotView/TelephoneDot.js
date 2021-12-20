import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants/theme';

const TelephoneDot = () => {
  return (
    <View style={styles.dotBlock}>
      <View style={[styles.dotStyle, { backgroundColor: COLORS.orange }]} />
      <Text style={{ color: COLORS.white }}>Телефон</Text>
    </View>
  );
};

export default TelephoneDot;

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
