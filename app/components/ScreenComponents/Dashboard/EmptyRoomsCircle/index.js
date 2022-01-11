import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
// Theme
import { COLORS, SIZES } from '../../../../constants';
// Changed NPM Component
import CircularProgress from '../../../Additionals/circleanimator';

export default function EmptyRoomsCircle({ loading, maxValue, value }) {
  let valuePrefix = value ? value.toString() : '0';

  return (
    <TouchableOpacity>
      <CircularProgress
        initialValue={maxValue}
        radius={45}
        value={value}
        valuePrefix={valuePrefix}
        fontSize={SIZES.body3}
        maxValue={maxValue}
        textColor="#FFF"
        activeStrokeColor={COLORS.purple}
        inActiveStrokeColor={COLORS.grayCirclePart}
        inActiveStrokeWidth={10}
        inActiveStrokeOpacity={1}
        duration={1500}
        clockwise={true}
        textStyle={{ fontWeight: SIZES.fontWeight1, fontSize: SIZES.body2 }}
        delay={5000}
      />
    </TouchableOpacity>
  );
}
