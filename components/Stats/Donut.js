import React from 'react';
import { View, Text } from 'react-native';
import Pie from 'react-native-pie';
// Theme
import { COLORS, SIZES } from '../../constants/theme';

export default function Donut() {
  const data = { firstSource: 10, secondSource: 10 };

  return (
    <View style={{ justifyContent: 'center' }}>
      <Pie
        radius={65}
        innerRadius={50}
        sections={[
          {
            percentage: 60,
            color: COLORS.blue,
          },
          {
            percentage: 20,
            color: COLORS.orange,
          },
          {
            percentage: 5,
            color: COLORS.yellow,
          },
          {
            percentage: 5,
            color: COLORS.greenCircle,
          },
          {
            percentage: 5,
            color: COLORS.pinkCircle,
          },
          {
            percentage: 10,
            color: COLORS.coral,
          },
          {
            percentage: 10,
            color: COLORS.grayCirclePart,
          },
        ]}
        strokeCap={'butt'}
      />
      <View
        style={{
          alignItems: 'center',
          position: 'absolute',
          alignSelf: 'center',
        }}>
        <Text style={{ color: COLORS.white, fontWeight: SIZES.fontWeight0 }}>
          от стойки
        </Text>
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.body5,
            fontWeight: SIZES.fontWeight2,
            bottom: -5,
          }}>
          47%
        </Text>
      </View>
    </View>
  );
}
