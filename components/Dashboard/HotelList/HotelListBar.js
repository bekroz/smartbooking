import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS, POSITIONING, SIZES } from '../../../constants/theme';
import dropdownIcon from '../../../images/dropdown.png';

export default function HotelListBar() {
  const chosenHotelName = 'Kukaldosh Hotel';
  return (
    <View style={[styles.hotelBarContainer, POSITIONING.center]}>
      <TouchableOpacity onPress={{}} style={styles.dropdownButton}>
        <Text style={styles.hotelBarText}>{chosenHotelName}</Text>
        <Image source={dropdownIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  hotelBarContainer: {
    flexDirection: 'row',
    marginBottom: 26,
  },
  hotelBarText: {
    fontWeight: SIZES.fontWeight1,
    fontSize: SIZES.body6,
    color: COLORS.white,
    padding: SIZES.base,
  },
  dropdownButton: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
