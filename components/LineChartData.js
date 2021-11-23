import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, POSITIONING, SIZES } from '../constants/theme';
import { LineChart } from 'react-native-chart-kit';

export default function LineChartData() {
  const [redDotClicked, setRedDotClicked] = React.useState(false);
  // Style for LineChart
  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    propsForDots: {
      r: '4',
      strokeWidth: '3',
      stroke: '#EB6161',
    },
    decimalPlaces: 0,
    color: (opacity = 0) => `rgba(235, 97, 97)`,
    scrollableDotStrokeColor: 'white',
    labelColor: (opacity = 0) => `rgba(255, 255, 255)`,
  };

  // Data Position for LineChart
  const lineChartDataSet = {
    // labels: [
    //   'Янв',
    //   'Фев',
    //   'Мар',
    //   'Апр',
    //   'Май',
    //   'Июн',
    //   'Июл',
    //   'Авг',
    //   'Сен',
    //   'Окт',
    //   'Ноя',
    //   'Дек',
    // ],
    datasets: [
      {
        data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      },
    ],
  };

  const handleRedDotClick = () => {
    setRedDotClicked(!redDotClicked);
    alert('Red Dot is clicked!');
  };
  const [clickedDot, setClickedDot] = useState(1);

  return (
    <LineChart
      data={lineChartDataSet}
      width={SIZES.width}
      height={140}
      withHorizontalLabels={false}
      verticalLabelRotation={0}
      chartConfig={chartConfig}
      withInnerLines={false}
      withOuterLines={false}
      bezier
      onDataPointClick={handleRedDotClick}
      style={styles.chartContainer}
      getDotColor={(dataPoint, dataPointIndex) => {
        if (dataPointIndex === null) {
          return 'transparent';
        }
        return COLORS.white;
      }}
      renderHorizontalLines={{
        // width of your chart
        width: 20,
        // height of your chart
        height: 20,
        // how many lines to render
        count: 20,
        // top padding from the chart top edge
        paddingTop: 20,
        
      }}
    />
  );
}

const styles = StyleSheet.create({
  chartContainer: {
    position: 'absolute',
    marginVertical: -10,
    left: -10,
    top: -5,
    zIndex: 10,
  },
});

// {/* {!redDotClicked ? (
//   <TouchableOpacity style={styles.redDotDataView}>
//     <Text style={styles.redDotDataViewText}>ANOTHER VIEW</Text>
//   </TouchableOpacity>
// ) : (
//   <View style={styles.redDotDataView}>
//     <Text style={styles.redDotDataViewText}>364 000 123 UZS</Text>
//     <Text style={styles.redText}>10 номеров</Text>
//   </View>
// )} */}
