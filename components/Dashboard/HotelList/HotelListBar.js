import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS, POSITIONING, SIZES } from '../../../constants/theme';
import dropdownIcon from '../../../images/dropdown.png';
import { DropDownSvg } from '../../../assets/icons/SvgIcons';

export default function HotelListBar({ onPress, hotelName }) {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.hotelBarContainer}>
        <Text style={styles.hotelBarText}>{hotelName}</Text>
        <View style={{ marginLeft: 4 }}>
          <DropDownSvg />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  hotelBarText: {
    fontWeight: SIZES.fontWeight0,
    fontSize: SIZES.body6,
    color: COLORS.white,
  },
  hotelBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
