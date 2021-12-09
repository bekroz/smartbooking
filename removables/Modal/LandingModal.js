import React, { useState } from 'react';
import { Modal, ModalContent } from 'react-native-modals';
import { Text, View, Button } from 'react-native';
import DashboardModal from '../../components/Dashboard/DashboardModal';

const ModalBox = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button title="Show Modal" onPress={() => setVisible(true)} />
      <Modal visible={visible} onTouchOutside={() => setVisible(false)}>
        <ModalContent
          style={{
            backgroundColor: 'blue',
          }}>
          <DashboardModal />
        </ModalContent>
      </Modal>
    </View>
  );
};

export default ModalBox;

const styles = StyleSheet.create({
  modalBlock: {
    backgroundColor: '#0F0F0F',
    width: 340,
    height: 175,
    borderRadius: 12,
  },
  optionsTopTitle: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: SIZES.fontWeight3,
  },
  options: {
    fontSize: SIZES.body4,
    color: COLORS.white,
  },
  chosenOptionStyle: {
    color: COLORS.blue,
    fontWeight: SIZES.fontWeight2,
  },
});

// import * as React from 'react';
// import { View } from 'react-native';
// import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
// import { SIZES } from '../../constants/theme';
// import DashboardModal from '../../components/Dashboard/DashboardModal';

// const LandingModal = () => {
//   const [visible, setVisible] = React.useState(false);

//   const showModal = () => setVisible(true);
//   const hideModal = () => setVisible(false);
//   const containerStyle = {
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'center',
//     width: SIZES.width - 20,
//     height: 300,
//   };

//   return (
//     <Provider>
//       <Portal>
//         <Modal
//           visible={visible}
//           onDismiss={hideModal}
//           contentContainerStyle={containerStyle}>
//           <DashboardModal />
//         </Modal>
//       </Portal>

//       <View style={{ alignSelf: 'center' }}>
//         <Button style={{ top: 430 }} onPress={showModal}>
//           Show
//         </Button>
//       </View>
//     </Provider>
//   );
// };

// export default LandingModal;
