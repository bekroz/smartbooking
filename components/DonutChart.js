import React from 'react';
import { View, Text } from 'react-native';
import Chart from 'react-apexcharts';

const DonutChart = () => {
  const data = {
    options: {},
    series: [44, 55, 41, 17, 15],
    labels: ['A', 'B', 'C', 'D', 'E'],
  };
  return (
    <View>
      <Chart
        options={data.options}
        series={data.series}
        type="donut"
        width="380"
      />
    </View>
  );
};

export default DonutChart;
