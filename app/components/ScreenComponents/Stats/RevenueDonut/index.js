import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import FusionCharts from 'react-native-fusioncharts';
import { SIZES } from '../../../../constants';
import { chartDataConfig, libraryPath } from './Config/donutConfig';

const RevenueDonut = () => {
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
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    backgroundColor: '#212831',
    top: -30,
    right: 10,
  },
});

export default RevenueDonut;
