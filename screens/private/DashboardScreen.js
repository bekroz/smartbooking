import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import { MultiArcCircle } from 'react-native-circles';
import { Overlay } from 'react-native-elements';
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
import { wordTruncator, numberWithSpaces } from '../../helpers';
import Calendar from '../../components/Calendar/Calendar';

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
    alert('Add Button pressed');
  };

  const handleArcBarPress = () => {
    alert('Arc Bar has been fired!');
  };

  const [chosenDate, setChosenDate] = useState('2021-12-01');
  const [hotelID, setHotelID] = useState('48');

  // Calendar Modal Opener
  const [calendarModalVisible, setCalendarModalVisibleVisible] =
    useState(false);
  const toggleCalendarModal = () => {
    setCalendarModalVisibleVisible(!calendarModalVisible);
  };

  const getUpdatedData = async () => {
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
        setRefreshed(true);
      });
    } catch (error) {
      setRefreshed(false);
      console.error(error);
    }
  };

  useEffect(() => {
    getUpdatedData();
  }, []);
  // console.log(`THIS IS DASHBOARD DATA YOU SET, BRO :) ===>>>`);
  // console.log(dashboardData);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
      <ScrollView>
        <View style={[styles.hotelBar, POSITIONING.center]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Comparison')}
            style={styles.dropdownIconStyle}>
            <Text style={styles.hotelBarText}>
              {/* {dashboardData?.name} */}
              Kukaldosh Hotel
            </Text>
            <Image source={dropdown} />
          </TouchableOpacity>
        </View>
        <View style={styles.dateBlock}>
          <TouchableOpacity style={styles.arrowIconStyle}>
            <Image source={leftArrow} />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleCalendarModal}>
            <Text style={styles.dateText}>Декабрь 2021</Text>
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
          <TouchableOpacity onPress={toggleCalendarModal}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: SIZES.fontWeight0,
                color: COLORS.white,
              }}>
              Вторник
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
          <TouchableOpacity onPress={handleArcBarPress} style={styles.arcBlock}>
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
              {refreshed ? dashboardData?.leftArrived : '0'}
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
          <TouchableOpacity onPress={handleArcBarPress} style={styles.arcBlock}>
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
              {refreshed ? dashboardData?.leftCheckout : '0'}
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
          <TouchableOpacity onPress={handleArcBarPress} style={styles.arcBlock}>
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
              {refreshed ? dashboardData?.live : '0'}
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
        <View style={styles.circleBottomTitles}></View>
        {/* GRAY Boxes container */}
        <View style={{ marginBottom: 25 }}>
          {/* FIRST GRAY BOX starts here */}
          <TouchableOpacity style={styles.grayBlock}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
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
                    {refreshed ? dashboardData?.confirmedQuantity : '0'}
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
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  width: 60,
                  marginRight: 10,
                  marginLeft: 20,
                  flex: 1,
                }}>
                <View style={{ marginRight: 10 }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: SIZES.fontWeight0,
                      color: COLORS.grayText,
                    }}>
                    {refreshed
                      ? numberWithSpaces(dashboardData?.confirmedRevenue)
                      : '0'}
                  </Text>
                </View>
                <View style={{ right: 5 }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: SIZES.fontWeight0,
                      color: COLORS.grayText,
                    }}>
                    UZS
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#212831',
                  }}>
                  <Image
                    style={{ tintColor: COLORS.grayText, marginLeft: 5 }}
                    source={rightArrow}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          {/* SECOND BOX starts here */}
          <TouchableOpacity style={styles.grayBlock}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={styles.blueTextBlock}>
                  <Text
                    style={{
                      fontWeight: SIZES.fontWeight2,
                      color: COLORS.blue,
                    }}>
                    {refreshed ? dashboardData?.canceledQuantity : '0'}
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
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  width: 60,
                  marginRight: 10,
                  marginLeft: 20,
                  flex: 1,
                }}>
                <View style={{ marginRight: 10 }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: SIZES.fontWeight0,
                      color: COLORS.grayText,
                    }}>
                    {refreshed
                      ? numberWithSpaces(dashboardData?.canceledRevenue)
                      : '0'}
                  </Text>
                </View>
                <View style={{ right: 5 }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: SIZES.fontWeight0,
                      color: COLORS.grayText,
                    }}>
                    UZS
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#212831',
                  }}>
                  <Image
                    style={{ tintColor: COLORS.grayText, marginLeft: 5 }}
                    source={rightArrow}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          {/* THIRD BOX starts here */}
          <TouchableOpacity style={styles.grayBlock}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={styles.blueTextBlock}>
                  <Text
                    style={{
                      fontWeight: SIZES.fontWeight2,
                      color: COLORS.blue,
                    }}>
                    0
                  </Text>
                </View>
                <View style={{}}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: SIZES.fontWeight2,
                      color: COLORS.white,
                    }}>
                    Сообщения
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  width: 60,
                  marginRight: 10,
                  marginLeft: 20,
                  flex: 1,
                }}>
                <View style={{ marginRight: 10 }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: SIZES.fontWeight0,
                      color: COLORS.grayText,
                    }}>
                    0
                  </Text>
                </View>
                <View style={{ right: 5 }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: SIZES.fontWeight0,
                      color: COLORS.grayText,
                    }}></Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#212831',
                  }}>
                  <Image
                    style={{ tintColor: COLORS.grayText, marginLeft: 5 }}
                    source={rightArrow}
                  />
                </View>
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

      {/* Calendar Modal View */}
      {calendarModalVisible && (
        <Overlay
          isVisible={calendarModalVisible}
          onBackdropPress={toggleCalendarModal}>
          <Calendar handleAcceptButtonPress={toggleCalendarModal} />
        </Overlay>
      )}
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
