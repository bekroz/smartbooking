import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import FusionCharts from 'react-native-fusioncharts';
import { COLOR_PALETTE, POSITIONING } from '../../../../constants';
import { noDottedTruncator } from '../../../../helpers';

const StaysDonut = ({ staysData }) => {
  const filteredData = staysData?.map(
    ({ source_name, room_nights_percent }) => {
      return {
        label: noDottedTruncator(source_name, 12),
        value: room_nights_percent,
        labelFontColor: '#FFFFFF',
        toolbarButtonColor: '#FFFFFF',
      };
    },
  );

  const defaultDataLabel = filteredData[0]?.label;
  const defaultDataValue = filteredData[0]?.value;

  const chartDataConfig = {
    chart: {
      // caption: 'Split of Revenue by Product Categories',
      // subCaption: 'Last year',
      // numberPrefix: 'UZS',
      numberSuffix: ' UZS',
      defaultCenterLabel: `${defaultDataLabel}: ${defaultDataValue} %`,
      centerLabel: '$label: $value',
      centerLabelColor: '#FFFFFF',
      baseFontColor: '#FFFFFF',
      toolTipBgColor: '#212831',
      toolTipBorderColor: '#212831',
      // labelDistance: 20,
      thousandSeparator: '$value',
      plottooltext: '$value UZS',
      theme: 'fusion',
      plotBorderThickness: 5,
      startingAngle: 90,
      animateClockwise: true,
      enableSlicing: 1,
      bgColor: '#212831',
      doughnutRadius: '80%',
      paletteColors: COLOR_PALETTE,
      borderThickness: 20,
      patternAngle: 120,
      enableSmartLabels: 1,
      pieRadius: 60,
      showLabels: 0,
      showValues: 0,
      decimals: 1,
      showLegend: 0,
      legendPosition: 'right',
      legendItemFontSize: 12,
      legendItemFontColor: '#FFFFFF',
      // chartRightMargin: 60,
      // legendItemFont: 'SF Pro Display',
      // interactiveLegend: 1,
      // legendScrollEnabled: 0,
      loadMessage:
        'https://media2.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif',
      minimiseWrappingInLegend: 0,
      // showPercentInToolTip: 1,
    },
    data: filteredData,
  };

  const libraryPath = Platform.select({
    android: { uri: 'file:///android_asset/fusioncharts.html' },
    ios: require('../../../../../assets/fusioncharts.html'),
  });
  return (
    <View style={styles.container}>
      <FusionCharts
        type="doughnut2d"
        width={150}
        height={178}
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
    top: -30,
    right: 10,
    zIndex: -1,
    ...POSITIONING.center,
  },
});

export default StaysDonut;
