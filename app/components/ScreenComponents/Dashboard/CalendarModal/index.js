import React from 'react';
import { View } from 'react-native';
import { Overlay } from 'react-native-elements';
// Components
import MonthRangePicker from '../MonthRangePicker';

export default function CalendarModal({
  toggleCalendarModal,
  calendarModalVisible,
}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Overlay
        isVisible={calendarModalVisible}
        onBackdropPress={toggleCalendarModal}>
        <MonthRangePicker toggleCalendarModal={toggleCalendarModal} />
      </Overlay>
    </View>
  );
}
