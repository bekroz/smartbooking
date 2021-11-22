import React from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';
import Pie from 'react-native-pie';
// import DonutChart from 'react-d3-donut';

export default function CandleStick() {
  const data = [
    {
      count: 20,
      color: 'red',
      name: 'My name',
    },
    {
      count: 30,
      color: 'green',
      name: 'yeys',
    },
    {
      count: 20,
      color: 'orange',
      name: 'yeys',
    },
  ];
  return (
    <View style={styles.container}>
      {/* <DonutChart
        innerRadius={90}
        outerRadius={100}
        transition={true}
        svgClass="example1"
        pieClass="pie1"
        displayTooltip={true}
        strokeWidth={3}
        data={data}
      /> */}
    </View>
  );
}
