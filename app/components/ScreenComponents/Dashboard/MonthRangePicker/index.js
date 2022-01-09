import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
// Components
import Calendar from '../../../Additionals/date-picker';
// Theme
import { COLORS, SIZES } from '../../../../constants/theme';
// Redux
import { setChosenMonthRange } from '../../../../redux/actions';
import { useDispatch } from 'react-redux';

const MonthRangePicker = ({ toggleCalendarModal }) => {
  const [updatedMonthRange, setUpdatedMonthRange] = useState('');
  const [dateRangeValue, setDateRangeValue] = useState(null);
  const dispatch = useDispatch();

  const handleDateChange = range => {
    setUpdatedMonthRange(range);
    console.log(range);
  };
  const handleAcceptButtonPress = () => {
    dispatch(setChosenMonthRange(updatedMonthRange));
    toggleCalendarModal();
  };

  const handleClearButtonPress = () => {
    setUpdatedMonthRange({});
  };

  return (
    <View style={styles.rangeModalContainer}>
      <View
        style={{
          width: SIZES.width,
        }}>
        <Calendar
          format="YYYY-MM-DD"
          showControls={true}
          userColors={{ title: '#FFFFFF' }}
          onDateChange={handleDateChange}
          mode="range"
          locale="ru"
          style={styles.container}
          // useNativeDriver={true}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
          marginRight: 50,
          marginLeft: 50,
          paddingBottom: 20,
        }}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: COLORS.blue,
            borderRadius: 6,
            width: 108,
            height: 36,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={handleClearButtonPress}>
          <Text
            style={{
              color: COLORS.blue,
              fontSize: 13,
              fontWeight: SIZES.fontWeight3,
            }}>
            Очистить
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.acceptButtonStyle}
          onPress={handleAcceptButtonPress}>
          <Text style={styles.acceptTextstyle}>Подтвердить</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rangeModalContainer: {
    backgroundColor: '#212831',
    borderRadius: 12,
  },
  pickerWrapper: {
    margin: 50,
  },
  selectedDateContainerStyle: {
    height: 35,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  selectedDateStyle: {
    fontWeight: 'bold',
    color: 'white',
  },
  acceptButtonStyle: {
    backgroundColor: '#5E85DB',
    borderRadius: 6,
    width: 108,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  acceptTextstyle: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: SIZES.fontWeight3,
  },
});

// function mapStateToProps({ dateReducer }) {
//   const { chosenMonthRange } = dateReducer;
//   return {
//     chosenMonthRange,
//   };
// }

export default MonthRangePicker;
