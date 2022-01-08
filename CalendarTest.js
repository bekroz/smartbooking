import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { COLORS, SIZES } from './app/constants';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date, type) {
    if (type === 'END_DATE') {
      this.setState({
        selectedEndDate: date,
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null,
      });
    }
  }

  render() {
    const { selectedStartDate, selectedEndDate } = this.state;
    const minDate = new Date(2020, 6, 3);
    const maxDate = new Date(2023, 6, 3);
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';

    return (
      <View style={styles.container}>
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={minDate}
          maxDate={maxDate}
          todayBackgroundColor="#f2e6ff"
          selectedDayColor="#7300e6"
          selectedDayTextColor="#FFFFFF"
          onDateChange={this.onDateChange}
          format="YYYY-MM-DD"
          showControls={true}
          userColors={{ title: '#FFFFFF' }}
          // onDateChange={range => setUpdatedMonthRange(range)}
          mode="range"
          locale="ru"
          style={styles.container}
          useNativeDriver={true}
          // scrollable={true}
          // resets
        />

        <View>
          <Text>SELECTED START DATE:{startDate}</Text>
          <Text>SELECTED END DATE:{endDate}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
  rangeModalContainer: {
    backgroundColor: '#212831',
    borderRadius: 12,
  },
  pickerWrapper: {
    margin: 50,
  },
  selectedDateContainerStyle: {
    height: 35,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  selectedDateStyle: {
    fontWeight: 'bold',
    color: 'white',
  },
  acceptButtonStyle: {
    backgroundColor: '#5E85DB',
    borderRadius: 6,
    width: 108,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  acceptTextstyle: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: SIZES.fontWeight3,
  },
});
