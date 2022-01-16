import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import Carousel from 'react-native-snap-carousel';
import { POSITIONING, SIZES, ARRIVALS_TYPE } from '../../../../constants';

const DayCarousel = ({ shownDay }) => {
  const formattedDay = dayjs(shownDay).locale('ru').format('dddd, DD MMM');
  const [activeIndex, setActiveIndex] = useState(0);
  const dateArray = dayjs().day(0).format('dddd, DD MMM');

  function renderDateArray({ item, index }) {
    return (
      <TouchableOpacity style={styles.dateContainer} key={index}>
        <Text style={styles.dateText}>{formattedDay}</Text>
      </TouchableOpacity>
    );
  }

  let currentDate = dayjs().format('DD-MM-YYYY');
  let after = 1;
  let before = 1;
  let size = 10;
  let dates = [currentDate];

  dates = [
    ...Array(size * before)
      .fill()
      .map((_, i) =>
        dayjs()
          .subtract(size * before - i, 'day')
          .format('DD-MM-YYYY'),
      ),
    currentDate,
    ...Array(size * after)
      .fill()
      .map((_, i) =>
        dayjs()
          .add(i + 1, 'day')
          .format('DD-MM-YYYY'),
      ),
  ];

  return (
    <View
      style={{
        flex: 1,
        // Remove left and right padding to allow for carousel
        // backgroundColor: 'green',
        left: -120,
      }}>
      <Carousel
        layout={'default'}
        data={ARRIVALS_TYPE}
        sliderHeight={100}
        sliderWidth={500}
        itemWidth={250}
        renderItem={renderDateArray}
        onSnapToItem={index => setActiveIndex(index)}
        inactiveSlideOpacity={0.5}
      />
    </View>
  );
};
export default DayCarousel;

const styles = StyleSheet.create({
  dateContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    alignSelf: 'flex-start',
    ...POSITIONING.justify,
    // backgroundColor: 'red',
  },
  dateText: {
    color: '#F0F0F0',
    fontSize: SIZES.body5,
    fontWeight: '300',
  },
  separator: {
    height: 40,
    width: 20,
    backgroundColor: 'red',
  },
});
