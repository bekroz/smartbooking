import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { MultiArcCircle } from 'react-native-circles';
// Theme
import { COLORS, POSITIONING, SIZES } from '../../../constants';
// Icons
import {
  WhiteLeftArrowSvg,
  WhiteRightArrowSvg,
  GrayRightArrowSvg,
} from '../../../assets/icons/SvgIcons';
// Components
import {
  HotelNameBar,
  HotelModal,
  CalendarModal,
  DayPicker,
  PercentageCircle,
  EmptyRoomsCircle,
} from '../../../components';
// Redux
import { connect, useDispatch } from 'react-redux';
import {
  closeHotelModalAction,
  dashboardDataCleanUpAction,
  getArrivalsDataRequestAction,
  setUserChosenHotelIDAction,
  showHotelModalToChooseAction,
} from '../../../redux/actions';
import {
  getDashboardDataMiddleware,
  getHotelsDataMiddleware,
  setHotelIDMiddleware,
} from '../../../redux/middlewares';

const DashboardScreen = ({
  navigation,
  loading,
  availableRooms,
  currentLoad,
  shouldArrived,
  leftArrived,
  shouldCheckout,
  leftCheckout,
  live,
  maxRooms,
  confirmedQuantity,
  confirmedRevenue,
  canceledQuantity,
  canceledRevenue,
  messageCount,
  hotelID,
  hotelList,
  hotelName,
  chosenDay,
  hotelModalVisible,
  noHotelFoundAlertVisible,
}) => {
  // View togglers

  const [percentageView, setPercentageView] = useState(true);
  const [calendarModalVisible, setCalendarModalVisible] = useState(false);
  const [dataFetching, setDataFetching] = useState(false);

  const dismissHotelModal = updatedHotel => {
    if (updatedHotel) {
      dispatch(closeHotelModalAction());
    } else {
      return null;
    }
  };

  // Button Press handlers
  const dispatch = useDispatch();

  const openCalendarModal = () => {
    setCalendarModalVisible(true);
  };
  const closeCalendarModal = () => {
    setCalendarModalVisible(false);
  };

  const handleChosenHotel = updatedHotel => {
    if (typeof updatedHotel !== 'undefined' && updatedHotel !== null) {
      dispatch(setUserChosenHotelIDAction(updatedHotel));
      dismissHotelModal(updatedHotel);
      getDashboardDataOnTabPress();
      setPercentageView(true);
      setDataFetching(true);
    } else {
      dispatch(noHotelFoundAction());
      alert('Hotel not found. Please, try again later');
    }
  };

  function handleArcBarPress(arrivalsType) {
    navigation.navigate('ArrivalsScreen');
    dispatch(getArrivalsDataRequestAction(arrivalsType));
  }

  const moveToReservationScreen = () => {
    navigation.navigate('ReservationScreen');
  };

  async function updateHotelsOnPres() {
    try {
      return await getHotelsDataMiddleware().then(
        setHotelIDMiddleware().then(getDashboardDataMiddleware()),
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function getDashboardDataOnTabPress() {
    try {
      return await getHotelsDataMiddleware().then(
        setHotelIDMiddleware().then(() => {
          if (hotelID !== null) {
            getDashboardDataMiddleware();
          } else {
            dispatch(showHotelModalToChooseAction());
          }
        }),
      );
    } catch (error) {
      console.error(error);
    }
  }

  const onPullToRefresh = useCallback(() => {
    getDashboardDataOnTabPress();
    setPercentageView(true);
    setDataFetching(true);
  }, []);

  useEffect(() => {
    navigation.addListener('focus', () => {
      setPercentageView(true);
      getDashboardDataOnTabPress();
    });
    setDataFetching(true);
  }, [navigation]);

  useEffect(() => {
    navigation.addListener('blur', () => {
      setPercentageView(true);
      dispatch(dashboardDataCleanUpAction());
    });
  }, []);

  const minPoint = -140;
  const maxPoint = 280;

  const currentArrivedPercentage = () => {
    return Math.round(
      minPoint +
        maxPoint * (shouldArrived > 0 ? leftArrived / shouldArrived : 1),
    );
  };

  const currentDeparturePercentage = () => {
    return Math.round(
      minPoint +
        maxPoint * (shouldCheckout > 0 ? leftCheckout / shouldCheckout : 1),
    );
  };

  const currentLivingPercentage = () => {
    return Math.round(minPoint + maxPoint * (live > 0 ? live / maxRooms : 1));
  };

  const flatListRef = useRef();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        onScrollToIndexFailed={() => {
          flatListRef.current?.scrollToOffset({
            offset: 1,
            animated: true,
          });
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={onPullToRefresh}
            tintColor={COLORS.white}
          />
        }>
        <View style={POSITIONING.center}>
          <HotelNameBar
            onPress={() => dispatch(showHotelModalToChooseAction())}
            hotelName={loading ? 'Загружается...' : hotelName}
          />
        </View>
        <View style={styles.dateBlock}>
          <TouchableOpacity style={styles.arrowIconStyle}>
            <WhiteLeftArrowSvg />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCalendarModalVisible(true)}>
            <Text style={styles.dateText}>Декабрь 2021</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.arrowIconStyle}>
            <WhiteRightArrowSvg />
          </TouchableOpacity>
        </View>
        <View style={styles.weekDayContainer}>
          <Text style={styles.weekDayText}>Вторник</Text>
        </View>
        {/* Horizontal Calendar Day Picker */}
        <View style={styles.dayPickerContainer}>
          <DayPicker chosenDay={chosenDay} />
        </View>
        <>
          {/* Arc Bars Container */}
          <View style={styles.arcBarsContainer}>
            {/* FIRST ARC */}
            <TouchableOpacity
              onPress={() => handleArcBarPress('arrived')}
              style={styles.arcBlock}>
              <MultiArcCircle
                radius={50}
                intervals={[
                  {
                    start: loading ? -140 : currentArrivedPercentage(),
                    end: 140,
                  },
                ]}
                color={COLORS.grayEmptyArc}
                width={10}
              />
              <MultiArcCircle
                radius={50}
                intervals={[
                  {
                    start: -140,
                    end: loading ? -140 : currentArrivedPercentage(),
                  },
                ]}
                color={COLORS.greenProgress}
                width={10}
                zIndex={11}
              />
              <Text style={styles.arcBarNumber}>
                {leftArrived ? leftArrived : 0}
              </Text>
              <View style={styles.arcBarDescContainer}>
                <Text style={styles.arcBarDescription}>Заезд</Text>
              </View>
            </TouchableOpacity>
            {/* SECOND ARC */}
            <TouchableOpacity
              onPress={() => handleArcBarPress('left')}
              style={styles.arcBlock}>
              <MultiArcCircle
                radius={50}
                intervals={[
                  {
                    start: loading ? -140 : currentDeparturePercentage(),
                    end: 140,
                  },
                ]}
                color={COLORS.grayEmptyArc}
                width={10}
              />
              <MultiArcCircle
                radius={50}
                intervals={[
                  {
                    start: -140,
                    end: loading ? -140 : currentDeparturePercentage(),
                  },
                ]}
                color={COLORS.yellow}
                width={10}
              />
              <Text style={styles.arcBarNumber}>
                {leftCheckout ? leftCheckout : 0}
              </Text>
              <View style={styles.arcBarDescContainer}>
                <Text style={styles.arcBarDescription}>Выезд</Text>
              </View>
            </TouchableOpacity>
            {/* THIRD ARC */}
            <TouchableOpacity
              onPress={() => handleArcBarPress('living')}
              style={styles.arcBlock}>
              <MultiArcCircle
                radius={50}
                intervals={[{ start: currentLivingPercentage(), end: 140 }]}
                color={COLORS.grayEmptyArc}
                width={10}
              />
              <MultiArcCircle
                radius={50}
                intervals={[{ start: -140, end: currentLivingPercentage() }]}
                color={COLORS.blue}
                width={10}
              />
              <Text style={styles.arcBarNumber}>{live ? live : 0}</Text>
              <View style={styles.arcBarDescContainer}>
                <Text style={styles.arcBarDescription}>Проживают</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* GRAY Boxes container */}
          <View style={{ marginBottom: 25 }}>
            {/* First Gray Box */}
            <TouchableOpacity style={styles.grayBlockContainer}>
              <View style={styles.grayBlock}>
                <View style={styles.grayBlockLeftSideView}>
                  <View style={styles.blueBox}>
                    <Text
                      style={{
                        fontWeight: SIZES.fontWeight2,
                        color: COLORS.white,
                      }}>
                      {confirmedQuantity ? confirmedQuantity : 0}
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
                <View style={styles.grayBlockRightSideView}>
                  <View style={{ marginRight: 10 }}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: SIZES.fontWeight0,
                        color: COLORS.grayText,
                      }}>
                      {confirmedRevenue ? confirmedRevenue : 0}
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
            {/* Second Gray Box */}
            <TouchableOpacity
              style={styles.grayBlockContainer}
              onPress={moveToReservationScreen}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={styles.grayBlockLeftSideView}>
                  <View style={styles.blueTextBlock}>
                    <Text
                      style={{
                        fontWeight: SIZES.fontWeight2,
                        color: COLORS.blue,
                      }}>
                      {canceledQuantity ? canceledQuantity : 0}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.grayBlockText}>Отмена</Text>
                  </View>
                </View>
                <View style={styles.grayBlockRightSideView}>
                  <View style={{ marginRight: 10 }}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: SIZES.fontWeight0,
                        color: COLORS.grayText,
                      }}>
                      {canceledRevenue ? canceledRevenue : 0}
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
            {/* Third Gray Box */}
            <TouchableOpacity style={styles.grayBlockContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={styles.grayBlockLeftSideView}>
                  <View style={styles.blueTextBlock}>
                    <Text
                      style={{
                        fontWeight: SIZES.fontWeight2,
                        color: COLORS.blue,
                      }}>
                      0
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.grayBlockText}>Сообщения</Text>
                  </View>
                </View>
                <View style={styles.grayBlockRightSideView}>
                  <View style={{ marginRight: 10 }}>
                    <Text style={styles.messageCount}>{messageCount}</Text>
                  </View>
                  <View style={{ marginLeft: 5 }}>
                    <GrayRightArrowSvg />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          {/* Left Text */}
          <TouchableOpacity
            style={styles.loadDescCircleContainer}
            onPress={() => setPercentageView(!percentageView)}>
            <View style={styles.loadDescriptionContainer}>
              <Text style={styles.loadDescriptionText}>
                {percentageView ? 'Загрузка' : 'Свободно'}
              </Text>
              <Text style={styles.loadBottomText}>на сегодня</Text>
            </View>
            {/* Middle Circle */}
            {percentageView ? (
              <PercentageCircle currentPercentage={currentLoad} />
            ) : (
              <EmptyRoomsCircle
                maxValue={maxRooms}
                value={availableRooms}
                loading={loading}
              />
            )}
          </TouchableOpacity>
        </>
      </ScrollView>
      {/* Modals */}
      <CalendarModal
        isVisible={calendarModalVisible}
        open={openCalendarModal}
        close={closeCalendarModal}
      />
      <HotelModal
        visible={hotelModalVisible}
        onTouchOutside={e => dismissHotelModal(e)}
        onQuitPress={e => dismissHotelModal(e)}
        onHotelChosen={e => handleChosenHotel(e)}
        hotelList={hotelList}
        chosenHotelID={hotelID}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkBackground,
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
  weekDayContainer: {
    alignItems: 'center',
    padding: 5,
    marginBottom: 0,
  },
  weekDayText: {
    fontSize: 16,
    fontWeight: SIZES.fontWeight0,
    color: COLORS.white,
  },
  dayPickerContainer: {
    alignItems: 'center',
    width: '100%',
    height: 60,
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
  grayBlockContainer: {
    backgroundColor: '#212831',
    borderRadius: 5,
    borderColor: '#404040',
    borderWidth: 0.6,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 8,
  },
  grayBlockLeftSideView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  grayBlockRightSideView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 60,
    marginRight: 10,
    marginLeft: 20,
  },
  messageCount: {
    fontSize: 18,
    fontWeight: SIZES.fontWeight0,
    color: COLORS.grayText,
  },
  grayBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  grayBlockText: {
    fontSize: 18,
    fontWeight: SIZES.fontWeight2,
    color: COLORS.white,
  },
  blueBox: {
    backgroundColor: COLORS.blue,
    width: 32,
    height: 32,
    borderRadius: 5,
    margin: 10,
    ...POSITIONING.center,
  },
  blueTextBlock: {
    width: 32,
    height: 32,
    margin: 10,
    ...POSITIONING.center,
  },
  blueText: {
    fontWeight: SIZES.fontWeight2,
    color: COLORS.blue,
  },
  arcBarsContainer: {
    width: SIZES.width,
    height: 170,
    flexDirection: 'row',
    marginBottom: 25,
  },
  arcBarNumber: {
    color: COLORS.white,
    fontSize: SIZES.body2,
    fontWeight: SIZES.fontWeight1,
  },
  arcBarDescContainer: {
    position: 'absolute',
    bottom: 10,
  },
  arcBarDescription: {
    color: COLORS.white,
    fontSize: SIZES.body5,
    fontWeight: SIZES.fontWeight0,
  },
  arcBlock: {
    width: SIZES.width / 3,
    height: '100%',
    ...POSITIONING.center,
  },
  loadDescCircleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 999,
    width: SIZES.width / 1.5,
    margin: 15,
  },
  loadDescriptionContainer: {
    marginRight: 25,
    width: 150,
  },
  loadDescriptionText: {
    fontWeight: SIZES.fontWeight2,
    fontSize: SIZES.body2,
    color: COLORS.white,
  },
  loadBottomText: {
    fontSize: SIZES.body6,
    color: COLORS.white,
  },
  overlayStyle: {
    backgroundColor: '#212831',
    paddingTop: 40,
    paddingBottom: 0,
    top: -200,
  },
});

function mapStateToProps({ dashboardReducer, hotelReducer, dateReducer }) {
  const { chosenDay } = dateReducer;
  const {
    loading,
    availableRooms,
    currentLoad,
    shouldArrived,
    leftArrived,
    shouldCheckout,
    leftCheckout,
    live,
    maxRooms,
    confirmedQuantity,
    confirmedRevenue,
    canceledQuantity,
    canceledRevenue,
    messageCount,
  } = dashboardReducer;
  const {
    hotelList,
    hotelID,
    hotelName,
    hotelModalVisible,
    noHotelFoundAlertVisible,
  } = hotelReducer;

  return {
    loading,
    availableRooms,
    currentLoad,
    shouldArrived,
    leftArrived,
    shouldCheckout,
    leftCheckout,
    live,
    maxRooms,
    confirmedQuantity,
    confirmedRevenue,
    canceledQuantity,
    canceledRevenue,
    messageCount,
    hotelID,
    hotelList,
    hotelName,
    chosenDay,
    hotelModalVisible,
    noHotelFoundAlertVisible,
  };
}

export default connect(mapStateToProps)(DashboardScreen);
