import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import FusionCharts from 'react-native-fusioncharts';
import { SIZES } from './app/constants';

const FusionDonut = () => {
  const dataSource = {
    chart: {
      caption: 'Split of Revenue by Product Categories',
      subCaption: 'Last year',
      numberPrefix: '$',
      defaultCenterLabel: 'Total revenue: $64.08K',
      centerLabel: 'Revenue from $label: $value',
      decimals: '0',
      theme: 'fusion',
      plotBorderThickness: 5,
      startingAngle: 90,
      animateClockwise: true,
      enableSlicing: 0,
      bgColor: '#212831',
    },
    data: [
      {
        label: 'Household',
        value: '4910',
      },

      {
        label: 'Apparels',
        value: '14633',
      },
      {
        label: 'Electronics',
        value: '10507',
      },
      {
        label: 'Food',
        value: '28504',
      },
    ],
  };

  const libraryPath = Platform.select({
    // Specify fusioncharts.html file location
    android: { uri: 'file:///android_asset/fusioncharts.html' },
    ios: require('./assets/fusioncharts.html'),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>A Column 2D Chart</Text>
      <View style={styles.chartContainer}>
        <FusionCharts
          type="doughnut2d"
          width="100%"
          height="100%"
          dataFormat="json"
          dataSource={dataSource}
          libraryPath={libraryPath} // set the libraryPath property
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10,
  },
  chartContainer: {
    height: 400,
    width: SIZES.width - 30,
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default FusionDonut;
