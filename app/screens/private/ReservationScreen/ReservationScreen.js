import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import moment from 'moment';
// Theme
import { COLORS, SIZES } from '../../../constants/theme';
// Icons
import { MoonSvg, PersonSvg } from '../../../assets/icons/SvgIcons';
// Components
import {
  ConfirmedStatus,
  InHouseStatus,
  CheckOutStatus,
  CanceledStatus,
  NoShowStatus,
} from '../../../components/Reservations';
// Helpers
import { wordTruncator, numberWithSpaces } from '../../../helpers';
// API
import {
  getData,
  getNextPageData,
} from '../../../redux/actions/reservationAction';
// import { store } from '../../../redux/store';
import { connect } from 'react-redux';

const ReservationScreen = ({
  navigation,
  refreshing,
  reservationData,
  isLastPage,
}) => {
  setTimeout(() => console.log(reservationData), 1000);
  const typeStayDates = ['Бронирование', 'Заезд', 'Выезд', 'Проживание'];
  const statuses = [
    'Подтверждено',
    'Оплачено',
    'В номере',
    'Выехал',
    'Не заезд',
  ];

  const outgoingData = {
    hotelID: 48,
    date_range_type: 'type_stay_dates',
    start_date: '2021-08-11',
    end_date: '2021-11-30',
    page: 1,
  };

  // const wait = timeout => {
  //   return new Promise(resolve => setTimeout(resolve, timeout));
  // };
  // const onPullToRefresh = React.useCallback(() => {
  //   wait(500).then(() => getData(outgoingData));
  // }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData(outgoingData);
    });

  return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    getData(outgoingData);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Бронирования</Text>
        </View>
        <View>
          <View style={styles.topBarButtonsContainer}>
            <TouchableOpacity style={styles.topBarBtn}>
              <Text style={styles.topBarText}>{typeStayDates[0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.topBarBtn}>
              <Text style={styles.topBarText}>01 Sep - 30 Sep</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.reservationsNumberContainer}>
            <Text style={styles.reservationsNumber}>
              {!refreshing
                ? `${reservationData?.length} бронирования`
                : 'Загружается ...'}
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
              onRefresh={
                {}
                // onPullToRefresh
              }
              tintColor={'white'}
            />
          }>
          {/* All Cards */}
          {!refreshing
            ? reservationData?.map((reservation, index) => (
                <Card key={index} containerStyle={styles.card} title="Guests">
                  {/* LEFT Side Content */}
                  <View style={styles.cardLeftSideContent}>
                    <View style={styles.dateContainer}>
                      <View styles={styles.dateDescriptionContainer}>
                        <Text style={styles.dateDescription}>Дата заезда:</Text>
                      </View>
                      <Text style={styles.date}>
                        {moment(reservation.checkin).format('DD.MM.YYYY')}
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
                        {moment(reservation.checkout).format('DD.MM.YYYY')}
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
                          {moment(reservation.created_at).format('DD.MM.YYYY')}
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
                </Card>
              ))
            : 'sadad'}
          {isLastPage ? (
            <View style={styles.noMoreDataContainer}>
              <Text style={styles.noMoreDataAlertText}>
                Все данные загружены
              </Text>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.showMoreButton}
              onPress={getNextPageData(outgoingData)}>
              <Text style={styles.showMoreText}>
                {refreshing ? (
                  'Показать ещё'
                ) : (
                  <ActivityIndicator
                    animating={true}
                    color={COLORS.white}
                    marginTop={5}
                  />
                )}
              </Text>
            </TouchableOpacity>
          )}
          <View
            style={{
              paddingBottom: 240,
            }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

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
  noMoreDataContainer: {
    alignSelf: 'center',
    backgroundColor: '#212831',
    width: SIZES.width - 20,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    borderRadius: 6,
  },
  noMoreDataAlertText: {
    color: COLORS.grayText,
    fontWeight: '500',
    fontSize: 16,
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

function mapStateToProps({ reservationReducer }) {
  console.log('====================================');
  console.log('THIS IS STATE =>>>>>');
  console.log('====================================');
  // console.log(reservationReducer);
  return {
    refreshing: reservationReducer.refreshing,
    reservationData: reservationReducer.reservationData,
    isLastPage: reservationReducer.isLastPage,
    lastPage: reservationReducer.lastPage,
    pageIndex: reservationReducer.pageIndex,
    error: reservationReducer.error,
  };
}

export default connect(mapStateToProps)(ReservationScreen);
