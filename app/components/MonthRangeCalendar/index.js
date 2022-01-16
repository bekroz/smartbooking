import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import {
  CalendarNextArrowSvg,
  CalendarPreviousArrowSvg,
} from '../../assets/icons/SvgIcons';
import {
  COLORS,
  POSITIONING,
  SIZES,
  WEEKDAYS_SHORT_ARRAY,
  MONTHS_ARRAY,
} from '../../constants';

import { setChosenMonthRange } from '../../redux/actions';

export default function MonthRangeCalendar({
  startDate,
  endDate,
  close,
  refreshData,
}) {
  const dispatch = useDispatch();
  const [selectedStartDate, setSelectedStartDate] = useState(startDate);
  const [selectedEndDate, setSelectedEndDate] = useState(endDate);

  const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    }
  };

  const updatedStartDate = selectedStartDate
    ? selectedStartDate.toString()
    : '';
  const updatedEndDate = selectedEndDate ? selectedEndDate.toString() : '';

  const formattedStartDate = dayjs(updatedStartDate)
    .locale('ru')
    .format('YYYY-MM-DD');
  const formattedEndDate = dayjs(updatedEndDate)
    .locale('ru')
    .format('YYYY-MM-DD');

  const handleClearButtonPress = () => {
    setSelectedStartDate(null);
    setSelectedEndDate(null);
  };
  const handleAcceptButtonPress = () => {
    if (
      formattedStartDate === 'Invalid Date' ||
      formattedEndDate === 'Invalid Date'
    ) {
      alert('Please, choose final date');
    } else {
      dispatch(setChosenMonthRange(formattedStartDate, formattedEndDate));
      close();
      refreshData();
    }
  };
  const customDayHeaderStylesCallback = () => {
    return {
      textStyle: {
        color: '#5E6272',
        fontSize: 13,
        fontWeight: SIZES.fontWeight2,
      },
    };
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          top: 10,
          width: '100%',
          height: 300,
        }}>
        <CalendarPicker
          selectedStartDate={selectedStartDate}
          selectedEndDate={selectedEndDate}
          startFromMonday={true}
          allowRangeSelection={true}
          allowBackwardRangeSelect={true}
          todayBackgroundColor={COLORS.grayPlaceholder}
          todayTextStyle={styles.todayTextStyle}
          userColors={styles.userColors}
          selectedDayColor={COLORS.blue}
          dayLabelsWrapper={styles.dayLabelsWrapper}
          selectedRangeStyle={styles.selectedRangeStyle}
          selectedRangeStartStyle={styles.selectedRangeStartStyle}
          selectedRangeEndStyle={styles.selectedRangeEndStyle}
          monthTitleStyle={styles.monthTitleStyle}
          yearTitleStyle={styles.yearTitleStyle}
          selectedDayTextColor={COLORS.white}
          textStyle={styles.textStyle}
          maxRangeDuration={89}
          onDateChange={onDateChange}
          previousComponent={
            <View
              style={{
                left: 10,
              }}>
              <CalendarPreviousArrowSvg />
            </View>
          }
          nextComponent={
            <View
              style={{
                right: 10,
              }}>
              <CalendarNextArrowSvg />
            </View>
          }
          mode="range"
          locale="RU"
          weekdays={WEEKDAYS_SHORT_ARRAY}
          months={MONTHS_ARRAY}
          // showDayStragglers={true}
          customDayHeaderStyles={customDayHeaderStylesCallback}
          dayLabelsWrapper={false}
        />
      </View>
      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity
          style={styles.clearButton}
          onPress={() => handleClearButtonPress()}>
          <Text style={styles.clearButtonText}>Очистить</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.acceptButton}
          onPress={() => handleAcceptButtonPress()}>
          <Text style={styles.acceptText}>Подтвердить</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.grayPlaceholder,
    // marginTop: 100,
    borderRadius: 12,
    width: SIZES.width,
    alignSelf: 'center',
    height: 'auto',
    position: 'absolute',
    top: -10,
  },
  todayTextStyle: {
    borderBottomColor: 'red',
    borderBottomWidth: 3,
  },
  userColors: {
    title: COLORS.white,
  },
  pickerWrapper: {
    margin: 50,
  },
  selectedDateContainerStyle: {
    height: 35,
    width: '100%',
    backgroundColor: 'red',
    ...POSITIONING.center,
  },
  selectedDateStyle: {
    fontWeight: 'bold',
    color: COLORS.white,
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 50,
    marginRight: 50,
    marginLeft: 50,
    paddingBottom: 0,
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
    backgroundColor: COLORS.blue,
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
  dayLabelsWrapper: {
    color: '#b5b7b9',
  },
  selectedRangeStyle: {
    backgroundColor: '#53628c',
  },
  selectedRangeStartStyle: {
    backgroundColor: COLORS.blue,
  },
  selectedRangeEndStyle: {
    backgroundColor: COLORS.blue,
    borderTopEndRadius: 50,
    borderBottomEndRadius: 50,
  },
  monthTitleStyle: {
    fontWeight: SIZES.fontWeight2,
    fontSize: 20,
  },
  yearTitleStyle: {
    fontWeight: SIZES.fontWeight2,
    fontSize: 20,
  },
  textStyle: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: SIZES.fontWeight2,
  },
});
