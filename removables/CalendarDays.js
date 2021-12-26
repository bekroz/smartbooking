import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import CalendarDays from 'react-native-calendar-slider-carousel';
import { SIZES } from '../app/constants/theme';

const TestingScreen = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState('');
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <CalendarDays
        // First day. Default = new Date()
        // firstDate={'2000-05-20'}
        // Last day. You can set number of days instead
        lastDate={'2022-05-20'}
        // Sets number of days displaued. Default = 30
        numberOfDays={31}
        // Initial selected day. Default = firstDate
        // selectedDate={today}
        selected_date_style={{
          backgroundColor: 'red',
        }}
        // Optional text that replaces week day in disabled days
        disabledText={'closed'}
        // scrollView width
        scrollView={'auto'}
        // width={SIZES.width}
        // Instead of width you can set number of days visible.
        daysInView={10}
        // Only available if width % 120 = 0. Scroll by full width
        paginate={false}
        // Function to get selected date in 'YYYY-MM-DD' format
        onDateSelect={date => setSelectedDate(date)}
        // Replaces scroll with left and right arrows.
        // Suitable for web where horizontal scroll is not always available
        arrows={false}
        // Arrow icon components. Required if arrows={true}
        // leftArrow={<Icon name="arrow-back" size={26} color="#555" />}
        // rightArrow={<Icon name="arrow-forward" size={26} color="#555" />}
      />
    </SafeAreaView>
  );
};

export default TestingScreen;
