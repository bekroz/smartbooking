import React, { useState } from 'react';
import { Button, Overlay } from 'react-native-elements';
import { View, Text } from 'react-native';
import CalendarModal from '../components/Calendar/CalendarModal';

export default function OverlayExample() {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <View
      style={{
        justifyContent: 'center',
      }}>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <CalendarModal />
      </Overlay>
    </View>
  );
}
