import moment from 'moment';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';
// import DateRangePicker from 'rn-select-date-range';
import Calendar from '../components/Additionals/date-picker';
import leftArrowCal from '../assets/icons/leftArrowCal.png';
import rightArrowCal from '../assets/icons/rightArrowCal.png';

const App = () => {
  const [selectedRange, setRange] = useState({});
  const [dateRangeValue, setDateRangeValue] = useState(null);

  const onSelectedItemsChange = date => {
    setDateRangeValue(date);
    console.log(date.start, date.end);
    console.log(dateRangeValue)
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#212831' }}>
      {/* <View style={styles.container}>
        <DateRangePicker
          onSelectDateRange={range => {
            setRange(range);
          }}
          blockSingleDateSelection={true}
          responseFormat="YYYY-MM-DD"
          maxDate={moment()}
          minDate={moment().subtract(100, 'days')}
          selectedDateContainerStyle={styles.selectedDateContainerStyle}
          selectedDateStyle={styles.selectedDateStyle}
        />
        <View style={styles.container}>
          <Text>first date: {selectedRange.firstDate}</Text>
          <Text>second date: {selectedRange.secondDate}</Text>
        </View>
      </View> */}
      <View>
        <Calendar
          format="YYY-MM-DD"
          showControls={true}
          userColors={{ title: '#FFFFFF' }}
          onDateChange={onSelectedItemsChange}
          mode="range"
          locale="ru"
          style={styles.container}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
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
});

export default App;
