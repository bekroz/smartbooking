import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import {
  CalendarNextArrowSvg,
  CalendarPreviousArrowSvg,
} from '../../assets/icons/SvgIcons';
import { COLORS, POSITIONING, SIZES, MONTHS_ARRAY } from '../../constants';
import { FlatList } from 'react-native-gesture-handler';
import { setChosenDate } from '../../redux/actions';
import { currentYear } from '../../helpers';

export default function MonthYearCal({ givenDate, close, refreshData }) {
  const formYear = dayjs(givenDate).format('YYYY');
  const formMonth = dayjs(selectedMonth).format('MM');
  const formDay = dayjs(givenDate).format('DD');

  const dispatch = useDispatch();
  const givenMonth = dayjs(formYear).format('MM');
  const [selectedMonth, setSelectedMonth] = useState(givenMonth);
  const [selectedYear, setSelectedYear] = useState(
    formYear ? formYear : currentYear,
  );

  const handleClearButtonPress = () => {
    setSelectedMonth(null);
    setSelectedYear(null);
  };
  const handleAcceptButtonPress = () => {
    const date = `${selectedYear}-${selectedMonth}-${formDay}`;
    dispatch(setChosenDate(date));
    alert(date);
    close();
    refreshData();
  };

  const handleNextYearBtn = () => {
    if (selectedYear < 2025) {
      let updatedYear = dayjs(selectedYear).add(1, 'year').format('YYYY');
      setSelectedYear(updatedYear);
    } else {
      return null;
    }
  };

  const handlePreviousYearBtn = () => {
    if (selectedYear > 2019) {
      let updatedYear = dayjs(selectedYear).subtract(1, 'year').format('YYYY');
      setSelectedYear(updatedYear);
    } else {
      return null;
    }
  };

  let uniqId = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
  console.log(selectedYear);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const renderMonthsContainer = ({ item, index }) => {
    return (
      <View style={styles.monthsContainer} key={index}>
        <TouchableOpacity
          style={[
            styles.monthButton,
            selectedIndex === index ? styles.selectedMonthButton : null,
          ]}
          onPress={() => {
            console.log(uniqId[index]);
            setSelectedMonth(uniqId[index]);
            setSelectedIndex(index);
          }}>
          <Text
            style={[
              styles.monthText,
              selectedIndex === index ? styles.selectedMonthText : null,
            ]}>
            {item}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          top: 10,
          width: '100%',
          height: 300,
        }}>
        <View style={styles.topBarContainer}>
          <TouchableOpacity
            style={{ left: 25 }}
            onPress={handlePreviousYearBtn}>
            <CalendarPreviousArrowSvg />
          </TouchableOpacity>
          <TouchableOpacity style={styles.yearContainer}>
            <Text style={styles.yearText}>
              {dayjs(selectedYear).format('YYYY')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ right: 25 }} onPress={handleNextYearBtn}>
            <CalendarNextArrowSvg />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 20,
            alignItems: 'center',
          }}>
          <FlatList
            scrollEnabled={false}
            data={MONTHS_ARRAY}
            renderItem={renderMonthsContainer}
            numColumns={3}
          />
        </View>
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
    borderRadius: 12,
    width: SIZES.width,
    height: 'auto',
    position: 'absolute',
  },
  topBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  yearText: {
    fontWeight: SIZES.fontWeight2,
    fontSize: SIZES.body3,
    color: COLORS.white,
  },
  monthsContainer: {
    padding: 10,
  },
  monthButton: {
    borderWidth: 1,
    borderColor: COLORS.blue,
    borderRadius: 6,
    width: SIZES.width / 3.7,
    height: SIZES.width / 9,
    ...POSITIONING.center,
  },
  selectedMonthButton: {
    backgroundColor: COLORS.blue,
  },
  selectedMonthText: {
    fontWeight: SIZES.fontWeight2,
  },
  monthText: {
    color: COLORS.white,
    fontSize: SIZES.body7,
    fontWeight: SIZES.fontWeight0,
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingBottom: 25,
  },
  clearButton: {
    borderWidth: 1,
    borderColor: COLORS.blue,
    borderRadius: 6,
    width: SIZES.width / 2.5,
    height: SIZES.width / 9,
    ...POSITIONING.center,
    marginLeft: 15,
  },
  clearButtonText: {
    color: COLORS.blue,
    fontSize: SIZES.body7,
    fontWeight: SIZES.fontWeight3,
  },
  acceptButton: {
    backgroundColor: COLORS.blue,
    borderRadius: 6,
    width: SIZES.width / 2.5,
    height: SIZES.width / 9,
    ...POSITIONING.center,
    marginRight: 15,
  },
  acceptText: {
    color: COLORS.white,
    fontSize: SIZES.body7,
    fontWeight: SIZES.fontWeight3,
  },
});
