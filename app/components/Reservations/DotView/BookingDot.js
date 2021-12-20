import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants/theme';

const BookingDot = () => {
  return (
    <View style={styles.dotBlock}>
      <View
        style={[styles.dotStyle, { backgroundColor: COLORS.greenCircle }]}
      />
      <Text style={{ color: COLORS.white }}>Booking.com</Text>
    </View>
  );
};

export default BookingDot;

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
