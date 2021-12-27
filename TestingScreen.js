import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert } from 'react-native';
import ReactNativeFusionCharts from 'react-native-fusioncharts';

export default class ChartRunTime extends Component {
  constructor(props) {
    super(props);
    // Create a property(e.g: apiCaller) which will get attached to a function
    // where you can pass Chart API methods you want to run.
    this.apiCaller = null;
    const chartConfig = {
      type: 'column2d',
      width: '100%',
      height: '100%',
      dataFormat: 'json',
      dataSource: {
        chart: {
          caption: 'Recommended Portfolio Split',
          subCaption: 'For a net-worth of $1M',
          showValues: '1',
          showPercentInTooltip: '0',
          numberPrefix: '$',
          enableMultiSlicing: '1',
          theme: 'fusion',
          exportEnabled: 1,
        },
        data: [
          {
            label: 'Equity',
            value: '300000',
          },
          {
            label: 'Debt',
            value: '230000',
          },
          {
            label: 'Bullion',
            value: '180000',
          },
          {
            label: 'Real-estate',
            value: '270000',
          },
          {
            label: 'Insurance',
            value: '20000',
          },
        ],
      },
    };

    this.state = {
      chartConfig,
      chartType: '',
    };
  }

  changeType(type) {
    this.setState({ chartType: type }, () => {
      // Chart instance is available here.
      // Passing js code to run chart api method.
      this.apiCaller(`chartType('${type}')`); // This method accepts js code in string.
    });
  }

  // Bind the argument from onInitialized with the property you created in your constructor
  bindApiCaller(caller) {
    // Now this.apiCaller will be a function where you can pass js code for the WebView
    // to access the chart Object. See the method changeType.
    this.apiCaller = caller;
    if (this.state.chartType === '')
      this.setState({ chartType: this.state.type });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Change chart type at runtime</Text>
        <View style={styles.chartContainer}>
          <ReactNativeFusionCharts
            chartConfig={this.state.chartConfig}
            onInitialized={caller => {
              this.bindApiCaller(caller);
            }}
          />
        </View>
        <Text style={styles.info}>Press button to change chart type</Text>
        <View style={styles.buttonContainer}>
          <Button
            disabled={
              this.state.chartType === '' || this.state.chartType == 'column2d'
            }
            style={{ margin: 8 }}
            title="Column2D"
            onPress={() => this.changeType('column2d')}
          />
          <Button
            disabled={
              this.state.chartType === '' || this.state.chartType == 'pie2d'
            }
            title="Pie2D"
            onPress={() => this.changeType('pie2d')}
          />
          <Button
            disabled={
              this.state.chartType === '' || this.state.chartType == 'bar2d'
            }
            title="Bar2D"
            onPress={() => this.changeType('bar2d')}
          />
        </View>
      </View>
    );
  }
}

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
    borderColor: '#000',
    borderWidth: 1,
  },
  buttonContainer: {
    padding: 10,
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
  },
});
