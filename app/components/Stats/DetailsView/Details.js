import React, { useEffect, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import dayjs from 'dayjs';
import { Card } from 'react-native-elements/dist/card/Card';
// Theme
import { COLORS, SIZES } from '../../../constants/theme';
// Components
import {
  ByUserDot,
  SitesDot,
  TelephoneDot,
  BookingDot,
  TraminaDot,
  DoloresDot,
  OtherDot,
} from '../../Reservations';
import { ByUserLine } from '../Lines';
import { DonutView } from '..';
// API
import { numberWithSpaces } from '../../../helpers';
import { getChannelsDataMiddleware } from '../../../redux/middlewares';
import { connect } from 'react-redux';
import { firstDayOfMonth, today, monthRangeUntilToday } from '../../../helpers';

const Details = ({
  navigation,
  loading,
  chosenDateRange,
  channelsData,
  totalRevenue,
  totalSoldNights,
  totalAverageSum,
  error,
  chosenYear,
  annualData,
  hotelID,
}) => {
  const onPullToRefresh = useCallback(() => {
    getChannelsDataMiddleware(chosenDateRange, hotelID);
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getChannelsDataMiddleware();
    });

    return unsubscribe;
  }, [navigation]);

  const sourceNameArray = [
    'От стойки',
    'Телефон',
    'Dolores',
    'Сайт',
    'Booking.com',
    'Трамина',
  ];

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={onPullToRefresh}
          tintColor={'white'}
        />
      }>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 5,
          paddingBottom: 0,
          paddingTop: 5,
        }}></View>
      {/* FIRST Card */}
      <Card containerStyle={styles.card} title="Revenue">
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 15,
          }}>
          <View>
            <Text
              style={{
                fontWeight: SIZES.fontWeight1,
                fontSize: 16,
                color: COLORS.white,
              }}>
              Доход
            </Text>
            <Text
              style={{
                fontWeight: SIZES.fontWeight1,
                fontSize: 10,
                color: COLORS.grayText,
              }}>
              Revenue
            </Text>
          </View>
          <Text style={{ color: COLORS.grayText }}>
            Всего {totalAverageSum} UZS
          </Text>
        </View>
      </Card>
      <View style={{ paddingBottom: 100 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topBarBtn: {
    backgroundColor: '#2E3641',
    borderRadius: 5,
    borderWidth: 0.167,
    borderColor: '#000000',
    height: 30,
    width: 114,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarText: {
    fontWeight: SIZES.fontWeight1,
    fontSize: 14,
    textAlign: 'center',
    color: COLORS.white,
  },
  card: {
    backgroundColor: COLORS.grayPlaceholder,
    borderColor: COLORS.grayPlaceholder,
    borderRadius: 6,
    height: 210,
    width: SIZES.width - 30,
  },
  chosenCardStyle: {
    borderColor: COLORS.blue,
  },
  priceText: {
    fontSize: SIZES.body5,
    fontWeight: SIZES.fontWeight2,
  },
  equalMargin: {
    marginTop: 10,
  },
  guestName: {
    color: COLORS.softBlue,
    fontSize: 16,
    fontWeight: SIZES.fontWeight3,
  },
  dotBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 50,
    marginRight: 6,
  },
  lineStyle: {
    maxWidth: 222,
    height: 10,
    borderRadius: 50,
    marginRight: 6,
  },

  thirdCardDotMargin: {
    marginBottom: 5,
  },
  donutBlock: {
    width: 140,
    marginRight: 50,
    marginTop: 5,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function mapStateToProps({ channelsReducer, annualReducer, hotelReducer }) {
  const {
    loading,
    chosenDateRange,
    channelsData,
    totalRevenue,
    totalSoldNights,
    totalAverageSum,
    error,
  } = channelsReducer;
  const { chosenYear, annualData } = annualReducer;
  const { hotelID } = hotelReducer;
  return {
    loading,
    chosenDateRange,
    channelsData,
    totalRevenue,
    totalSoldNights,
    totalAverageSum,
    error,
    chosenYear,
    annualData,
    hotelID,
  };
}

export default connect(mapStateToProps)(Details);
