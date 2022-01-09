import React, { useState } from 'react';
import { Button, Text, View, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { useDispatch } from 'react-redux';
import { SIZES } from '../../../../constants';
import {
  getHotelDataRequestAction,
  setUserChosenHotelIDAction,
} from '../../../../redux/actions';

const HotelModal = ({ chosenHotel, hotelModalVisible }) => {
  const dispatch = useDispatch();
  const handleHotelPress = () => {
    // If no hotel is chosen modal won't close
    // alert(chosenHotelID);
    const updatedHotel = {
      hotelID: 48,
      hotelName: 'Kukaldosh Hotel',
    };
    console.log(typeof updatedHotel);
    if (
      updatedHotel
      //   typeof updatedHotel.hotelID !== null &&
      //   typeof updatedHotel.hotelID !== 'undefined'
    ) {
      dispatch(setUserChosenHotelIDAction(updatedHotel));
      dispatch(getHotelDataRequestAction());

      // console.log(updatedHotel);
    } else {
      alert('Choose hotel');
    }
  };
  function toggleModal() {
    setModalVisible(true);
  }

  return (
    <Modal
      isVisible={hotelModalVisible}
      onSwipeComplete={() => setModalVisible(false)}
      animationIn="fadeIn"
      animationOut="fadeOut"
      coverScreen={true}
      onBackdropPress={handleHotelPress}
      propagateSwipe="true"
      // onModalWillHide={() => alert('API call')}
      // Android back button press event handler
      onBackButtonPress={() => setModalVisible(false)}
      animationInTiming={560}
      animationOutTiming={560}>
      <View
        style={{
          backgroundColor: 'red',
          width: SIZES.width,
          alignSelf: 'center',
          height: 250,
          bottom: 0,
          justifyContent: 'flex-start',
          // alignSelf: 'flex-start',
        }}>
        <Text>Hello!</Text>

        <Button title="Hide modal" onPress={toggleHotelModal} />
      </View>
    </Modal>
  );
};

export default HotelModal;
