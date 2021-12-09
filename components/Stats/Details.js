import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';
// Theme
import { COLORS, SIZES } from '../../constants/theme';
// Components
import {
  ByUserDot,
  SitesDot,
  TelephoneDot,
  BookingDot,
  TraminaDot,
  DoloresDot,
  OtherDot,
} from '../Reservations/StatusView/DotView';
// Components
import ByUserLine from '../Stats/Lines/ByUserLine';
import TelephoneLine from '../Stats/Lines/TelephoneLine';
import SitesLine from '../Stats/Lines/SitesLine';
import BookingLine from '../Stats/Lines/BookingLine';
import TraminaLine from '../Stats/Lines/TraminaLine';
import DoloresLine from '../Stats/Lines/DoloresLine';
import OtherLine from '../Stats/Lines/OtherLine';

import useApi from '../../utils/useApi';
import { useEffect } from 'react';
import { useState } from 'react';
import DonutView from '../../removables/DonutView';
import { numberWithSpaces } from '../../helpers';

export default function Details() {
  const currency = 'UZS';
  const hotelRoomPrice = '235 000';
  const maxWidth = 250;

  // API
  const { getStatisticsByCategory } = useApi();

  const [statsData, setStatsData] = useState(null);
  const [chosenDateRange, setChosenDateRange] = useState(null);
  const [overallData, setOverallData] = useState(null);
  // Change this hardcoded date range to chosen calendar date
  const [refreshed, setRefreshed] = useState(false);

  const dateRange = {
    start_date: '2021-10-11',
    end_date: '2021-11-30',
  };

  const getUpdatedData = async () => {
    try {
      await getStatisticsByCategory(dateRange).then(response => {
        setStatsData(response.data.data);
        setOverallData({
          totalRevenue: response.data.total_revenue,
          totalSoldNights: response.data.total_sold_night,
          totalAverageSum: response.data.total_average_sum,
        });
        setRefreshed(true);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setRefreshed(false);
    getUpdatedData();
  }, []);

  // RegExp to add space between numbers
  function numberWithSpaces(x) {
    var parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return parts.join('.');
  }

  const sourceNameArray = [
    'От стойки',
    'Телефон',
    'Dolores',
    'Сайт',
    'Booking.com',
    'Трамина',
  ];
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 5,
            paddingBottom: 0,
            paddingTop: 5,
          }}>
          <TouchableOpacity
            style={[
              styles.topBarBtn,
              {
                backgroundColor: '#292F3A',
                borderColor: '#5F85DB',
                width: SIZES.width - 30,
                height: 35,
              },
            ]}>
            <Text style={[styles.topBarText, { fontSize: 15 }]}>
              01 Sep - 30 Sep
            </Text>
          </TouchableOpacity>
        </View>
        {/* FIRST Card */}
        <Card containerStyle={styles.card} title="Revenue">
          {/* Card Context View */}

          {refreshed ? (
            <>
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
                  Всего {numberWithSpaces(overallData?.totalAverageSum)} UZS
                </Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                {/* LEFT Donut View */}
                <View style={styles.donutBlock}>
                  {/* <Donut /> */}
                  <DonutView />
                </View>
                {/* Color and Title */}
                <View style={{ flex: 1, top: -15 }}>
                  {/* Dots */}
                  <ByUserDot />
                  <TelephoneDot />
                  <SitesDot />
                  <BookingDot />
                  <TraminaDot />
                  <DoloresDot />
                  <OtherDot />
                </View>
              </View>
            </>
          ) : (
            <ActivityIndicator
              animating={true}
              color={COLORS.white}
              marginTop={70}
            />
          )}
        </Card>
        {/* SECOND Card */}
        <Card containerStyle={styles.card} title="Revenue">
          {/* Card Context View */}
          {refreshed ? (
            <>
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
                    К-ство проданных ночей
                  </Text>
                  <Text
                    style={{
                      fontWeight: SIZES.fontWeight1,
                      fontSize: 10,
                      color: COLORS.grayText,
                    }}>
                    Room Nights
                  </Text>
                </View>
                <Text style={{ color: COLORS.grayText }}>
                  {numberWithSpaces(overallData?.totalSoldNights)} ночей
                </Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                {/* LEFT Donut View */}
                <View style={styles.donutBlock}>
                  {/* <Donut /> */}
                  <DonutView />
                </View>
                {/* Color and Title */}
                <View style={{ flex: 1, top: -15 }}>
                  <ByUserDot />
                  <TelephoneDot />
                  <SitesDot />
                  <BookingDot />
                  <TraminaDot />
                  <DoloresDot />
                  <OtherDot />
                </View>
              </View>
            </>
          ) : (
            <ActivityIndicator
              animating={true}
              color={COLORS.white}
              marginTop={70}
            />
          )}
        </Card>
        {/* THIRD Card */}
        <Card containerStyle={[styles.card, { height: 280 }]} title="Revenue">
          {/* Card Context View */}
          {refreshed ? (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 15,
                }}>
                <View
                  style={{
                    width: 167,
                    marginRight: 10,
                  }}>
                  <Text
                    style={{
                      fontWeight: SIZES.fontWeight1,
                      fontSize: 16,
                      color: COLORS.white,
                    }}>
                    Средняя цена номера
                  </Text>
                </View>

                <Text style={{ color: COLORS.grayText }}>
                  Всего {numberWithSpaces(overallData?.totalRevenue)} UZS
                </Text>
              </View>

              {/* Color Line and Title */}

              <View
                style={{
                  marginBottom: 5,
                }}>
                {statsData?.map((dot, index) => (
                  <View style={styles.dotBlock}>
                    {dot?.source_name === 'От стойки' && (
                      <ByUserLine lineWidth={100} />
                    )}

                    {dot?.source_name === 'Телефон' && (
                      <TelephoneLine lineWidth={50} />
                    )}

                    {dot?.source_name === 'Dolores' && (
                      <DoloresLine lineWidth={50} />
                    )}

                    {dot?.source_name === 'Сайт' && (
                      <SitesLine lineWidth={50} />
                    )}
                    {dot?.source_name === 'Booking.com' && (
                      <BookingLine lineWidth={50} />
                    )}

                    {dot?.source_name === 'Трамина' && (
                      <TraminaLine lineWidth={50} />
                    )}

                    <Text style={{ color: COLORS.white }}>
                      {numberWithSpaces(dot?.average_revenue)}{' '}
                      {dot?.source_name}
                    </Text>
                    {/* <BookingLine  */}
                  </View>
                ))}
              </View>

              {/* DOTS */}
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: 115,
                    marginRight: 5,
                  }}>
                  <View style={[styles.dotBlock, styles.thirdCardDotMargin]}>
                    {statsData?.source_name === 'От стойки' ? (
                      <ByUserDot />
                    ) : (
                      statsData?.source_name === 'Booking.com' && <BookingDot />
                    )}
                  </View>
                </View>
              </View>
            </>
          ) : (
            <ActivityIndicator
              animating={true}
              color={COLORS.white}
              marginTop={110}
            />
          )}
        </Card>
        <View
          style={{
            paddingBottom: 180,
          }}
        />
      </ScrollView>
    </>
  );
}

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
    // fontFamily: 'SF Pro Display',
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
