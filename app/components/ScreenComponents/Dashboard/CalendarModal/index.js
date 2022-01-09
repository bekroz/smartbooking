import React from 'react';
import { View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
// Theme
import { SIZES } from '../../../../constants';
// Component
import MonthRangePicker from '../MonthRangePicker';

const CalendarModal = ({ isVisible, toggleCalendarModal }) => {
  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={toggleCalendarModal}
      swipeDirection="up"
      animationIn="slideInDown"
      animationOut="slideOutUp"
      coverScreen={true}
      onBackdropPress={toggleCalendarModal}
      onBackButtonPress={toggleCalendarModal}
      animationInTiming={600}
      animationOutTiming={600}
      animateClockwise={true}>
      <View style={styles.calendarContainer}>
        <MonthRangePicker toggleCalendarModal={toggleCalendarModal} />
      </View>
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
  },
});
