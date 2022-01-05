import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Picker from 'react-native-picker-horizontal';
import { COLORS, SIZES } from '../../constants/theme';

const CalendarArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const dayWidth = 50;

export default function DayPick() {
  const [selected, setSelected] = useState(7);
  return (
    <View>
      <Picker
        initialScrollIndex={selected}
        data={CalendarArray}
        renderItem={renderItem}
        itemWidth={dayWidth}
        initialIndex={selected}
        onChange={index => setSelected(index)}
        mark={false}
      />
    </View>
  );
}

const renderItem = (item, index) => (
  <TouchableOpacity>
    <Text
      style={{
        width: dayWidth,
        textAlign: 'center',
        color: COLORS.blue,
        fontWeight: SIZES.fontWeight1,
        fontSize: 16,
      }}>
      {item}
    </Text>
  </TouchableOpacity>
);
