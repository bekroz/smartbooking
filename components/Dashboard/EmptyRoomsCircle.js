import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
// Theme
import { COLORS, SIZES } from '../../constants/theme';
// Changed NPM Component
import CircularProgress from '../Additionals/circleanimator';

export default function EmptyRoomsCircle({ initialValue, value }) {
  return (
    <TouchableOpacity>
      <CircularProgress
        initialValue={initialValue}
        radius={45}
        value={value}
        valuePrefix={value}
        fontSize={SIZES.body3}
        maxValue={initialValue}
        textColor="#FFF"
        activeStrokeColor={COLORS.purple}
        inActiveStrokeColor={COLORS.grayCirclePart}
        inActiveStrokeWidth={10}
        inActiveStrokeOpacity={1}
        duration={1500}
        clockwise={true}
        textStyle={{ fontWeight: SIZES.fontWeight1, fontSize: SIZES.body2 }}
      />
    </TouchableOpacity>
  );
}
