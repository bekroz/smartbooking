import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
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
