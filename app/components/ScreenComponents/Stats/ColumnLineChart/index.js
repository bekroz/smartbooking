import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import FusionCharts from 'react-native-fusioncharts';
// Theme
import {
  COLORS,
  SIZES,
  COLOR_PALETTE,
  POSITIONING,
} from '../../../../constants';

const ColumnLineChart = ({ data }) => {
  const columnData = data?.map(monthData => {
    const { revenue } = monthData;
    return {
      // label: getMonthNameShort(month),
      value: revenue,
    };
  });
  const lineData = data?.map(anchor => {
    const { reserved } = anchor;
    return {
      value: reserved,
    };
  });

  const months = data?.map(anchor => {
    const { month } = anchor;
    return {
      label: month,
    };
  });

  const chartDataConfig = {
    chart: {
      theme: 'fusion',
      lineThickness: '2',
      divlineAlpha: '100',
      divlineColor: COLORS.darkBackground,
      divlineThickness: '1',
      divLineIsDashed: '1',
      divLineDashLen: '1',
      divLineGapLen: '1',
      showXAxisLine: '1',
      xAxisLineThickness: '1',
      bgColor: COLORS.darkBackground,
      anchorBgColor: COLORS.white,
      anchorBorderColor: COLORS.statsLine,
      anchorBorderThickness: 3,
      toolTipColor: COLORS.white,
      toolTipBgColor: COLORS.grayPlaceholder,
      toolTipBorderColor: COLORS.grayPlaceholder,
      xAxisLineColor: COLORS.darkBackground,
      trendlines: {
        line: {
          color: COLORS.white,
        },
      },
      labelFontColor: COLORS.darkBackground,
      lineColor: COLORS.statsLine,
      baseFontColor: COLORS.darkBackground,
      plotBorderColor: COLORS.red,
      divLineDashed: 1,
      divLineColor: COLORS.white,
      divLineDashLen: 50,
      divLineAlpha: 20,
      divLineThickness: 1,
      numDivLines: 4,
      zeroPlaneThickness: 10,
      scrollColor: COLORS.darkBackground,
      scrollPosition: 'top',
    },

    categories: [
      {
        category: months,
      },
    ],
    dataset: [
      {
        data: columnData,
      },
      {
        renderas: 'spline',
        data: lineData,
      },
    ],
    events: {
      entityClick: function (event, args) {
        alert(args.label + 'clicked');
      },
    },
  };

  const libraryPath = Platform.select({
    android: { uri: 'file:///android_asset/fusioncharts.html' },
    ios: require('../../../../../assets/fusioncharts.html'),
  });
  return (
    <FusionCharts
      type="scrollcombidy2d"
      width={SIZES.width}
      height={225}
      dataFormat="json"
      dataSource={chartDataConfig}
      libraryPath={libraryPath} // set the libraryPath property
      setChartData={chartDataConfig.dataset}
    />
  );
};

const styles = StyleSheet.create({});

export default ColumnLineChart;
