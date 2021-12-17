import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { MultiArcCircle } from 'react-native-circles';
import { Overlay } from 'react-native-elements';
import NetInfo from '@react-native-community/netinfo';
// Theme
import { COLORS, POSITIONING, SIZES } from '../../../constants/theme';
// Icons
import {
  WhiteLeftArrowSvg,
  WhiteRightArrowSvg,
  GrayRightArrowSvg,
} from '../../../assets/icons/SvgIcons';
// Components
import DayPick from '../../../components/Dashboard/DayPick';
import PercentageCircle from '../../../components/Dashboard/PercentageCircle';
import EmptyRoomsCircle from '../../../components/Dashboard/EmptyRoomsCircle';
import Calendar from '../../../components/Calendar/Calendar';
import HotelModalBox from '../../../components/Dashboard/Modals/HotelModalBox';
import { HotelListBar } from '../../../components/Dashboard';
// Helpers
import { numberWithSpaces } from '../../../helpers';
// API
import useApi from '../../../api/useApi';

export default function DashboardScreen({ navigation }) {
  // import NetInfo from '@react-native-community/netinfo';

  // API HANDLERS
  const { getAllHotelPropertiesData, getDashboardData } = useApi();

  // // BUTTON HANDLERS
  const [firstView, setFirstView] = useState(true);
  const [refreshed, setRefreshed] = useState(false);
  const [dashboardData, setDashboardData] = useState(null);
  // const [disconnectionAlert, setDisconnectionAlert] = useState(true);
  // NetInfo.addEventListener(networkState => {
  //   // console.log('Connection type - ', networkState.type);
  //   // console.log('Is connected? - ', networkState.isConnected);
  //   setDisconnectionAlert(true);
  // });

  const handleViewChange = () => {
    setFirstView(!firstView);
  };

  // const handleAddButtonPress = () => {
  //   alert('Add Button pressed');
  // };

  const handleFirstArcBarPress = () => {
    navigation.navigate('ArrivalsScreen', {
      typeOfStay: 'arrived',
      chosenDate: chosenDate,
      hotelID: hotelID,
      hotelListData: hotelListData,
    });
  };

  const handleSecondArcBarPress = () => {
    navigation.navigate('ArrivalsScreen', {
      typeOfStay: 'left',
      chosenDate: chosenDate,
      hotelID: hotelID,
    });
  };

  const handleThirdArcBarPress = () => {
    navigation.navigate('ArrivalsScreen', {
      typeOfStay: 'living',
      chosenDate: chosenDate,
      hotelID: hotelID,
    });
  };

  const [chosenDate, setChosenDate] = useState('2021-12-01');
  const [hotelID, setHotelID] = useState(48);
  const [hotelListData, setHotelListData] = useState(null);
  const [chosenHotelName, setChosenHotelName] = useState(null);
  // Calendar Modal Opener
  const [calendarModalVisible, setCalendarModalVisibleVisible] =
    useState(false);

  const toggleCalendarModal = () => {
    setCalendarModalVisibleVisible(!calendarModalVisible);
  };

  const [hotelListModalVisible, setHotelListModalVisible] = useState(false);
  function toggleHotelModal() {
    setHotelListModalVisible(!hotelListModalVisible);
  }

  const getInitialData = async () => {
    setRefreshed(false);
    try {
      await getAllHotelPropertiesData().then(response => {
        setHotelListData(response);
        setHotelID(response[0]);
        setChosenHotelName(response[0].name);
        // console.log('====================================');
        // console.log('HOTEL LIST DATA =>>>>');
        // console.log(response);
        // console.log(response.length);
        // console.log('====================================');
      });
      await getDashboardData(hotelID, chosenDate).then(response => {
        const byDateData = response.by_date_data;
        const todayData = response.today_data;
        // console.log('DASHBOARD DATA ====>>> ');
        // console.log(response);
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
      }),
        setRefreshed(true);
    } catch (error) {
      setRefreshed(false);
      console.error(error);
    }
  };

  const handleChosenHotel = hotel => {
    // setToggleHotelListModal(!toggleHotelListModal);
    // alert(`CHOSEN HOTEL => ${hotel}`);
    setHotelID(hotel.id);
    setChosenHotelName(hotel.name);
    toggleHotelModal();
    // console.log(hotel);
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
      <ScrollView>
        <View style={POSITIONING.center}>
          <HotelListBar
            onPress={toggleHotelModal}
            hotelName={chosenHotelName || 'Загружается...'}
          />
        </View>
        <View style={styles.dateBlock}>
          <TouchableOpacity style={styles.arrowIconStyle}>
            <WhiteLeftArrowSvg />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleCalendarModal}>
            <Text style={styles.dateText}>Декабрь 2021</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.arrowIconStyle}>
            <WhiteRightArrowSvg />
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
        {refreshed ? (
          <>
            {/* SemiCircle View goes here */}
            <View
              style={{
                width: SIZES.width,
                height: 170,
                flexDirection: 'row',
              }}>
              {/* FIRST ARC circle */}
              <TouchableOpacity
                onPress={handleFirstArcBarPress}
                style={styles.arcBlock}>
                <MultiArcCircle
                  radius={50}
                  intervals={[
                    { start: 0, end: 140 },
                    { start: 220, end: 360 },
                  ]}
                  color={COLORS.greenProgress}
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
              <TouchableOpacity
                onPress={handleSecondArcBarPress}
                style={styles.arcBlock}>
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
              <TouchableOpacity
                onPress={handleThirdArcBarPress}
                style={styles.arcBlock}>
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
                      <View style={{ marginLeft: 5 }}>
                        <GrayRightArrowSvg />
                      </View>
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
                      <View style={{ marginLeft: 5 }}>
                        <GrayRightArrowSvg />
                      </View>
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
                      <View style={{ marginLeft: 5 }}>
                        <GrayRightArrowSvg />
                      </View>
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
              {/* <TouchableOpacity onPress={{}}>
            <Image source={addButton} style={{ width: 48, height: 48 }} />
          </TouchableOpacity> */}
            </View>
          </>
        ) : (
          <ActivityIndicator animating={true} color={COLORS.white} top={250} />
        )}
      </ScrollView>
      {/* Calendar Modal View */}
      {calendarModalVisible && (
        <Overlay
          isVisible={calendarModalVisible}
          onBackdropPress={toggleCalendarModal}
          overlayStyle={{
            backgroundColor: '#212831',
            paddingTop: 40,
            paddingBottom: 0,
            top: -200,
          }}>
          <Calendar handleAcceptButtonPress={toggleCalendarModal} />
        </Overlay>
      )}

      {/* Hotel List Modal Box */}

      {hotelListModalVisible && (
        <HotelModalBox
          visible={hotelListModalVisible}
          onTouchOutside={toggleHotelModal}
          onQuitPress={toggleHotelModal}
          onHotelChosen={handleChosenHotel}
          hotelList={hotelListData}
          chosenHotelID={hotelID}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
