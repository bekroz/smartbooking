import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { COLORS } from '../constants/theme';
import { VictoryChart, VictoryGroup, VictoryBar } from 'victory-native';

export default function ArcCircle() {
  const data = {
    revenue: [
      { x: 'January', y: 50 },
      { x: 'Feb', y: 50 },
      { x: 'January', y: 50 },
    ],
  };
  return (
    <VictoryChart>
      <VictoryGroup offset={10}>
        {/* <VictoryBar data={data.revenue} /> */}
        <VictoryBar
          style={{
            data: {
              fill: COLORS.blue,
            },
          }}
        />
      </VictoryGroup>
    </VictoryChart>
  );
}

/* <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}></SafeAreaView></SafeAreaView> */
