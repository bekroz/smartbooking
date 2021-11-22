import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import styled from 'styled-components/native';
import { SIZES } from '../constants/theme';

export default function CircleBar() {
  const [value, setValue] = useState(0);
  return (
    <View
      style={{
        zIndex: -1,
      }}>
      <CircularProgress
        radius={45}
        value={7}
        fontSize={SIZES.body3}
        maxValue={100}
        valueSuffix={''}
        textColor="#FFF"
        activeStrokeColor={'#740DF7'}
        inActiveStrokeColor={'#464545'}
        inActiveStrokeWidth={10}
        inActiveStrokeOpacity={1}
        duration={3000}
        clockwise={true}
        textStyle={{ fontWeight: SIZES.fontWeight2 }}
      />
    </View>
  );
}
