import React, { useEffect, useCallback, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  FlatList,
} from 'react-native';
import dayjs from 'dayjs';
import { Card } from 'react-native-elements/dist/card/Card';
// Theme
import { COLORS, POSITIONING, SIZES } from '../../../../constants';
// Components
import {
  SpaceForScroll,
  CalendarModal,
  DotView,
  CollapseButton,
  WaterMarkHider,
  FadeInView,
  BarChart,
  RevenueDonut,
  StaysDonut,
} from '../../../../components';

// Middleware
import { connect } from 'react-redux';
import { getChannelsDataMiddleware } from '../../../../redux/middlewares';
// Helpers
import { dottedTruncator, numberWithSpaces } from '../../../../helpers';

const ChannelsDataShow = ({
  navigation,
  loading,
  channelsData,
  totalRevenue,
  totalSoldNights,
  totalAverageSum,
  error,
  chosenStartDate,
  chosenEndDate,
  annualData,
  hotelID,
}) => {
  const [calendarModalVisible, setCalendarModalVisible] = useState(false);
  const [loadFinished, setLoadFinished] = useState(false);
  const [revenueBriefView, setRevenueBriefView] = useState(false);
  const [staysBriefView, setStaysBriefView] = useState(false);

  const toggleRevenueCard = () => {
    setRevenueBriefView(!revenueBriefView);
  };
  const toggleStaysCard = () => {
    setStaysBriefView(!staysBriefView);
  };
  const openCalendarModal = () => {
    setCalendarModalVisible(true);
  };
  const closeCalendarModal = () => {
    setCalendarModalVisible(false);
  };

  const onPullToRefresh = useCallback(() => {
    getChannelsDataMiddleware();
  }, []);

  useEffect(() => {
    getChannelsDataMiddleware();
    setTimeout(() => {
      setLoadFinished(true);
    }, 2100);
  }, []);

  let refreshing = false;

  const monthStart = dayjs(chosenStartDate).locale('ru').format('D MMM');
  const monthEnd = dayjs(chosenEndDate).locale('ru').format('D MMM');

  console.log('channelsData', channelsData);
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
      <View style={styles.monthRangeButtonContainer}>
        <TouchableOpacity
          style={[
            styles.topBarBtn,
            {
              backgroundColor: '#292F3A',
              borderColor: COLORS.blue,
              width: SIZES.width - 30,
              height: 35,
            },
          ]}
          onPress={openCalendarModal}>
          <Text style={[styles.topBarText, { fontSize: 15 }]}>
            {monthStart} - {monthEnd}
          </Text>
        </TouchableOpacity>
      </View>

      {/* FIRST Card */}
      <Card containerStyle={[styles.card, { height: 'auto' }]} title="Revenue">
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 15,
            zIndex: 1,
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

        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'yellow',
            // height: 100,
          }}>
          <View>
            <RevenueDonut channelsData={channelsData} />
            <View
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: COLORS.grayPlaceholder,
                // backgroundColor: 'red',
                opacity: loadFinished ? 0 : 1,
                justifyContent: 'center',
                alignItems: 'center',
                top: -30,
                left: -10,
                zIndex: -1,
              }}>
              <View style={{ top: -10, right: -10 }}>
                <ActivityIndicator />
              </View>
            </View>
          </View>

          {/* Color and Title */}
          <View style={{ flex: 1, top: -10, right: -25 }}>
            {/* Dots */}
            {channelsData.map(({ source_name }, index) => (
              <DotView
                key={index}
                colorIndex={index}
                sourceName={dottedTruncator(source_name, 15)}
              />
            ))}
          </View>
        </View>
        <WaterMarkHider />
      </Card>
      {/* Second Card */}
      <Card containerStyle={[styles.card, { height: 'auto' }]} title="Stays">
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 15,
            zIndex: 1,
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
        <View
          style={{
            width: '100%',
            height: 'auto',
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: '100%',
              width: '50%',
              marginRight: 20,
              top: 10,
            }}>
            <StaysDonut staysData={channelsData} />
            <View
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: COLORS.grayPlaceholder,
                // backgroundColor: 'red',
                opacity: loadFinished ? 0 : 1,
                justifyContent: 'center',
                alignItems: 'center',
                top: -20,
                left: -10,
              }}>
              <View style={{ top: -20, right: -10 }}>
                <ActivityIndicator />
              </View>
            </View>
          </View>

          <View style={{ width: '50%' }}>
            {/* Dots */}
            {channelsData.map((channel, index) => (
              <DotView
                key={index}
                colorIndex={index}
                sourceName={channel?.source_name}
              />
            ))}
          </View>
        </View>
        <WaterMarkHider />
      </Card>

      {/* Third Card */}
      <Card containerStyle={[styles.card, { height: 'auto' }]} title="Channels">
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 15,
            zIndex: 1,
          }}>
          <View style={{ width: 110, marginRight: 15 }}>
            <Text
              style={{
                fontWeight: SIZES.fontWeight1,
                fontSize: 16,
                color: COLORS.white,
              }}>
              Средняя цена номера
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <Text style={styles.totalAverageSumText}>Всего {totalRevenue}</Text>
          </View>
          <Text style={styles.totalAverageSumText}> UZS</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View
            style={{
              flex: 1,
            }}>
            <View
              style={{
                position: 'absolute',
                width: SIZES.width,
                height: '100%',
                backgroundColor: COLORS.grayPlaceholder,
                opacity: 0.5,
                alignSelf: 'center',
                opacity: loadFinished ? 0 : 1,
                justifyContent: 'center',
                zIndex: 1,
              }}>
              <ActivityIndicator top={0} />
            </View>
            <BarChart channelsData={channelsData} />
            <View style={styles.hideWaterMark} />
          </View>
        </View>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.sourceWrapper}>
            {channelsData.map((channel, index) => (
              <View style={styles.sourceItem}>
                <DotView
                  key={index}
                  colorIndex={index}
                  // sourceName={channel?.source_name}
                  sourceName={dottedTruncator(channel?.source_name, 10)}
                />
              </View>
            ))}
          </View>
        </View>
      </Card>
      <SpaceForScroll />
      <CalendarModal
        isVisible={calendarModalVisible}
        close={closeCalendarModal}
        startDate={chosenStartDate}
        endDate={chosenEndDate}
        refreshData={onPullToRefresh}
      />
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
    ...POSITIONING.center,
  },
  topBarText: {
    fontWeight: SIZES.fontWeight1,
    fontSize: 14,
    textAlign: 'center',
    color: COLORS.white,
  },
  monthRangeButtonContainer: {
    flexDirection: 'row',
    marginTop: 5,
    paddingBottom: 0,
    paddingTop: 5,
    ...POSITIONING.center,
  },
  card: {
    backgroundColor: COLORS.grayPlaceholder,
    borderColor: COLORS.grayPlaceholder,
    borderRadius: 6,
    height: 210,
    width: SIZES.width - 30,
    overflow: 'hidden',
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
    ...POSITIONING.center,
  },
  totalAverageSumText: {
    color: COLORS.grayText,
  },
  sourceWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  sourceItem: {
    width: '30%',
    marginHorizontal: 5,
    alignSelf: 'center',
  },
  hideWaterMark: {
    flex: 1,
    width: 160,
    height: 36,
    backgroundColor: COLORS.grayPlaceholder,
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    alignSelf: 'flex-start',
    left: -5,
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
  const { chosenStartDate, chosenEndDate } = dateReducer;
  return {
    loading,
    chosenStartDate,
    chosenEndDate,
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
