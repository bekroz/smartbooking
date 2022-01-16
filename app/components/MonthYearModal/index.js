import React from 'react';
import Modal from 'react-native-modal';
// Component
import { MonthYearCal } from '../../components';

const MonthYearModal = ({ isVisible, givenDate, close, refreshData }) => {
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
      <MonthYearCal
        isVisible={isVisible}
        close={close}
        givenDate={givenDate}
        refreshData={refreshData}
      />
    </Modal>
  );
};

export default MonthYearModal;
