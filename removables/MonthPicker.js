import React, { Component } from 'react';

import { Text, View } from 'react-native';
import MonthPicker from 'react-native-month-picker';
import moment from 'moment';

export default function TestingScreen() {
  return (
    <View>
      <Text>DATE</Text>
      <MonthPicker
        onYearChange={newDate => // console.log(newDate)}
        maxDate={moment()}
        minDate={moment('01-01-1995', 'DD-MM-YYYY')}
        currentMonthTextStyle={{ color: '#0aa9c2' }}
      />
    </View>
  );
}
