import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import FusionCharts from 'react-native-fusioncharts';
import { getMonthNameShort } from '../../../../helpers';
import { COLORS, SIZES } from '../../../../constants';
import { COLOR_PALETTE } from '../../../../constants';

const BarChart = ({ channelsData }) => {
  const barData = channelsData?.map(monthData => {
    const { source_name, revenue } = monthData;

    return {
      // label: getMonthNameShort(month),
      // displayValue: "Year's best",
      value: revenue,
      displayValue: `${revenue} UZS`,
      // {numberWithSpaces(channel.average_revenue)} {channel.source_name}
    };
  });

  // {
  //   channelsData?.map((channel, index) => (
  //     <>
  //       <View style={styles.dotBlock} key={index}>
  //         {channel.source_name === 'От стойки' && <LineView lineWidth={100} />}

  //         <Text style={{ color: COLORS.white }}>
  //           {numberWithSpaces(channel.average_revenue)} {channel.source_name}
  //         </Text>
  //       </View>
  //     </>
  //   ));
  // }

  const chartDataConfig = {
    chart: {
      theme: 'fusion',
      palettecolors: COLOR_PALETTE,
      toolTipColor: COLORS.white,
      toolTipBgColor: COLORS.grayPlaceholder,
      toolTipBorderColor: COLORS.grayPlaceholder,
      showLabels: 0,
      divline: 0,
      showLimits: 0,
      plotSpacePercent: '55',
      showValues: '1',
      bgColor: COLORS.grayPlaceholder,
      bgAlpha: 100,
      showValues: '1',
      numberSuffix: ' UZS',
      placeValuesInside: 0,
      // valueFont: 'SF Pro Display',
      valueFontColor: COLORS.white,
      valueFontSize: 12,
      valueFontBold: 0,
      valuePadding: 5,
      showDivLineValues: 0,
      numDivLines: 0,
      canvasBorderThickness: '1',
      showCanvasBorder: '1',
      canvasBorderColor: COLORS.grayPlaceholder,
      plotRadius: 25,
      plotHoverEffect: 0,
      // maxPlotHeightForValue: 10,
    },

    data: barData,
  };

  const libraryPath = Platform.select({
    android: { uri: 'file:///android_asset/fusioncharts.html' },
    ios: require('../../../../../assets/fusioncharts.html'),
  });
  return (
    <View style={styles.container}>
      <FusionCharts
        type="bar2d"
        width={'300'}
        height={230}
        dataFormat="json"
        dataSource={chartDataConfig}
        libraryPath={libraryPath} // set the libraryPath property
        setChartData={chartDataConfig.dataset}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    right: 15,
  },
});

export default BarChart;
