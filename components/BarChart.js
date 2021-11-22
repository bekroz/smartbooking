import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { COLORS } from '../constants/theme';

const BarChart = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.darkBackground,
      }}>
      <Text
        style={{
          color: 'white',
        }}>
        BARCHART
      </Text>
    </SafeAreaView>
  );
};

export default BarChart;
