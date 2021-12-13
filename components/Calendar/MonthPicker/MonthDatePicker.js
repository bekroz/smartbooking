import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MonthSelectorCalendar from 'react-native-month-selector';

class HomeMonth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: '',
    };
  }
  render() {
    return (
      <View>
        <MonthSelectorCalendar />
      </View>
    );
  }
}

export default HomeMonth;
