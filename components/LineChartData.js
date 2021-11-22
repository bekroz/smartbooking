import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, POSITIONING, SIZES } from '../constants/theme';
import { LineChart } from 'react-native-chart-kit';

const LineChartData = () => {
  const [redDotClicked, setRedDotClicked] = React.useState(false);
  // Style for LineChart
  const chartConfig = {
    propsForDots: {
      r: '5',
      strokeWidth: '3',
      stroke: `white`,
    },
    backgroundColor: 'white',
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 0) => `rgba(235, 97, 97)`,
    scrollableDotStrokeColor: 'white',
    labelColor: (opacity = 0) => `rgba(255, 255, 255)`,
  };

  // Data Position for LineChart
  const lineChartDataSet = {
    labels: [
      'Янв',
      'Фев',
      'Мар',
      'Апр',
      'Май',
      'Июн',
      'Июл',
      'Авг',
      'Сен',
      'Окт',
      'Ноя',
      'Дек',
    ],
    datasets: [
      {
        data: [
          Math.random() * 300,
          Math.random() * 300,
          Math.random() * 300,
          Math.random() * 300,
          Math.random() * 300,
          Math.random() * 300,
        ],
      },
    ],
  };

  const handleRedDotClick = () => {
    setRedDotClicked(!redDotClicked);
  };

  return (
    <View style={POSITIONING.center}>
      <LineChart
        data={lineChartDataSet}
        width={SIZES.width}
        height={180}
        withHorizontalLabels={false}
        verticalLabelRotation={0}
        chartConfig={chartConfig}
        withInnerLines={false}
        withOuterLines={false}
        bezier
        onDataPointClick={handleRedDotClick}
      />
      {/* {!redDotClicked ? (
          <TouchableOpacity style={styles.redDotDataView}>
            <Text style={styles.redDotDataViewText}>ANOTHER VIEW</Text>
          </TouchableOpacity>
        ) : ( */}

      <TouchableOpacity style={styles.redDotDataView}>
        <Text style={styles.redDotDataViewText}>364 000 123 UZS</Text>
        <Text style={styles.redText}>10 номеров</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LineChartData;

const styles = StyleSheet.create({
  redDotDataView: {
    backgroundColor: COLORS.white,
    width: 115,
    right: 10,
    height: 45,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212831',
    position: 'absolute',
    top: 0,
  },
  redDotDataViewText: {
    color: COLORS.blue,
    fontSize: 12,
    fontWeight: '500',
  },
  redText: {
    fontSize: 12,
    color: '#EB6161',
    top: 3,
  },
});
