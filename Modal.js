import React, { useState } from 'react';
import { Button, Text, View, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { SIZES } from './app/constants';

const ModalTester = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
      }}>
      <Button
        title="Show modal"
        onPress={toggleModal}
        style={{ position: 'absolute' }}
      />

      <Modal
        isVisible={isModalVisible}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="up"
        animationIn="slideInDown"
        animationOut="slideOutUp"
        coverScreen={true}
        onBackdropPress={() => setModalVisible(false)}
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

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
};

export default ModalTester;
