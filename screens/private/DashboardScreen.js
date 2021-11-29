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
import { MultiArcCircle } from 'react-native-circles';
// Theme
import { COLORS, POSITIONING, SIZES } from '../../constants/theme';
// Icons
import leftArrow from '../../images/leftArrow.png';
import rightArrow from '../../images/rightArrow.png';
import dropdown from '../../images/dropdown.png';
import addButton from '../../images/addButton.png';
// Components
import DayPick from '../../components/Dashboard/DayPick';
import PercentageCircle from '../../components/Dashboard/PercentageCircle';
import EmptyRoomsCircle from '../../components/Dashboard/EmptyRoomsCircle';
import useApi from '../../utils/useApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DashboardScreen({ navigation }) {
  // API HANDLERS
  const { getDashboardData } = useApi();

  // // BUTTON HANDLERS
  const [firstView, setFirstView] = useState(true);
  const [refreshed, setRefreshed] = useState(false);
  const [dashboardData, setDashboardData] = useState(null);

  const handleViewChange = () => {
    setFirstView(!firstView);
  };

  const handleAddButtonPress = () => {
    alert('Add button has been fired!');
  };

  const handleArcBarPress = () => {
    const token = AsyncStorage.getItem('token');
    alert('Arc Bar has been fired!');
    getAllHotelPropertiesData(token);
  };

  // useEffect(async () => {
  //   try {
  //     await getDashboardData().then(response => {
  //       const incomingData = response.data.data;
  //       console.log(response.data.data.by_date_data);
  //       // console.log('THIS IS DASHBOARD DATA =>>>>');
  //       // console.log(incomingData);
  //       console.log(incomingData);
  //       const {
  //         available_rooms,
  //         left_arrived,
  //         left_checkout,
  //         live,
  //         max_rooms,
  //       } = incomingData;
  //       // setDashboardData({
  //       //   availableRooms: available_rooms,
  //       //   leftCheckout: left_checkout,
  //       //   leftArrived: left_arrived,
  //       //   live: live,
  //       //   maxRooms: max_rooms,
  //       // });
  //       console.log(
  //         `THIS IS INCOMING GUESTS =>>>> ${incomingData.by_date_data.live}`,
  //       );
  //       setRefreshed(true);
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);

  // console.log(data);

  const [chosenDate, setChosenDate] = useState('2021-11-11');
  const [hotelID, setHotelID] = useState('48');

  useEffect(async () => {
    try {
      await getDashboardData(hotelID, chosenDate).then(response => {
        // console.log(response.data.data);
        const byDateData = response.data.data.by_date_data;
        const todayData = response.data.data.today_data;
        setDashboardData({
          availableRooms: byDateData.available_rooms,
          currentLoad: Number.parseInt(byDateData.current_load),
          leftArrived: byDateData.left_arrived,
          leftCheckout: byDateData.left_checkout,
          live: byDateData.live,
          maxRooms: byDateData.max_rooms,
          shouldArrived: byDateData.should_arrived,
          shouldCheckout: byDateData.should_checkout,
          confirmedQuantity: todayData.confirmed_reservations_data.quantity,
          confirmedRevenue: todayData.confirmed_reservations_data.revenue,
          canceledQuantity: todayData.canceled_reservations_data.quantity,
          canceledRevenue: todayData.canceled_reservations_data.revenue,
        });
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  // console.log(`THIS IS DASHBOARD DATA YOU SET, BRO :) ===>>>`);
  console.log(dashboardData);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
      <ScrollView>
        <View style={[styles.hotelBar, POSITIONING.center]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Comparison')}
            style={styles.dropdownIconStyle}>
            <Text style={styles.hotelBarText}>{dashboardData?.name}</Text>
            <Image source={dropdown} />
          </TouchableOpacity>
        </View>
        <View style={styles.dateBlock}>
          <TouchableOpacity style={styles.arrowIconStyle}>
            <Image source={leftArrow} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.dateText}>{'calendar?.date'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.arrowIconStyle}>
            <Image source={rightArrow} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'center',
            padding: 5,
            marginBottom: 0,
          }}>
          <TouchableOpacity style={{}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: SIZES.fontWeight0,
                color: COLORS.white,
              }}>
              {'calendar?.day'}
            </Text>
          </TouchableOpacity>
        </View>
        {/* Horizontal Calendar Day Picker */}
        <View
          style={{
            alignItems: 'center',
            width: '100%',
            height: 60,
          }}>
          <DayPick />
        </View>
        {/* SemiCircle View goes here */}
        <View
          style={{
            width: SIZES.width,
            height: 170,
            flexDirection: 'row',
          }}>
          {/* FIRST ARC circle */}
          <TouchableOpacity onPress={{}} style={styles.arcBlock}>
            <MultiArcCircle
              radius={50}
              intervals={[
                { start: 0, end: 140 },
                { start: 220, end: 360 },
              ]}
              color="#0ECC38"
              width={10}
            />
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.body2,
                fontWeight: SIZES.fontWeight1,
              }}>
              {dashboardData?.leftArrived}
            </Text>
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.body5,
                fontWeight: SIZES.fontWeight0,
                position: 'absolute',
                bottom: 10,
              }}>
              Заезд
            </Text>
          </TouchableOpacity>
          {/* SECOND ARC circle */}
          <TouchableOpacity onPress={{}} style={styles.arcBlock}>
            <MultiArcCircle
              radius={50}
              intervals={[
                { start: 0, end: 140 },
                { start: 220, end: 360 },
              ]}
              color={COLORS.yellow}
              width={10}
            />
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.body2,
                fontWeight: SIZES.fontWeight1,
              }}>
              {dashboardData?.leftCheckout}
            </Text>

            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.body5,
                fontWeight: SIZES.fontWeight0,
                position: 'absolute',
                bottom: 10,
              }}>
              Выезд
            </Text>
          </TouchableOpacity>
          {/* THIRD ARC circle */}
          <TouchableOpacity onPress={{}} style={styles.arcBlock}>
            <MultiArcCircle
              radius={50}
              intervals={[
                { start: 0, end: 140 },
                { start: 220, end: 360 },
              ]}
              color={COLORS.blue}
              width={10}
            />
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.body2,
                fontWeight: SIZES.fontWeight1,
              }}>
              {dashboardData?.live}
            </Text>
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.body5,
                fontWeight: SIZES.fontWeight0,
                position: 'absolute',
                bottom: 10,
              }}>
              Проживают
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.circleBottomTitles,
            { backgroundColor: 'red' },
          ]}></View>
        {/* GRAY Boxes container */}
        <View style={{ marginBottom: 25 }}>
          {/* FIRST GRAY BOX starts here */}
          <TouchableOpacity style={styles.grayBlock}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={styles.blueBox}>
                <Text
                  style={{
                    fontWeight: SIZES.fontWeight2,
                    color: COLORS.white,
                  }}>
                  {dashboardData?.confirmedQuantity}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: SIZES.fontWeight2,
                    color: COLORS.white,
                  }}>
                  Новые
                </Text>
              </View>
              <View
                style={{
                  left: 80,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: SIZES.fontWeight0,
                    color: COLORS.grayText,
                  }}>
                  {dashboardData?.confirmedRevenue} UZS
                </Text>
              </View>
              <View
                style={{
                  padding: 10,
                  right: 5,
                  position: 'absolute',
                  zIndex: 10,
                  marginLeft: 5,
                  backgroundColor: '#212831',
                }}>
                <Image
                  style={{ tintColor: COLORS.grayText, marginLeft: 5 }}
                  source={rightArrow}
                />
              </View>
            </View>
          </TouchableOpacity>

          {/* SECOND GRAY BOX starts here */}
          <TouchableOpacity style={styles.grayBlock}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={styles.blueTextBlock}>
                <Text
                  style={{ fontWeight: SIZES.fontWeight2, color: COLORS.blue }}>
                  {dashboardData?.canceledQuantity}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: SIZES.fontWeight2,
                    color: COLORS.white,
                  }}>
                  Отмена
                </Text>
              </View>
              <View
                style={{
                  left: 145,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: COLORS.grayText,
                    fontWeight: SIZES.fontWeight0,
                  }}>
                  {dashboardData?.canceledRevenue} UZS
                </Text>
              </View>
              <View style={{ padding: 10, right: 5, position: 'absolute' }}>
                <Image
                  style={{ tintColor: COLORS.grayText }}
                  source={rightArrow}
                />
              </View>
            </View>
          </TouchableOpacity>
          {/* THIRD GRAY BOX starts here */}
          <TouchableOpacity style={styles.grayBlock}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={styles.blueTextBlock}>
                <Text style={styles.blueText}>-</Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: SIZES.fontWeight2,
                    color: COLORS.white,
                  }}>
                  Сообщения
                </Text>
              </View>

              <Text
                style={{
                  fontSize: 18,
                  fontWeight: SIZES.fontWeight0,
                  color: COLORS.grayText,
                  left: 140,
                }}>
                {'-'}
              </Text>

              <View style={{ padding: 10, right: 5, position: 'absolute' }}>
                <Image
                  style={{ tintColor: COLORS.grayText }}
                  source={rightArrow}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 15,
          }}>
          {/* Left Text */}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              zIndex: 999,
              width: SIZES.width / 1.5,
            }}
            onPress={handleViewChange}>
            <View
              style={{
                marginRight: 25,
                width: 150,
              }}>
              <>
                <Text
                  style={{
                    fontWeight: SIZES.fontWeight2,
                    fontSize: SIZES.body2,
                    color: COLORS.white,
                  }}>
                  {firstView ? 'Загрузка' : 'Свободно'}
                </Text>

                <Text
                  style={{
                    fontSize: SIZES.body6,
                    marginTop: 5,
                    color: COLORS.white,
                  }}>
                  на сегодня
                </Text>
              </>
            </View>
            {/* Middle Circle */}
            {firstView ? (
              <PercentageCircle
                currentPercentage={dashboardData?.currentLoad}
              />
            ) : (
              <EmptyRoomsCircle
                initialValue={dashboardData?.maxRooms}
                value={dashboardData?.availableRooms}
              />
            )}
          </TouchableOpacity>
          {/* Plus Button */}
          <TouchableOpacity onPress={handleAddButtonPress}>
            <Image source={addButton} style={{ width: 48, height: 48 }} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  hotelBar: {
    flexDirection: 'row',
  },
  hotelBarText: {
    fontWeight: SIZES.fontWeight1,
    fontSize: SIZES.body6,
    color: COLORS.white,
    padding: SIZES.base,
    // fontFamily: 'SF Pro Display',
  },
  dateBlock: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  dateText: {
    fontSize: SIZES.body2,
    color: COLORS.white,
    fontWeight: SIZES.fontWeight1,
  },
  arrowIconStyle: {
    padding: 15,
  },
  dropdownIconStyle: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarText: {
    fontSize: 40,
    fontWeight: '500',
    color: COLORS.blue,
  },
  circleBottomTitles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  grayBlock: {
    backgroundColor: '#212831',
    borderRadius: 5,
    borderColor: '#404040',
    borderWidth: 0.6,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 8,
  },
  blueBox: {
    backgroundColor: COLORS.blue,
    width: 32,
    height: 32,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  blueTextBlock: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  blueText: {
    fontWeight: SIZES.fontWeight2,
    color: COLORS.blue,
  },
  arcBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    width: SIZES.width / 3,
    height: '100%',
  },
});
