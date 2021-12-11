import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import PieChart from 'react-native-d3-charts';

export default function Donut() {
  const chartData = [
    {
      value: 61.41,
      startColor: '#7CB5EC',
      endColor: '#7CB5EC',
      label: 'Chrome',
      labelStyle: {},
    },
    {
      value: 11.84,
      startColor: '#434348',
      endColor: '#434348',
      label: 'Internet Explorer',
      labelStyle: {},
    },
    {
      value: 10.85,
      startColor: '#90ED7D',
      endColor: '#90ED7D',
      label: 'Firefox',
      labelStyle: {},
    },
    {
      value: 4.67,
      startColor: '#F7A25D',
      endColor: '#F7A25D',
      label: 'Edge',
      labelStyle: {},
    },
    {
      value: 4.18,
      startColor: '#8085E9',
      endColor: '#8085E9',
      label: 'Safari',
      labelStyle: {},
    },
    {
      value: 7.05,
      startColor: '#F15C80',
      endColor: '#F15C80',
      label: 'Other',
      labelStyle: {},
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <PieChart
        size={{ height: 300, width: 300 }}
        data={chartData}
        title="Browser market shares in January, 2018"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 50,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
