import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import FusionCharts from 'react-native-fusioncharts';
import { COLORS, SIZES } from '../../../../constants';
import { getMonthNameShort } from '../../../../helpers';
import { COLUMN_PALETTE } from '../../../../constants/theme';
import { store } from '../../../../redux/store';

const Columns = () => {
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
      numberSuffix: ' UZS',
      defaultCenterLabel: `${defaultDataLabel}: ${defaultDataValue}`,
      centerLabel: '$label: $value',
      centerLabelColor: '#FFFFFF',
      baseFontColor: '#FFFFFF',
      toolTipBgColor: '#212831',
      toolTipBorderColor: '#212831',
      // labelDistance: 20,
      thousandSeparator: '$value',
      slantLabels: 1,
      plottooltext: '$value UZS',
      theme: 'fusion',
      plotBorderThickness: 5,
      startingAngle: 90,
      // animateClockwise: true,
      bgColor: '#212831',

      paletteColors: COLUMN_PALETTE,
      decimals: 1,
      showDivLineValues: 0,
      showLimits: 0,
      numDivLines: 2,
      divLineDashed: 1,
      // zeroPlaneColor: '#FFFFFF',
      alternateHGridAlpha: 1,
      showZeroPlaneValue: 1,
      divLineColor: COLORS.grayText,
      divLineAlpha: 50,
      divLineDashLen: 2.5,
      divLineDashGap: 20,
      maxColWidth: 17,
      dataPlotClick: {
        function(e) {
          alert('hi');
        },
      },
      // crossLineColor: COLORS.red,
    },
    data: columnData,
  };

  const libraryPath = Platform.select({
    android: { uri: 'file:///android_asset/fusioncharts.html' },
    ios: require('../../../../../assets/fusioncharts.html'),
  });
  return (
    <View style={styles.container}>
      <FusionCharts
        type="column2d"
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

export default Columns;
