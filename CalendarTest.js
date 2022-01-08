import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DateRangePicker from 'react-native-daterange-picker';

import moment from 'moment/min/moment-with-locales';
moment.locale('ru');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      displayedDate: moment(),
    };
  }

  setDates = dates => {
    this.setState({
      ...dates,
    });
  };

  render() {
    const { startDate, endDate, displayedDate } = this.state;
    return (
      <View style={styles.container}>
        <DateRangePicker
          onChange={this.setDates}
          endDate={endDate}
          startDate={startDate}
          displayedDate={displayedDate}
          range
          moment={moment}>
          <Text>Click me!</Text>
        </DateRangePicker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
