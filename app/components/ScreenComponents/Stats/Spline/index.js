import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import FusionCharts from 'react-native-fusioncharts';
import { COLORS, SIZES } from '../../../../constants';
import { getMonthNameShort } from '../../../../helpers';
import { COLUMN_PALETTE } from '../../../../constants/theme';
import { store } from '../../../../redux/store';

const Spline = () => {
  const { annualData } = store.getState().annualReducer;
  console.log('====================================');
  console.log(annualData[0]);
  console.log('====================================');
  const columnData = annualData?.map(monthData => {
    console.log(monthData);
    const { month, revenue } = monthData;
    return {
      label: getMonthNameShort(month),
      value: revenue,
      labelFontColor: '#FFFFFF',
      toolbarButtonColor: '#FFFFFF',
    };
  });

  const defaultDataLabel = columnData[0]?.label;
  const defaultDataValue = columnData[0]?.value;

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
    },

    data: [
      {
        label: 'Mon',
        value: '15123',
      },
      {
        label: 'Tue',
        value: '14233',
      },
      {
        label: 'Wed',
        value: '25507',
      },

      {
        label: 'Thu',
        value: '9110',
      },
      {
        label: 'Fri',
        value: '15529',
      },
      {
        label: 'Sat',
        value: '20803',
      },
      {
        label: 'Sun',
        value: '19202',
      },
    ],
  };

  const libraryPath = Platform.select({
    android: { uri: 'file:///android_asset/fusioncharts.html' },
    ios: require('../../../../../assets/fusioncharts.html'),
  });
  return (
    <View style={styles.container}>
      <FusionCharts
        type="spline"
        width={SIZES.width}
        height={225}
        dataFormat="json"
        dataSource={chartDataConfig}
        libraryPath={libraryPath} // set the libraryPath property
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Spline;
