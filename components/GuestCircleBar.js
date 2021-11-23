import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CircularProgress from '../circleanimator';

import { COLORS, SIZES } from '../constants/theme';

export default function GuestCircleBar() {
  const [value, setValue] = useState(0);
  const totalRooms = 1000;
  const occupiedRooms = 750;
  const emptyRooms = totalRooms - occupiedRooms;

  return (
    <TouchableOpacity>
      <CircularProgress
        radius={45}
        value={emptyRooms}
        valuePrefix={emptyRooms}
        fontSize={SIZES.body3}
        maxValue={totalRooms}
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
