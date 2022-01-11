import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
// Components
import Calendar from '../../../Additionals/date-picker';
// Theme
import { COLORS, POSITIONING, SIZES } from '../../../../constants';
// Redux
import { setChosenMonthRange } from '../../../../redux/actions';

const MonthRangePicker = ({ chosenMonthRange, close }) => {
  const [updatedMonthRange, setUpdatedMonthRange] = useState('');
  const dispatch = useDispatch();

  const handleDateChange = range => {
    setUpdatedMonthRange(range);
  };
  const handleAcceptButtonPress = () => {
    dispatch(setChosenMonthRange(updatedMonthRange));
    close();
  };

  const handleClearButtonPress = () => {
    setUpdatedMonthRange({});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Calendar
          format="YYYY-MM-DD"
          showControls={true}
          userColors={styles.userColors}
          onDateChange={handleDateChange}
          mode="range"
          locale="ru"
          useNativeDriver={true}
        />
      </View>
      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity
          style={styles.clearButton}
          onPress={handleClearButtonPress}>
          <Text style={styles.clearButtonText}>Очистить</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.acceptButton}
          onPress={handleAcceptButtonPress}>
          <Text style={styles.acceptText}>Подтвердить</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212831',
    borderRadius: 12,
    width: SIZES.width,
    alignSelf: 'center',
    height: 'auto',
    top: -15,
    position: 'absolute',
  },
  userColors: {
    title: '#FFFFFF',
  },
  pickerWrapper: {
    margin: 50,
  },
  selectedDateContainerStyle: {
    height: 35,
    width: '100%',
    backgroundColor: 'blue',
    ...POSITIONING.center,
  },
  selectedDateStyle: {
    fontWeight: 'bold',
    color: COLORS.white,
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    marginRight: 50,
    marginLeft: 50,
    paddingBottom: 20,
  },
  clearButton: {
    borderWidth: 1,
    borderColor: COLORS.blue,
    borderRadius: 6,
    width: 108,
    height: 36,
    ...POSITIONING.center,
  },
  clearButtonText: {
    color: COLORS.blue,
    fontSize: 13,
    fontWeight: SIZES.fontWeight3,
  },
  acceptButton: {
    backgroundColor: '#5E85DB',
    borderRadius: 6,
    width: 108,
    height: 36,
    ...POSITIONING.center,
  },
  acceptText: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: SIZES.fontWeight3,
  },
});

export default MonthRangePicker;
