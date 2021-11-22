import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

import { COLORS, SIZES } from '../constants/theme';

export default function GuestCircleBar() {
  const [value, setValue] = useState(0);
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <CircularProgress
        radius={45}
        value={3}
        fontSize={SIZES.body3}
        maxValue={100}
        textColor="#FFF"
        activeStrokeColor={COLORS.grayCirclePart}
        inActiveStrokeColor={COLORS.purple}
        inActiveStrokeWidth={10}
        inActiveStrokeOpacity={1}
        duration={500}
        textStyle={{ fontWeight: SIZES.fontWeight1, fontSize: SIZES.body2 }}
      />
    </View>
  );
}
