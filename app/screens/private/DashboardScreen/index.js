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
import { setHotelIDAction } from '../../../redux/actions' 
import { getDashboardDataMiddleware } from '../../../redux/middlewares';

const DashboardScreen = ({ navigation, loading, chosenDashbordDate, dashboardData, hotelID, hotelList }) => {
  // View togglers
  const [percentageView, setPercentageView] = useState(true);
  const [calendarModalVisible, setCalendarModalVisible] = useState(false);
  const [hotelListModalVisible, setHotelListModalVisible] = useState(false);

  // Button Press handlers
  function handleChosenHotel(hotelID) {
    setHotelIDAction(hotelID);
    setHotelListModalVisible(!hotelListModalVisible);
  }

  function handleArcBarPress() {
    navigation.navigate('ArrivalsScreen');
  }

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  
  const onPullToRefresh = useCallback(() => {
    wait(500).then(() => getDashboardDataMiddleware());
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDashboardDataMiddleware();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            loading={loading}
            onRefresh={onPullToRefresh}
            tintColor={'white'}
          />
        }>
        <View style={POSITIONING.center}>
          <HotelListBar
            onPress={() => setHotelListModalVisible(!hotelListModalVisible)}
            hotelName={chosenHotelName || 'Загружается...'}
          />
        </View>
        <View style={styles.dateBlock}>
          <TouchableOpacity style={styles.arrowIconStyle}>
            <WhiteLeftArrowSvg />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCalendarModalVisible(!calendarModalVisible)}>
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
        {!loading ? (
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
                    { start: 0, end: 140 },
                    { start: 220, end: 360 },
                  ]}
                  color={COLORS.greenProgress}
                  width={10}
                />
                <Text style={styles.arcBarNumber}>
                  {dashboardData?.leftArrived || '0'}
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
                    { start: 0, end: 140 },
                    { start: 220, end: 360 },
                  ]}
                  color={COLORS.yellow}
                  width={10}
                />
                <Text style={styles.arcBarNumber}>
                  {dashboardData?.leftCheckout || '0'}
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
                  intervals={[
                    { start: 0, end: 140 },
                    { start: 220, end: 360 },
                  ]}
                  color={COLORS.blue}
                  width={10}
                />
                <Text style={styles.arcBarNumber}>
                  {dashboardData?.live || '0'}
                </Text>
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
                        {dashboardData?.confirmedQuantity || '0'}
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
                        {dashboardData?.confirmedRevenue || '0'}
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
                        {dashboardData?.canceledQuantity || '0'}
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
                        {dashboardData?.canceledRevenue || '0'}
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
                        0
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
          </>
        ) : null}
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
          onTouchOutside={toggleHotelModal}
          onQuitPress={toggleHotelModal}
          onHotelChosen={handleChosenHotel}
          hotelList={hotelList}
          chosenHotelID={hotelID}
        />
      )}
    </SafeAreaView>
  );
}

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

function mapStateToProps({ dashboardReducer, hotelReducer }) {
  console.log('====================================');
  console.log('THIS IS DASHBOARD STATE =>>>>>');
  console.log('====================================');
  console.log(dashboardReducer);
  return {
    loading: dashboardReducer.loading,
    chosenDashbordDate: dashboardReducer.chosenDashbordDate,
    dashboardData: dashboardReducer.dashboardData,
    hotelID: hotelReducer.hotelID,
    hotelList: hotelReducer.hotelList
  };
}

export default connect(mapStateToProps)(DashboardScreen);