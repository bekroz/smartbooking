import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CircularProgress from 'react-native-circular-progress-indicator';
import { COLORS, SIZES } from '../../constants/theme';

export default function PercentageCircle({ currentPercentage = 0 }) {
  return (
    <TouchableOpacity>
      <CircularProgress
        radius={45}
        value={currentPercentage}
        fontSize={SIZES.body3}
        maxValue={100}
        valueSuffix={'%'}
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
