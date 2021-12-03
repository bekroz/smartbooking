import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Modal from 'react-native-modal';

function ModalTester() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal
        isVisible={isModalVisible}
        deviceWidth={deviceWidth}
        deviceHeight={deviceHeight}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="left">
        <View style={{ flex: 1 }}>
          <Text>I am the modal content!</Text>
        </View>
      </Modal>
    </View>
  );
}

export default ModalTester;
