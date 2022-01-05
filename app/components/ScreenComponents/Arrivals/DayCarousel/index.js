import React, { useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import Carousel from 'react-native-snap-carousel';
import { RESERVATION_TYPE_CAROUSEL } from '../../../../constants/dataTypes';
import { COLORS, SIZES } from '../../../../constants/theme';

const DayCarousel = ({ showDay }) => {
  const formattedDay = dayjs(showDay).locale('ru').format('dddd, DD MMM');
  const [activeIndex, setActiveIndex] = useState(0);
  const dateArray = dayjs().day(0).format('dddd, DD MMM');

  function renderDateArray({ item, index }) {
    return (
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{formattedDay}</Text>
      </View>
    );
  }

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
        ref={ref => (this.carousel = ref)}
        data={RESERVATION_TYPE_CAROUSEL}
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
    justifyContent: 'center',
    alignSelf: 'flex-start',
    // backgroundColor: 'red',
  },
  dateText: {
    color: '#F0F0F0',
    fontSize: SIZES.body5,
    fontWeight: '300',
  },
});
