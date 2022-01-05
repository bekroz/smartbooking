import React, { useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import dayjs from 'dayjs';
import Carousel from 'react-native-snap-carousel';
import { RESERVATION_TYPE_CAROUSEL } from '../../../../constants/dataTypes';
import { COLORS, SIZES } from '../../../../constants/theme';

const StatusCarousel = ({ indicatorNumber = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  function renderStatusArray({ item, index }) {
    return (
      <View
        style={{
          // backgroundColor: 'red',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={styles.status}>{item.text}</Text>
        <View style={[styles.indicatorContainer]}>
          <Text style={styles.indicatorNumber}>{indicatorNumber}</Text>
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: 'green',
        marginLeft: 0,
        position: 'absolute',
        left: -120,
      }}>
      <Carousel
        layout={'default'}
        ref={ref => (this.carousel = ref)}
        data={RESERVATION_TYPE_CAROUSEL}
        sliderHeight={100}
        sliderWidth={500}
        itemWidth={250}
        renderItem={renderStatusArray}
        onSnapToItem={index => setActiveIndex(index)}
        inactiveSlideOpacity={0.5}
      />
    </View>
  );
};
export default StatusCarousel;

const styles = StyleSheet.create({
  status: {
    color: COLORS.white,
    fontSize: SIZES.h1,
    fontWeight: SIZES.fontWeight3,
  },
  indicatorContainer: {
    backgroundColor: COLORS.blue,
    width: 22,
    height: 22,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    right: -4,
    top: -4,
  },
  indicatorNumber: {
    color: COLORS.white,
    fontSize: SIZES.body6,
    fontWeight: SIZES.fontWeight3,
    borderRadius: 50,
  },
});
