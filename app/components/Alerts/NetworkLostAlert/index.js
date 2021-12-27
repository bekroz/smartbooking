import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
import { COLORS } from '../../../constants';

const NetworkLostAlert = ({ networkConnection }) => {
  const [networkModalVisible, setNetworkModalVisible] = useState(false);

  const onToggleSnackBar = () => {
    setNetworkModalVisible(!networkModalVisible);
  };

  return (
    <Snackbar
      style={{ alignSelf: 'center', bottom: 660 }}
      visible={networkModalVisible}
      onDismiss={() => onToggleSnackBar()}
      action={{
        label: 'Обновлять',
        onPress: () => alert('Reloading...'),
        fontStyle: styles.snackbarFont,
        labelStyle: styles.snackbarLabel,
        color: COLORS.grayText,
      }}>
      Нет соединения с интернетом.
    </Snackbar>
  );
};

const styles = StyleSheet.create({
  snackbarFont: {
    color: COLORS.white,
  },
  snackbarLabel: {
    color: COLORS.blue,
  },
});

export default NetworkLostAlert;

{
  /* <Button
        style={{
          backgroundColor: 'red',
        }}
        onPress={onToggleSnackBar}>
        {visible ? 'Hide' : 'Show'}
      </Button> */
}
