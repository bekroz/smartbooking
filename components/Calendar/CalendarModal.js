import React from 'react';
import { View } from 'react-native';
import { Overlay } from 'react-native-elements';
// Components
import Calendar from './Calendar';

export default function CalendarModal({
  toggleCalendarModal,
  calendarModalVisible,
}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Overlay
        isVisible={calendarModalVisible}
        onBackdropPress={toggleCalendarModal}>
        <Calendar handleAcceptButtonPress={toggleCalendarModal} />
      </Overlay>
    </View>
  );
}
