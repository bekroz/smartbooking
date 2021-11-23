import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { COLORS } from '../constants/theme';
import { VictoryChart, VictoryGroup, VictoryBar } from 'victory-native';

export default function ColumnChart() {
  const data = {
    revenue: [
      { x: 'January', y: 20 },
      { x: 'Feb', y: 30 },
      { x: 'March', y: 40 },
      { x: 'January', y: 10 },
    ],
  };
  return (
    <VictoryChart>
      <VictoryGroup offset={20}>
        {/* <VictoryBar data={data.revenue} /> */}
        <VictoryBar
          style={{
            data: {
              fill: COLORS.blue,
            },
          }}
          data={data.revenue}
        />
      </VictoryGroup>
    </VictoryChart>
  );
}

/* <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}></SafeAreaView></SafeAreaView> */
