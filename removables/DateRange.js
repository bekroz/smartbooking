import React from 'react';
import { View, Text } from 'react-native';
import DatePicker from 'react-native-date-ranges';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { SIZES } from '../constants/theme';

const DateRange = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View
        style={{
          width: SIZES.width,
          alignSelf: 'center',
        }}>
        {/* <Calendar
          // Specify style for calendar container element. Default = {}
          style={{
            borderWidth: 1,
            borderColor: '#212831',
            height: 350,
          }}
          // Specify theme properties to override specific styles for calendar parts. Default = {}
          enableSwipeMonths={true}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#212831',
            textSectionTitleColor: '#5E6272',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: 'red',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#5F85DB',
            dayTextColor: '#FFF',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: 'red',
            arrowColor: '#FFFFFF',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: '#FFFFFF',
            indicatorColor: 'blue',
            textDayFontWeight: '600',
            textMonthFontWeight: '600',
            textDayHeaderFontWeight: '600',
            textDayFontSize: 14,
            textMonthFontSize: 20,
            textDayHeaderFontSize: 16,
          }}
          onVisibleMonthsChange={months => {
            console.log('now these months are visible', months);
          }}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={50}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={50}
          // Enable or disable scrolling of calendar list
          scrollEnabled={true}
          // Enable or disable vertical scroll indicator. Default = false
          showScrollIndicator={true}
          markingType="multi-period"
          markedDates={{
            '2021-12-20': { textColor: 'green' },
            '2021-12-22': { startingDay: true, color: 'green' },
            '2021-12-23': {
              selected: true,
              endingDay: true,
              color: 'green',
              textColor: 'gray',
            },
            '2021-12-04': {
              disabled: true,
              startingDay: true,
              color: 'green',
              endingDay: true,
            },
          }}
        /> */}
        <Calendar
          onChange={range => console.log(range)}
          minDate={new Date(2018, 3, 20)}
          startDate={new Date(2018, 3, 30)}
          endDate={new Date(2018, 4, 5)}
          theme={{
            activeDayColor: {},
            monthTitleTextStyle: {
              color: '#6d95da',
              fontWeight: '300',
              fontSize: 16,
            },
            emptyMonthContainerStyle: {},
            emptyMonthTextStyle: {
              fontWeight: '200',
            },
            weekColumnsContainerStyle: {},
            weekColumnStyle: {
              paddingVertical: 10,
            },
            weekColumnTextStyle: {
              color: '#b6c1cd',
              fontSize: 13,
            },
            nonTouchableDayContainerStyle: {},
            nonTouchableDayTextStyle: {},
            startDateContainerStyle: {},
            endDateContainerStyle: {},
            dayContainerStyle: {},
            dayTextStyle: {
            color: '#2d4150',
              fontWeight: '200',
              fontSize: 15,
            },
            dayOutOfRangeContainerStyle: {},
            dayOutOfRangeTextStyle: {},
            todayContainerStyle: {},
            todayTextStyle: {
              color: '#6d95da',
            },
            activeDayContainerStyle: {
              backgroundColor: '#6d95da',
            },
            activeDayTextStyle: {
              color: 'white',
            },
            nonTouchableLastMonthDayTextStyle: {},
          }}
        />
      </View>
    </View>
  );
};

export default DateRange;
