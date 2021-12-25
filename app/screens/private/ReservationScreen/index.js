import React, { useEffect, useCallback, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import dayjs from 'dayjs';
// Theme
import { COLORS, SIZES } from '../../../constants/theme';
// Icons
import { MoonSvg, PersonSvg } from '../../../assets/icons/SvgIcons';
// Components
import {
  CanceledStatus,
  CheckOutStatus,
  ConfirmedStatus,
  InHouseStatus,
  NoShowStatus,
} from '../../../components/ScreenComponents/Reservation';
// Helpers
import { wordTruncator, numberWithSpaces } from '../../../helpers';
// API
import {
  getHotelsDataMiddleware,
  getReservationDataMiddleware,
  getReservationNextPageDataMiddleware,
  setHotelIDMiddleware,
} from '../../../redux/middlewares';
import {
  NoMoreDataAlert,
  LoadingIndicator,
  SpaceForScroll,
} from '../../../components';
import { connect } from 'react-redux';
import { LoadingCard } from '../../../components/ScreenComponents/Reservation';
import FadeInView from '../../../components/FadeInView/FadeInView';

const ReservationScreen = ({
  navigation,
  initialLoading,
  nextPageLoading,
  reservationData,
  isLastPage,
  pageIndex,
  reservationLength,
  chosenMonthRange,
  reservationStatus,
  reservationType,
}) => {
  async function getDetailsDataOnTabPress() {
    try {
      await getHotelsDataMiddleware();
      await setHotelIDMiddleware();
      await getReservationDataMiddleware();
    } catch (error) {
      console.error(error);
    }
  }

  const onPullToRefresh = useCallback(() => {
    getDetailsDataOnTabPress();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDetailsDataOnTabPress();
    });

    return unsubscribe;
  }, [navigation]);

  const [refreshing, setRefreshing] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Бронирования</Text>
        </View>
        <View>
          <View style={styles.topBarButtonsContainer}>
            <TouchableOpacity style={styles.topBarBtn}>
              <Text style={styles.topBarText}>{reservationStatus}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.topBarBtn}>
              <Text style={styles.topBarText}>{reservationType}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.topBarBtn}>
              <Text style={styles.topBarText}>
                {dayjs(chosenMonthRange.startDate).locale('ru').format('D MMM')}{' '}
                - {dayjs(chosenMonthRange.endDate).locale('ru').format('D MMM')}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.reservationsNumberContainer}>
            <Text style={styles.reservationsNumber}>
              {initialLoading
                ? 'Загружается ...'
                : `${reservationLength} бронирования`}
            </Text>
          </View>
        </View>
        {/* Top divider */}
        <Divider
          orientation="horizontal"
          leftWidth={0.5}
          color={COLORS.grayPlaceholderBorder}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onPullToRefresh}
              tintColor={'white'}
            />
          }>
          {/* All Cards */}
          {!initialLoading ? (
            reservationData.map((reservation, index) => (
              <Card key={index} containerStyle={styles.card} title="Guests">
                {/* LEFT Side Content */}
                <FadeInView>
                  <View style={styles.cardLeftSideContent}>
                    <View style={styles.dateContainer}>
                      <View styles={styles.dateDescriptionContainer}>
                        <Text style={styles.dateDescription}>Дата заезда:</Text>
                      </View>
                      <Text style={styles.date}>
                        {dayjs(reservation.checkin).format('DD.MM.YYYY')}
                      </Text>
                    </View>
                    {/* Small Divider */}
                    <Divider
                      orientation="vertical"
                      width={0.5}
                      left={45}
                      top={45}
                      height={12}
                      color={COLORS.blue}
                      position="absolute"
                    />
                    <View style={[styles.dateContainer, { marginTop: 10 }]}>
                      <View styles={styles.dateDescriptionContainer}>
                        <Text style={styles.dateDescription}>Дата выезда:</Text>
                      </View>
                      <Text style={styles.date}>
                        {dayjs(reservation.checkout).format('DD.MM.YYYY')}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <MoonSvg />
                      <Text style={{ color: COLORS.white }}>
                        {' '}
                        {reservation.nights}
                      </Text>
                      <View style={{ marginLeft: 10 }}></View>
                      <PersonSvg />
                      <Text style={{ color: COLORS.white }}>
                        {' '}
                        {reservation.total_guests}
                      </Text>
                    </View>
                  </View>
                  {/* Long divider */}
                  <Divider
                    orientation="vertical"
                    leftWidth={1}
                    left={115}
                    height={130}
                    color="#404040"
                    position="absolute"
                  />
                  {/* RIGHT content */}
                  <View style={styles.cardRightSideContent}>
                    <View style={styles.guestDetailsContainer}>
                      <Text style={styles.guestName}>
                        {wordTruncator(reservation.guest.first_name, 8)}
                      </Text>
                      <Text style={styles.guestName}>
                        {wordTruncator(reservation.guest.last_name, 8)}
                      </Text>
                      <View>
                        <Text
                          style={[styles.equalMargin, { color: COLORS.white }]}>
                          {reservation.total_rooms} номера
                        </Text>
                        <Text
                          style={[styles.equalMargin, { color: COLORS.white }]}>
                          {dayjs(reservation.created_at).format('DD.MM.YYYY')}
                        </Text>
                        <Text
                          style={[
                            styles.equalMargin,
                            { fontSize: 16, color: COLORS.white },
                          ]}>
                          {reservation.source_name}
                        </Text>
                        <Text
                          style={[styles.greenPriceText, styles.equalMargin]}>
                          {numberWithSpaces(reservation.total_sum)} UZS
                        </Text>
                      </View>
                    </View>
                    <View style={styles.statusContainer}>
                      {reservation.status == 'confirmed' && <ConfirmedStatus />}
                      {reservation.status == 'in_house' && <InHouseStatus />}
                      {reservation.status == 'check_out' && <CheckOutStatus />}
                      {reservation.status == 'canceled' && <CanceledStatus />}
                      {reservation.status == 'no_show' && <NoShowStatus />}
                    </View>
                  </View>
                </FadeInView>
              </Card>
            ))
          ) : (
            <LoadingCard />
          )}
          {!initialLoading && !isLastPage ? (
            <TouchableOpacity
              style={styles.showMoreButton}
              onPress={() => getReservationNextPageDataMiddleware()}>
              {nextPageLoading ? (
                <LoadingIndicator />
              ) : (
                <Text style={styles.showMoreText}>Показать ещё</Text>
              )}
            </TouchableOpacity>
          ) : (
            isLastPage && <NoMoreDataAlert />
          )}
          <SpaceForScroll />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

function mapStateToProps({ reservationReducer, hotelReducer, dateReducer }) {
  const {
    initialLoading,
    nextPageLoading,
    reservationData,
    isLastPage,
    pageIndex,
    reservationLength,
    reservationStatus,
    reservationType,
  } = reservationReducer;
  const { hotelList, hotelID } = hotelReducer;
  const { chosenMonthRange } = dateReducer;

  return {
    initialLoading,
    nextPageLoading,
    reservationData,
    isLastPage,
    pageIndex,
    reservationLength,
    hotelList,
    hotelID,
    chosenMonthRange,
    reservationStatus,
    reservationType,
  };
}

export default connect(mapStateToProps)(ReservationScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkBackground,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: COLORS.white,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
    height: 50,
    width: SIZES.width,
  },
  topBarBtn: {
    backgroundColor: '#292F3A',
    borderRadius: 5,
    borderColor: '#5F85DB',
    borderWidth: 0.167,
    height: 40,
    width: 114,
    marginTop: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarText: {
    // fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 13,
    textAlign: 'center',
    color: COLORS.white,
  },
  reservationsNumberContainer: {
    marginTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  reservationsNumber: {
    color: COLORS.grayText,
  },
  card: {
    backgroundColor: '#212831',
    borderColor: '#212831',
    height: 167,
    width: SIZES.width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 0,
    marginRight: 20,
  },
  cardLeftSideContent: {
    alignItems: 'center',
  },
  dateContainer: {
    marginBottom: 15,
    alignItems: 'center',
  },
  dateDescriptionContainer: {
    marginBottom: 3,
  },
  dateDescription: {
    color: COLORS.grayText,
  },
  date: {
    color: COLORS.white,
  },
  greenPriceText: {
    fontSize: SIZES.body5,
    fontWeight: SIZES.fontWeight2,
    color: COLORS.greenProgress,
  },
  bluePriceText: {
    fontSize: SIZES.body5,
    fontWeight: SIZES.fontWeight2,
    color: COLORS.blue,
  },
  equalMargin: {
    marginTop: 5,
  },
  showMoreButton: {
    alignSelf: 'center',
    backgroundColor: '#212831',
    width: SIZES.width - 20,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    borderRadius: 6,
  },
  showMoreText: {
    color: COLORS.blue,
    fontWeight: '500',
    fontSize: 16,
  },
  cardRightSideContent: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'row',
    left: 110,
    marginLeft: 20,
  },
  guestDetailsContainer: {
    height: 150,
    width: 140,
  },
  guestName: {
    color: COLORS.blue,
    fontSize: SIZES.body5,
    width: 100,
    fontWeight: SIZES.fontWeight3,
  },
  statusContainer: {
    right: 0,
    alignSelf: 'flex-start',
  },
});
