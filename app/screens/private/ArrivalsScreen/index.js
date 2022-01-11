import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { Card } from 'react-native-elements/dist/card/Card';
import { Divider } from 'react-native-elements/dist/divider/Divider';
// Theme
import { COLORS, POSITIONING, SIZES } from '../../../constants';
// Components
import {
  StatusCarousel,
  DayCarousel,
  FadeInView,
  GoBackButton,
  HotelModal,
  HotelNameBar,
  NoDataToShow,
} from '../../../components';
// Helpers
import { numberWithSpaces, dottedTruncator } from '../../../helpers';
// Icons
import {
  MoonSvg,
  PersonSvg,
  YellowLineIndicatorSvg,
  GreenLineIndicatorSvg,
  BlueLineIndicatorSvg,
} from '../../../assets/icons/SvgIcons';
// Redux
import { connect, useDispatch } from 'react-redux';
import {
  getArrivalsDataMiddleware,
  getArrivalsNextPageDataMiddleware,
} from '../../../redux/middlewares';
import { setUserChosenHotelIDAction } from '../../../redux/actions';

const ArrivalsScreen = ({
  navigation,
  initialLoading,
  arrivalsData,
  arrivalsType,
  arrivalsLength,
  hotelName,
  chosenDay,
  hotelModalVisible,
  hotelList,
  hotelID,
  dismissHotelModal,
}) => {
  // Button Press handlers
  const dispatch = useDispatch();

  const handleChosenHotel = updatedHotel => {
    if (typeof updatedHotel !== 'undefined' && updatedHotel !== null) {
      dispatch(setUserChosenHotelIDAction(updatedHotel));
      dismissHotelModal(updatedHotel);
      onPullToRefresh();
    } else {
      alert('Hotel not found. Please, try again later');
    }
  };

  const onPullToRefresh = useCallback(() => {
    getArrivalsDataMiddleware();
  }, []);

  useEffect(() => {
    onPullToRefresh();
  }, []);

  let refreshing = false;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onPullToRefresh}
            tintColor={COLORS.white}
          />
        }>
        <View style={styles.topBarContainer}>
          <GoBackButton navigation={navigation} />
          <HotelNameBar
            onPress={e => dismissHotelModal(e)}
            hotelName={initialLoading ? 'Загружается...' : hotelName}
          />
        </View>
        <View style={styles.carouselsContainer}>
          <View style={{ backgroundColor: 'yellow', marginBottom: 40 }}>
            <StatusCarousel
              indicatorNumber={initialLoading ? 0 : arrivalsLength}
            />
          </View>
          <View>
            <DayCarousel showDay={chosenDay} />
          </View>
        </View>
        {/* Card Container */}
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => onRefresh}
            />
          }
          contentContainerStyle={styles.list}>
          {initialLoading
            ? null
            : arrivalsData.map(
                (
                  {
                    checkin,
                    checkout,
                    source,
                    room,
                    name,
                    roomType,
                    sum,
                    nights,
                    adults,
                    created_at,
                    guests,
                  },
                  index,
                ) => (
                  <Card key={index} containerStyle={styles.card} title="Guests">
                    {/* LEFT Side Content */}
                    <FadeInView>
                      <View
                        style={{
                          position: 'absolute',
                          alignSelf: 'flex-start',
                          left: -15,
                        }}>
                        {arrivalsType === 'arrived' && (
                          <GreenLineIndicatorSvg />
                        )}
                        {arrivalsType === 'left' && <YellowLineIndicatorSvg />}
                        {arrivalsType === 'living' && <BlueLineIndicatorSvg />}
                      </View>
                      <View
                        style={{
                          alignItems: 'center',
                        }}>
                        <View
                          style={{ marginBottom: 15, alignItems: 'center' }}>
                          <Text
                            style={{ color: COLORS.grayText, marginBottom: 3 }}>
                            Дата заезда:
                          </Text>
                          <Text style={{ color: COLORS.white }}>
                            {dayjs(checkin).format('DD.MM.YYYY')}
                          </Text>
                        </View>

                        {/* Small Vertical Divider */}
                        <Divider
                          orientation="vertical"
                          width={0.5}
                          left={45}
                          top={45}
                          height={12}
                          color={COLORS.blue}
                          position="absolute"
                        />
                        <View
                          style={{
                            marginBottom: 20,
                            marginTop: 10,
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{ color: COLORS.grayText, marginBottom: 3 }}>
                            Дата выезда:
                          </Text>
                          <Text style={{ color: COLORS.white }}>
                            {dayjs(checkout).format('DD.MM.YYYY')}
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                          }}>
                          <MoonSvg />
                          <Text style={{ color: COLORS.white }}> {nights}</Text>
                          <View style={{ marginLeft: 10 }}>
                            <PersonSvg />
                          </View>
                          <Text style={{ color: COLORS.white }}> {adults}</Text>
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
                          left: 110,
                          marginLeft: 20,
                          flex: 1,
                          marginRight: 10,
                        }}>
                        <View
                          style={{
                            height: 150,
                            width: 170,
                          }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              width: 210,
                            }}>
                            <Text style={styles.channelName}>
                              {dottedTruncator(source, 15)}
                            </Text>
                            <View style={styles.dateContainer}>
                              <Text
                                style={{
                                  fontSize: SIZES.body7,
                                  color: COLORS.white,
                                  fontWeight: SIZES.fontWeight0,
                                }}>
                                {dayjs(created_at)
                                  .locale('ru')
                                  .format('DD MMM')}
                              </Text>
                            </View>
                          </View>

                          <View>
                            <Text
                              style={{
                                color: '#657282',
                                fontSize: 16,
                                fontWeight: SIZES.fontWeight2,
                                marginBottom: 4,
                              }}>
                              {guests[0].first_name} {guests[0].last_name}
                            </Text>
                            <Text
                              style={{ color: COLORS.white, marginBottom: 4 }}>
                              {room
                                ? dottedTruncator(roomType.name, 18)
                                : roomType.short_name}
                            </Text>
                            <Text
                              style={{
                                fontSize: 16,
                                color: COLORS.white,
                                marginBottom: 18,
                              }}>
                              {room
                                ? dottedTruncator(room.name, 15)
                                : dottedTruncator(roomType.name, 15)}
                            </Text>
                            <Text
                              style={[
                                styles.greenPriceText,
                                styles.equalMargin,
                              ]}>
                              {numberWithSpaces(sum)} UZS
                            </Text>
                          </View>
                        </View>
                      </View>
                    </FadeInView>
                  </Card>
                ),
              )}
          {!initialLoading && arrivalsData.length === 0 && <NoDataToShow />}
        </ScrollView>
        <View
          style={{
            paddingBottom: 150,
          }}
        />
        <HotelModal
          visible={hotelModalVisible}
          onTouchOutside={e => dismissHotelModal(e)}
          onQuitPress={e => dismissHotelModal(e)}
          onHotelChosen={handleChosenHotel}
          hotelList={hotelList}
          chosenHotelID={hotelID}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  hotelBar: {
    flexDirection: 'row',
  },
  hotelBarText: {
    fontWeight: SIZES.fontWeight1,
    fontSize: SIZES.body6,
    color: COLORS.white,
    padding: SIZES.base,
  },
  dropdownIconStyle: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  status: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: SIZES.fontWeight3,
  },
  chosenDate: {
    color: '#F0F0F0',
    fontSize: 16,
    fontWeight: '300',
  },
  indicatorContainer: {
    backgroundColor: COLORS.blue,
    width: 22,
    height: 22,
    borderRadius: 50,
    right: -4,
    top: -4,
    ...POSITIONING.center,
  },
  indicatorNumber: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: SIZES.fontWeight3,
    borderRadius: 50,
  },

  titleContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignContent: 'center',
    ...POSITIONING.center,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: '700',
    left: 15,
  },
  topBarContainer: {
    flexDirection: 'row',
    top: 10,
    marginBottom: 23,
    height: 30,
    ...POSITIONING.center,
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
    marginRight: 20,
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
  channelName: {
    color: COLORS.blue,
    fontSize: SIZES.body5,
    width: 150,
    fontWeight: SIZES.fontWeight0,
    marginBottom: 9,
    marginRight: 40,
  },
  dateContainer: {
    position: 'absolute',
    right: 0,
  },
  list: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: SIZES.width,
    flex: 1,
  },
  carouselsContainer: {
    flexDirection: 'column',
    marginLeft: 20,
  },
});

function mapStateToProps({ arrivalsReducer, hotelReducer, dateReducer }) {
  const { initialLoading, arrivalsData, arrivalsType, arrivalsLength } =
    arrivalsReducer;
  const { hotelName, hotelList, hotelID } = hotelReducer;
  const { chosenDay } = dateReducer;
  return {
    initialLoading,
    arrivalsData,
    arrivalsType,
    arrivalsLength,
    hotelName,
    chosenDay,
    hotelList,
    hotelID,
  };
}

export default connect(mapStateToProps)(ArrivalsScreen);
