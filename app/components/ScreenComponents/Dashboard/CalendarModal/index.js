import React from 'react';
import { View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
// Theme
import { SIZES } from '../../../../constants';
// Component
import MonthRangePicker from '../MonthRangePicker';

const CalendarModal = ({ isVisible, open, close }) => {
  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={close}
      swipeDirection="up"
      animationIn="slideInDown"
      animationOut="slideOutUp"
      coverScreen={true}
      onBackdropPress={close}
      onBackButtonPress={close}
      animationInTiming={600}
      animationOutTiming={600}
      animateClockwise={true}>
      <MonthRangePicker close={close} />
    </Modal>
  );
};

export default CalendarModal;

const styles = StyleSheet.create({
  calendarContainer: {
    width: SIZES.width,
    alignSelf: 'center',
    height: 'auto',
    top: 10,
    position: 'absolute',
    backgroundColor: 'red',
  },
});
