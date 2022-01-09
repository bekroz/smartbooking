import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
// Components
import Calendar from '../../../Additionals/date-picker';
// Theme
import { COLORS, SIZES } from '../../../../constants/theme';
import { store } from '../../../../redux/store';
import { setChosenMonthRange } from '../../../../redux/actions';
import { connect, useDispatch } from 'react-redux';

const MonthRangePicker = ({ toggleCalendarModal, chosenMonthRange }) => {
  const [updatedMonthRange, setUpdatedMonthRange] = useState(chosenMonthRange);
  const [dateRangeValue, setDateRangeValue] = useState(null);
  const dispatch = useDispatch();
  function handleAcceptButtonPress() {
    dispatch(setChosenMonthRange(updatedMonthRange));
    // toggleCalendarModal();
  }

  function handleClearButtonPress() {
    setUpdatedMonthRange({});
  }
  console.log('====================================');
  console.log(store.getState().dateReducer);
  console.log('====================================');
  console.log('====================================');
  console.log(updatedMonthRange);
  console.log('====================================');
  return (
    <View style={styles.rangeModalContainer}>
      <View style={styles.pickerWrapper}>
        <DateRangePicker
          onSelectDateRange={range => {
            setDateRangeValue(range);
          }}
          blockSingleDateSelection={true}
          responseFormat="YYYY-MM-DD"
          selectedDateContainerStyle={styles.selectedDateContainerStyle}
          selectedDateStyle={styles.selectedDateStyle}
        />
        <View style={styles.container}>
          <Text>first date: {range.start}</Text>
          <Text>second date: {range.end}</Text>
        </View>
      </View>
      <View
        style={{
          width: SIZES.width,
        }}>
        <Calendar
          format="YYYY-MM-DD"
          showControls={true}
          userColors={{ title: '#FFFFFF' }}
          onDateChange={range => setUpdatedMonthRange(range)}
          mode="range"
          locale="ru"
          style={styles.container}
          useNativeDriver={true}
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
          onPress={() => handleClearButtonPress()}>
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
          onPress={handleAcceptButtonPress()}>
          <Text style={styles.acceptTextstyle}>Подтвердить</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={styles.container}>
        <Text
          style={{ color: COLORS.white, fontWeight: '500', marginBottom: 10 }}>
          FIRST date: {range.start}
        </Text>
        <Text style={{ color: COLORS.white, fontWeight: '500' }}>
          SECOND date: {range.end}
        </Text>
      </View> */}
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

function mapStateToProps({ dateReducer }) {
  const { chosenMonthRange } = dateReducer;
  return {
    chosenMonthRange,
  };
}

export default connect(mapStateToProps)(MonthRangePicker);
