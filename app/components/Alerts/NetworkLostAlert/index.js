import React from 'react';
import { StyleSheet } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { COLORS } from '../../../constants';

const NetworkLostAlert = ({ visible, refreshAction }) => {
  return (
    <Snackbar
      style={{ alignSelf: 'center', bottom: 660 }}
      visible={visible}
      onDismiss={refreshAction}
      action={{
        label: 'Обновлять',
        onPress: refreshAction,
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
