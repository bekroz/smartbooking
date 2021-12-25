import React, { useState, useEffect, useCallback } from 'react';
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
import { Overlay } from 'react-native-elements';
// Theme
import { COLORS, POSITIONING, SIZES } from '../../../constants/theme';
// Icons
import {
  WhiteLeftArrowSvg,
  WhiteRightArrowSvg,
  GrayRightArrowSvg,
} from '../../../assets/icons/SvgIcons';
// Components
import {
  HotelListBar,
  HotelModalBox,
  PercentageCircle,
  EmptyRoomsCircle,
  DayPicker,
} from '../../../components/Dashboard';
import { Calendar } from '../../../components/Calendar';
// Redux
import { connect } from 'react-redux';
import { setUserChosenHotelIDAction } from '../../../redux/actions';
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
}) => {
  // View togglers
  const [percentageView, setPercentageView] = useState(true);
  const [calendarModalVisible, setCalendarModalVisible] = useState(false);
  const [hotelListModalVisible, setHotelListModalVisible] = useState(false);

  // Button Press handlers
  function handleChosenHotel(chosenHotelId) {
    setUserChosenHotelIDAction(chosenHotelId);
  }

  function handleArcBarPress() {
    navigation.navigate('ArrivalsScreen');
  }

  async function getDashboardDataOnTabPress() {
    try {
      return await getHotelsDataMiddleware().then(
        setHotelIDMiddleware().then(() => {
          if (hotelID !== null) {
            getDashboardDataMiddleware();
          } else {
            setHotelListModalVisible(true);
          }
        }),
      );
    } catch (error) {
      console.error(error);
    }
  }

  const onPullToRefresh = useCallback(() => {
    getDashboardDataOnTabPress();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDashboardDataOnTabPress();
    });

    return unsubscribe;
  }, [navigation]);

  const minPoint = -140;
  const maxPoint = 280;

  const currentArrivedPercentage = () => {
    return Math.round(
      minPoint +
        maxPoint * (shouldArrived > 0 ? leftArrived / shouldArrived : 1),
    );
  };
  // Kamaytirish 140 =>- currentArrivedPercentage

  const currentDeparturePercentage = () => {
    return Math.round(
      minPoint +
        maxPoint * (shouldCheckout > 0 ? leftCheckout / shouldCheckout : 1),
    );
  };

  const currentLivingPercentage = () => {
    return Math.round(minPoint + maxPoint * (live > 0 ? live / maxRooms : 1));
  };
  // Kamaytirish 140 =>- currentArrivedPercentage

  const [refreshing, setRefreshing] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onPullToRefresh}
            tintColor={COLORS.white}
          />
        }>
        <View style={POSITIONING.center}>
          <HotelListBar
            onPress={() => setHotelListModalVisible(!hotelListModalVisible)}
            hotelName={loading ? 'Загружается...' : hotelName}
          />
        </View>
        <View style={styles.dateBlock}>
          <TouchableOpacity style={styles.arrowIconStyle}>
            <WhiteLeftArrowSvg />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCalendarModalVisible(!calendarModalVisible)}>
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
          <DayPicker />
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
                intervals={[{ start: currentArrivedPercentage(), end: 140 }]}
                color={COLORS.grayEmptyArc}
                width={10}
              />
              <MultiArcCircle
                radius={50}
                intervals={[{ start: -140, end: currentArrivedPercentage() }]}
                color={COLORS.greenProgress}
                width={10}
                zIndex={11}
              />
              <Text style={styles.arcBarNumber}>{leftArrived}</Text>
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
                intervals={[{ start: currentDeparturePercentage(), end: 140 }]}
                color={COLORS.grayEmptyArc}
                width={10}
              />
              <MultiArcCircle
                radius={50}
                intervals={[{ start: -140, end: currentDeparturePercentage() }]}
                color={COLORS.yellow}
                width={10}
              />
              <Text style={styles.arcBarNumber}>{leftCheckout}</Text>
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
              <Text style={styles.arcBarNumber}>{live}</Text>
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
                      {confirmedQuantity}
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
                      {confirmedRevenue}
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
                      {canceledQuantity}
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
                      {canceledRevenue}
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
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: SIZES.fontWeight0,
                        color: COLORS.grayText,
                      }}>
                      {messageCount}
                    </Text>
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
                initialValue={maxRooms}
                value={availableRooms}
              />
            )}
          </TouchableOpacity>
        </>
      </ScrollView>

      {/* Calendar Modal */}
      {calendarModalVisible && (
        <Overlay
          isVisible={calendarModalVisible}
          onBackdropPress={toggleCalendarModal}
          overlayStyle={styles.overlayStyle}>
          <Calendar handleAcceptButtonPress={toggleCalendarModal} />
        </Overlay>
      )}

      {/* Hotel List Modal */}
      {hotelListModalVisible && (
        <HotelModalBox
          visible={hotelListModalVisible}
          onTouchOutside={setHotelListModalVisible(!hotelListModalVisible)}
          onQuitPress={setHotelListModalVisible(!hotelListModalVisible)}
          onHotelChosen={handleChosenHotel}
          hotelList={hotelList}
          chosenHotelID={hotelID}
        />
      )}
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
    justifyContent: 'center',
    alignItems: 'center',
    width: SIZES.width / 3,
    height: '100%',
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
  const { hotelList, hotelID, hotelName } = hotelReducer;
  const { chosenDay } = dateReducer;
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
  };
}

export default connect(mapStateToProps)(DashboardScreen);
