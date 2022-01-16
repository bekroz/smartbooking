import React from 'react';
import Modal from 'react-native-modal';
// Component
import { MonthRangeCalendar } from '../../components';

const CalendarModal = ({
  isVisible,
  close,
  startDate,
  endDate,
  refreshData,
}) => {
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
      <MonthRangeCalendar
        close={close}
        startDate={startDate}
        endDate={endDate}
        refreshData={refreshData}
      />
    </Modal>
  );
};

export default CalendarModal;
