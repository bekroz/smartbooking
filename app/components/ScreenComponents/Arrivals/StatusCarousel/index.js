import React, { useEffect, useRef, useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import dayjs from 'dayjs';
import Carousel from 'react-native-snap-carousel';
import { useDispatch } from 'react-redux';
import {
  COLORS,
  POSITIONING,
  SIZES,
  ARRIVALS_TYPE,
} from '../../../../constants';
import { getArrivalsDataRequestAction } from '../../../../redux/actions';

const StatusCarousel = ({ activeIndex, indicatorNumber, refresh }) => {
  const dispatch = useDispatch();
  const carouselRef = useRef(activeIndex);
  const timeOutedCall = () => {
    setTimeout(() => {
      refresh();
    }, 400);
  };

  const snapHandler = index => {
    dispatch(getArrivalsDataRequestAction(ARRIVALS_TYPE[index]));
    timeOutedCall();
  };

  function renderStatusArray({ item, index }) {
    return (
      <TouchableOpacity
        key={index}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => {
          carouselRef.current.snapToItem(index);
          dispatch(getArrivalsDataRequestAction(item));
          timeOutedCall();
        }}>
        <Text style={styles.status}>{item.displayName}</Text>
        <View style={[styles.indicatorContainer]}>
          <Text style={styles.indicatorNumber}>{indicatorNumber}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  function handleSnapToItem(index) {
    switch (index) {
      case 0:
        dispatch(getArrivalsDataRequestAction(ARRIVALS_TYPE[0]));
        timeOutedCall();
        snapHandler(index);
        break;
      case 1:
        dispatch(getArrivalsDataRequestAction(ARRIVALS_TYPE[1]));
        timeOutedCall();
        break;
      case 2:
        dispatch(getArrivalsDataRequestAction(ARRIVALS_TYPE[2]));
        timeOutedCall();
        break;
    }
  }

  return (
    <View
      style={{
        flex: 1,
        marginLeft: 0,
        position: 'absolute',
        left: -120,
      }}>
      <Carousel
        useScrollView={true}
        ref={carouselRef}
        layout={'default'}
        data={ARRIVALS_TYPE}
        sliderHeight={100}
        sliderWidth={500}
        itemWidth={250}
        renderItem={renderStatusArray}
        // on
        onBeforeSnapToItem={index => handleSnapToItem(index)}
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
    right: -4,
    top: -4,
    ...POSITIONING.center,
  },
  indicatorNumber: {
    color: COLORS.white,
    fontSize: SIZES.body6,
    fontWeight: SIZES.fontWeight3,
    borderRadius: 50,
  },
});
