import React from 'react';
import { View } from 'react-native';
import { MultiArcCircle } from 'react-native-circles';
import { VictoryBar } from 'victory-native';
import Pie from 'react-native-pie';
import { COLORS } from '../constants/theme';
export default class CircleExample extends React.Component {
  render() {
    const data = { firstSource: 10, secondSource: 10 };
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Pie
          radius={60}
          innerRadius={45}
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
      </View>
    );
  }
}
