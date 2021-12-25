import React, { useEffect, useCallback, useState } from 'react';
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
import { SpaceForScroll } from '../../../components';
import { DotView } from '../../../components';
// Middleware
import { getChannelsDataMiddleware } from '../../../redux/middlewares';
import { connect } from 'react-redux';
import DonutView from '../DonutView';
import LineView from '../LineView';
import FadeInView from '../../FadeInView/FadeInView';
import { numberWithSpaces } from '../../../helpers';

const ChannelsDataShow = ({
  navigation,
  loading,
  channelsData,
  totalRevenue,
  totalSoldNights,
  totalAverageSum,
  error,
  chosenMonthRange,
  annualData,
  hotelID,
}) => {
  const onPullToRefresh = useCallback(() => {
    getChannelsDataMiddleware();
  }, []);

  useEffect(() => {
    getChannelsDataMiddleware();
  }, []);

  const [refreshing, setRefreshing] = useState(false);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onPullToRefresh}
          tintColor={COLORS.white}
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
            {dayjs(chosenMonthRange.startDate).format('D MMM')} -{' '}
            {dayjs(chosenMonthRange.endDate).format('D MMM')}
          </Text>
        </TouchableOpacity>
      </View>

      {/* FIRST Card */}
      {!loading ? (
        <Card containerStyle={styles.card} title="Revenue">
          <FadeInView>
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
              <Text style={styles.totalAverageSumText}>
                Всего {totalAverageSum} UZS
              </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <DonutView />
              {/* Color and Title */}
              <View style={{ flex: 1, top: -15 }}>
                {/* Dots */}
                {channelsData.map((channel, index) => (
                  <View key={index}>
                    <DotView sourceName={channel.source_name} />
                  </View>
                ))}
              </View>
            </View>
          </FadeInView>
        </Card>
      ) : null}
      {/* Second Card */}
      <Card containerStyle={styles.card} title="Revenue">
        {/* Card Context View */}
        {!loading ? (
          <FadeInView>
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
                {totalSoldNights} ночей
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              {/* LEFT Donut View */}

              {/* <Donut /> */}
              <DonutView />

              {/* Color and Title */}
              <View style={{ flex: 1, top: -15 }}>
                {/* Dots */}
                {channelsData.map((channel, index) => (
                  <View>
                    <DotView key={index} sourceName={channel?.source_name} />
                  </View>
                ))}
              </View>
            </View>
          </FadeInView>
        ) : (
          <ActivityIndicator
            animating={true}
            color={COLORS.white}
            marginTop={70}
          />
        )}
      </Card>
      {/* Third Card */}
      <Card containerStyle={[styles.card, { height: 280 }]} title="Revenue">
        {/* Card Context View */}
        {!loading ? (
          <FadeInView>
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
                Всего {totalRevenue} UZS
              </Text>
            </View>

            {/* Color Line and Title */}

            <View
              style={{
                marginBottom: 5,
              }}>
              {channelsData?.map((channel, index) => (
                <>
                  <View style={styles.dotBlock} key={index}>
                    {channel.source_name === 'От стойки' && (
                      <LineView lineWidth={100} />
                    )}

                    <Text style={{ color: COLORS.white }}>
                      {numberWithSpaces(channel.average_revenue)}{' '}
                      {channel.source_name}
                    </Text>
                    {/* <BookingLine  */}
                  </View>
                  {/* DOTS */}
                </>
              ))}
            </View>
          </FadeInView>
        ) : (
          <ActivityIndicator
            animating={true}
            color={COLORS.white}
            marginTop={110}
          />
        )}
      </Card>
      <SpaceForScroll />
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
  totalAverageSumText: {
    color: COLORS.grayText,
  },
});

function mapStateToProps({
  channelsReducer,
  annualReducer,
  hotelReducer,
  dateReducer,
}) {
  const {
    loading,
    channelsData,
    totalRevenue,
    totalSoldNights,
    totalAverageSum,
    error,
  } = channelsReducer;
  const { annualData } = annualReducer;
  const { hotelID } = hotelReducer;
  const { chosenMonthRange } = dateReducer;
  return {
    loading,
    chosenMonthRange,
    channelsData,
    totalRevenue,
    totalSoldNights,
    totalAverageSum,
    error,
    annualData,
    hotelID,
  };
}

export default connect(mapStateToProps)(ChannelsDataShow);
