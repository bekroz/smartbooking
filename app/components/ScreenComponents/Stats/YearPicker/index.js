import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import ReactNativePickerModule from 'react-native-picker-module';
// Data
import { YEARS_ARRAY } from '../../../../constants/dataTypes';
// Theme
import { COLORS } from '../../../../constants';
// Redux
import { useDispatch } from 'react-redux';
import { setChosenYear } from '../../../../redux/actions';

export default function YearPickerModal({
  chosenYear,
  visible,
  setYearModalVisible,
}) {
  const pickerRef = useRef();
  if (visible) {
    pickerRef.current.show();
  }
  const dispatch = useDispatch();
  const handleYearChange = updatedYear => {
    dispatch(setChosenYear(updatedYear));
    setYearModalVisible(false);
  };

  return (
    <ReactNativePickerModule
      pickerRef={pickerRef}
      value={chosenYear}
      title="Выбирайте год"
      items={YEARS_ARRAY}
      titleStyle={styles.whiteTextStyle}
      itemStyle={styles.whiteTextStyle}
      selectedColor={COLORS.blue}
      confirmButtonEnabledTextStyle={styles.confirmButtonEnabledTextStyle}
      confirmButtonDisabledTextStyle={styles.confirmButtonDisabledTextStyle}
      cancelButtonTextStyle={styles.cancelButtonTextStyle}
      confirmButtonStyle={styles.backgroundStyle}
      cancelButtonStyle={styles.backgroundStyle}
      contentContainerStyle={styles.backgroundStyle}
      onValueChange={value => handleYearChange(value)}
      confirmButton="Подтвердить"
      cancelButton="Отменить"
    />
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'rgba(0,0,0,1)',
  },
  confirmButtonDisabledTextStyle: {
    color: COLORS.grayCirclePart,
  },
  whiteTextStyle: {
    color: COLORS.white,
  },
  confirmButtonEnabledTextStyle: {
    color: 'rgba(0,122,255,1)',
    fontWeight: 'bold',
  },
  cancelButtonTextStyle: {
    color: '#F0F0F0',
  },
});
