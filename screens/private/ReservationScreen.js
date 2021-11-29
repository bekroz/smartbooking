import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import AwesomeLoading from 'react-native-awesome-loading';
import moment from 'moment';
// Theme
import { COLORS, SIZES } from '../../constants/theme';
// Icons
import searchIcon from '../../images/search.png';
import moonIcon from '../../images/moon.png/';
import personIcon from '../../images/person.png/';
// Components
import useApi from '../../utils/useApi';
import {
  ConfirmedStatus,
  InHouseStatus,
  CheckOutStatus,
  CanceledStatus,
  NoShowStatus,
} from '../../components/Reservations/StatusView';

export default function ReservationScreen() {
  const handleSearchButton = () => {
    console.log('handleSearchButton is fired!');
  };

  const [hotelAllReservationsData, setHotelAllReservationsData] = useState([]);
  const { getHotelAllReservationsData } = useApi();
  const [refreshed, setRefreshed] = useState(false);
  const [hotelID, setHotelID] = useState(48);
  const [pageIndex, setPageIndex] = useState(1);
  const [data, setData] = useState(null);

  const getUpdatedData = async (page = pageIndex) => {
    let params = {
      hotelID: '48',
      date_range_type: 'type_stay_dates',
      start_date: '2021-10-11',
      end_date: '2021-11-30',
      page: page,
    };
    console.log('====================================');
    console.log(params);
    console.log('====================================');
    try {
      await getHotelAllReservationsData(params).then(response => {
        // console.log('THIS IS RESERVATION DATA YOU WANT TO GET =>>> ');
        // console.log(response);
        // setData({ response });
        let existingReservations = hotelAllReservationsData;
        response.forEach(element => {
          existingReservations.push(element);
        });
        setHotelAllReservationsData(existingReservations);
        setRefreshed(true);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUpdatedData();
    // getHotelAllReservationsData();
    // hotelAllReservationsData.push(data);
  }, []);

  // console.log(hotelAllReservationsData);
  // checkinDate: incomingData.checkin,
  // checkoutDate: incomingData.checkout,
  // totalNights: incomingData.nights,
  // totalGuests: incomingData.total_guests,
  // guestFirstName: incomingData.guest.last_name,
  // guestLastName: incomingData.guest.first_name,
  // totalRooms: incomingData.total_rooms,
  // createdDate: incomingData.created_at,
  // sourceName: incomingData.source_name,
  // totalSum: incomingData.total_sum,
  // currency: incomingData.currency,
  // status: incomingData.status,  console.log(hotelAllReservationsData);

  console.log(hotelAllReservationsData.length);

  async function addPageIndex() {
    setPageIndex(pageIndex + 1);
    try {
      await getUpdatedData(pageIndex);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
      <View>
        <View style={styles.titleContainer}>
          <Text style={[styles.headerTitle, { color: COLORS.white }]}>
            Бронирования
          </Text>
          <TouchableOpacity style={styles.search} onPress={addPageIndex}>
            <View>
              <Image source={searchIcon} />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.topBarButtonsContainer}>
            <TouchableOpacity style={styles.topBarBtn} onPress={getUpdatedData}>
              <Text style={styles.topBarText}>Подтверждено</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.topBarBtn}>
              <Text style={styles.topBarText}>01 Sep - 30 Sep</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.topBarBtn, { backgroundColor: 'black' }]}>
              <Text style={styles.topBarText}>01 Sep - 30 Sep</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{ marginTop: 10, paddingBottom: 10, alignItems: 'center' }}>
            <Text style={{ color: COLORS.grayText }}>
              {hotelAllReservationsData?.length} бронирования
            </Text>
          </View>
        </View>
        {/* CARDS */}

        <ScrollView>
          {/* FIRST Card */}
          {hotelAllReservationsData?.map(reservation => (
            <Card
              key={reservation.id}
              containerStyle={styles.card}
              title="Guests">
              {/* LEFT Side Content */}
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View style={{ marginBottom: 15, alignItems: 'center' }}>
                  <Text style={{ color: COLORS.grayText }}>Дата заезда:</Text>
                  <Text style={{ color: COLORS.white }}>
                    {' '}
                    {refreshed
                      ? moment(reservation.checkin).format('DD.MM.YYYY')
                      : '----'}
                  </Text>
                </View>

                {/* Small Vertical Divider */}
                <Divider
                  orientation="vertical"
                  width={0.5}
                  left={45}
                  top={42}
                  height={12}
                  color={COLORS.blue}
                  position="absolute"
                />
                <View
                  style={{
                    marginBottom: 15,
                    marginTop: 10,
                    alignItems: 'center',
                  }}>
                  <Text style={{ color: COLORS.grayText }}>Дата выезда:</Text>
                  <Text style={{ paddingTop: 5, color: COLORS.white }}>
                    {refreshed
                      ? moment(reservation?.checkout).format('DD.MM.YYYY')
                      : '----'}
                    {/*  */}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Image source={moonIcon} />
                  <Text style={{ color: COLORS.white }}>
                    {' '}
                    {refreshed ? reservation?.nights : '- -'}
                  </Text>
                  <Image style={{ marginLeft: 10 }} source={personIcon} />
                  <Text style={{ color: COLORS.white }}>
                    {' '}
                    {refreshed ? reservation?.total_guests : '- -'}
                  </Text>
                </View>
              </View>

              <Divider
                orientation="vertical"
                leftWidth={1}
                left={115}
                height={130}
                color="#404040"
                position="absolute"
              />

              {/* LEFT-SIDE content */}
              <View
                style={{
                  position: 'absolute',
                  flexDirection: 'row',
                  position: 'absolute',
                  left: 110,
                  flexDirection: 'row',
                  marginLeft: 20,
                }}>
                {/* GuestDetailsView */}
                <View
                  style={{
                    height: 150,
                    width: 140,
                  }}>
                  <Text style={styles.guestName}>
                    {refreshed
                      ? `${reservation?.guest.first_name} ${reservation?.guest.last_name}`
                      : '--------'}
                  </Text>
                  <View>
                    <Text style={[styles.equalMargin, { color: COLORS.white }]}>
                      {refreshed ? reservation?.total_rooms : '-'} номера
                    </Text>
                    <Text style={[styles.equalMargin, { color: COLORS.white }]}>
                      {refreshed
                        ? moment(reservation?.created_at).format('DD.MM.YYYY')
                        : '---- -- --'}
                    </Text>
                    <Text
                      style={[
                        styles.equalMargin,
                        { fontSize: 16, color: COLORS.white },
                      ]}>
                      {reservation?.source_name}
                    </Text>
                    <Text style={[styles.greenPriceText, styles.equalMargin]}>
                      {refreshed ? reservation?.total_sum : '-------'} UZS
                    </Text>
                  </View>
                </View>
                {reservation?.status == 'confirmed' && <ConfirmedStatus />}
                {reservation?.status == 'in_house' && <InHouseStatus />}
                {reservation?.status == 'check_out' && <CheckOutStatus />}
                {reservation?.status == 'canceled' && <CanceledStatus />}
                {reservation?.status == 'no_show' && <NoShowStatus />}
              </View>
            </Card>
          ))}
          {refreshed && (
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                backgroundColor: '#212831',
                width: SIZES.width - 20,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 15,
                borderRadius: 6,
              }}
              onPress={addPageIndex}>
              <Text
                style={{ color: COLORS.blue, fontWeight: '500', fontSize: 16 }}>
                Показать ещё
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
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    alignContent: 'center',
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: '700',
    left: 15,
  },
  search: {
    left: 55,
    padding: 10,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10,
    marginRight: 10,
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
  card: {
    backgroundColor: '#212831',
    borderColor: '#212831',
    height: 167,
    width: SIZES.width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 0,
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
  guestName: {
    color: COLORS.blue,
    fontSize: SIZES.body5,
    width: 80,
    fontWeight: SIZES.fontWeight3,
    height: 40,
  },
});
