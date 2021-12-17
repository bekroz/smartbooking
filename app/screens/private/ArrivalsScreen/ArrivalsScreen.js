import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
  FlatList,
  RefreshControl,
} from 'react-native';
import moment from 'moment';
import { Card } from 'react-native-elements/dist/card/Card';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements';
// Theme
import { COLORS, SIZES } from '../../../constants/theme';
// Components
import { HotelListBar } from '../../../components/Dashboard';
import { NoDataToShow } from '../../../components/UserAlerts';
import HotelModalBox from '../../../components/Dashboard/Modals/HotelModalBox';
// Helpers
import { numberWithSpaces, wordTruncator } from '../../../helpers';
// Icons
import {
  MoonSvg,
  PersonSvg,
  YellowLineIndicatorSvg,
  GreenLineIndicatorSvg,
  BlueLineIndicatorSvg,
} from '../../../assets/icons/SvgIcons';
// Buttons
import { GoBackButton } from '../../../components/Buttons';
// API
import useApi from '../../../api/useApi';

export default function ArrivalsScreen({ navigation, route }) {
  const { getReservedRoomsListData } = useApi();
  const [refreshed, setRefreshed] = useState(false);
  const chosenHotelName = 'Kukaldosh Hotel';
  const [reservedRoomsListData, setReservedRoomsListData] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [lastPage, setLastPage] = useState(false);
  const [noData, setNoData] = useState(false);
  const [pullToRefresh, setPullToRefresh] = useState(false);

  const typeOfStay = route?.params.typeOfStay;
  const chosenDate = '2021-12-01';
  const hotelID = 48;
  const hotelListData = route?.params.hoteListData;
  // console.log('HOTEL LIST DATA');
  // console.log(hotelListData);

  const [hotelListModalVisible, setHotelListModalVisible] = useState(false);
  function toggleHotelModal() {
    setHotelListModalVisible(!hotelListModalVisible);
  }

  const handleChosenHotel = hotel => {
    // setToggleHotelListModal(!toggleHotelListModal);
    // alert(`CHOSEN HOTEL => ${hotel}`);
    setHotelID(hotel.id);
    setChosenHotelName(hotel.name);
    toggleHotelModal();
    // console.log(hotel);
  };
  const onRefresh = useCallback(
    async (page = pageIndex) => {
      setPullToRefresh(true);
      // console.log('THIS IS TYPE OF STAY');
      // console.log(typeOfStay);
      setRefreshed(false);
      let outgoingData = {
        hotelID: hotelID,
        type: typeOfStay,
        from: chosenDate,
        by: chosenDate,
        page: page,
      };
      // console.log(outgoingData);
      try {
        await getReservedRoomsListData(outgoingData).then(response => {
          // console.log('====================================');
          // console.log(response);
          // console.log(response.data[0]);
          // console.log(response.data[0]);
          // console.log(response.data.length);
          // console.log('====================================');

          const receivedData = response.data;
          outgoingData.page = response.meta.currentPage;
          let nextPageData = reservedRoomsListData;
          receivedData.forEach(element => {
            nextPageData.push(element);
          });
          setReservedRoomsListData(nextPageData);
          setRefreshed(true);
          setPageIndex(pageIndex + 1);
          if (response.meta.current_page === response.meta.last_page) {
            setLastPage(true);
            // console.log('NO MORE DATA TO SHOW');
          }
          if (response.data.length < 1) {
            setNoData(true);
          }
        });
        setPullToRefresh(false);
      } catch (error) {
        console.error(error);
      }
    },
    [pullToRefresh],
  );

  useEffect(() => {
    onRefresh();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 23,
            height: 30,
          }}>
          <GoBackButton navigation={navigation} />
          <HotelListBar
            onPress={toggleHotelModal}
            hotelName={chosenHotelName || 'Загружается...'}
          />
        </View>
        <View>
          <View
            style={{
              marginLeft: 22,
              marginBottom: 35,
            }}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ marginBottom: 20 }}>
              <View
                style={{
                  width: 300,
                  flexDirection: 'row',
                  // backgroundColor: 'red',
                  alignItems: 'center',
                }}>
                <Text style={styles.status}>Заезды</Text>
                <View style={[styles.indicatorContainer]}>
                  <Text style={styles.indicatorNumber}>12</Text>
                </View>
              </View>
              <View
                style={{
                  width: 300,
                  flexDirection: 'row',
                  // backgroundColor: 'red',
                  alignItems: 'center',
                }}>
                <Text style={styles.status}>Выезды</Text>
                <View style={[styles.indicatorContainer]}>
                  <Text style={styles.indicatorNumber}>12</Text>
                </View>
              </View>

              <View
                style={{
                  width: 300,
                  flexDirection: 'row',
                  // backgroundColor: 'red',
                  alignItems: 'center',
                }}>
                <Text style={styles.status}>Проживают</Text>
                <View style={[styles.indicatorContainer]}>
                  <Text style={styles.indicatorNumber}>12</Text>
                </View>
              </View>
            </ScrollView>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{ marginRight: 200 }}>
                <Text style={styles.chosenDate}>Среда, 26 дек</Text>
              </View>
              <View style={{ marginRight: 200 }}>
                <Text style={styles.chosenDate}>Среда, 26 дек</Text>
              </View>
              <View style={{ marginRight: 200 }}>
                <Text style={styles.chosenDate}>Среда, 26 дек</Text>
              </View>
            </ScrollView>
          </View>
        </View>
        {/* Card Container */}
        {refreshed ? (
          // <ScrollView
          //   data={reservedRoomsListData}
          //   renderItem={CardList}
          //   keyExtractor={item => item.id}
          //   refreshControl={
          //     <RefreshControl
          //       refreshing={pullToRefresh}
          //       onRefresh={() => onRefresh}
          //     />
          //   }
          //   contentContainerStyle={styles.list}
          //   style={{ backgroundColor: 'red' }}
          // />
          reservedRoomsListData?.map((room, index) => (
            <Card key={index} containerStyle={styles.card} title="Guests">
              {/* LEFT Side Content */}
              <View
                style={{
                  position: 'absolute',
                  alignSelf: 'flex-start',
                  left: -15,
                }}>
                {typeOfStay === 'arrived' && <GreenLineIndicatorSvg />}
                {typeOfStay === 'left' && <YellowLineIndicatorSvg />}
                {typeOfStay === 'living' && <BlueLineIndicatorSvg />}
              </View>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View style={{ marginBottom: 15, alignItems: 'center' }}>
                  <Text style={{ color: COLORS.grayText, marginBottom: 3 }}>
                    Дата заезда:
                  </Text>
                  <Text style={{ color: COLORS.white }}>
                    {moment(room?.checkin).format('DD.MM.YYYY')}
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
                  <Text style={{ color: COLORS.grayText, marginBottom: 3 }}>
                    Дата выезда:
                  </Text>
                  <Text style={{ color: COLORS.white }}>
                    {moment(room?.checkout).format('DD.MM.YYYY')}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <MoonSvg />
                  <Text style={{ color: COLORS.white }}> {room?.nights}</Text>
                  <View style={{ marginLeft: 10 }}>
                    <PersonSvg />
                  </View>
                  <Text style={{ color: COLORS.white }}> {room?.adults}</Text>
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
                {/* GuestDetailsView */}
                <View
                  style={{
                    height: 150,
                    width: 170,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <Text style={styles.channelName}>
                      {wordTruncator(room?.source, 15)}
                    </Text>
                    <Text
                      style={{
                        fontSize: SIZES.body7,
                        color: COLORS.white,
                        fontWeight: SIZES.fontWeight0,
                      }}>
                      22 Окт
                    </Text>
                  </View>

                  <View>
                    <Text
                      style={{
                        color: '#657282',
                        fontSize: 16,
                        fontWeight: SIZES.fontWeight2,
                        marginBottom: 4,
                      }}>
                      Shahzoda Test
                    </Text>
                    <Text style={{ color: COLORS.white, marginBottom: 4 }}>
                      {room?.room
                        ? wordTruncator(room?.name, 20)
                        : wordTruncator(room?.roomType.name, 20)}
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        color: COLORS.white,
                        marginBottom: 18,
                      }}>
                      {room?.room ? room?.name : room?.roomType.short_name}
                    </Text>
                    <Text style={[styles.greenPriceText, styles.equalMargin]}>
                      {numberWithSpaces(room?.sum)} UZS
                    </Text>
                  </View>
                </View>
              </View>
            </Card>
          ))
        ) : (
          <ActivityIndicator animating={true} color={COLORS.white} top={200} />
        )}
        {noData && <NoDataToShow />}
        <View
          style={{
            paddingBottom: 150,
          }}
        />
      </ScrollView>

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
    justifyContent: 'center',
    alignItems: 'center',
    right: -4,
    top: -4,
  },
  indicatorNumber: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: SIZES.fontWeight3,
    borderRadius: 50,
  },

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
  list: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: SIZES.width,
    flex: 1,
  },
});

// <ScrollView showsVerticalScrollIndicator={false}>
// {/* All Card */}
// {reservedRoomsListData?.map((room, index) => (
//   <Card key={index} containerStyle={styles.card} title="Guests">
//     {/* LEFT Side Content */}
//     <View
//       style={{
//         alignItems: 'center',
//       }}>
//       <View style={{ marginBottom: 15, alignItems: 'center' }}>
//         <Text style={{ color: COLORS.grayText, marginBottom: 3 }}>
//           Дата заезда:
//         </Text>
//         <Text style={{ color: COLORS.white }}>
//           {moment(room.checkin).format('DD.MM.YYYY')}
//         </Text>
//       </View>

//       {/* Small Vertical Divider */}
//       <Divider
//         orientation="vertical"
//         width={0.5}
//         left={45}
//         top={45}
//         height={12}
//         color={COLORS.blue}
//         position="absolute"
//       />
//       <View
//         style={{
//           marginBottom: 20,
//           marginTop: 10,
//           alignItems: 'center',
//         }}>
//         <Text style={{ color: COLORS.grayText, marginBottom: 3 }}>
//           Дата выезда:
//         </Text>
//         <Text style={{ color: COLORS.white }}>
//           {moment(room?.checkout).format('DD.MM.YYYY')}
//         </Text>
//       </View>

//       <View
//         style={{
//           flexDirection: 'row',
//         }}>
//         <Image source={moonIcon} />
//         <Text style={{ color: COLORS.white }}>
//           {' '}
//           {room?.nights}
//         </Text>
//         <Image style={{ marginLeft: 10 }} source={personIcon} />
//         <Text style={{ color: COLORS.white }}>
//           {' '}
//           {room?.total_guests}
//         </Text>
//       </View>
//     </View>

//     <Divider
//       orientation="vertical"
//       leftWidth={1}
//       left={115}
//       height={130}
//       color="#404040"
//       position="absolute"
//     />

//     {/* LEFT-SIDE content */}
//     <View
//       style={{
//         position: 'absolute',
//         flexDirection: 'row',
//         left: 110,
//         flexDirection: 'row',
//         marginLeft: 20,

//         flex: 1,
//         marginRight: 10,
//       }}>
//       {/* GuestDetailsView */}
//       <View
//         style={{
//           height: 150,
//           width: 140,
//         }}>
//         <Text style={styles.guestName}>
//           {wordTruncator(room?.guest.first_name, 8)}
//         </Text>
//         <Text style={styles.guestName}>
//           {wordTruncator(room?.guest.last_name, 8)}
//         </Text>
//         <View>
//           <Text style={[styles.equalMargin, { color: COLORS.white }]}>
//             {room?.total_rooms} номера
//           </Text>
//           <Text style={[styles.equalMargin, { color: COLORS.white }]}>
//             {moment(room?.created_at).format('DD.MM.YYYY')}
//           </Text>
//           <Text
//             style={[
//               styles.equalMargin,
//               { fontSize: 16, color: COLORS.white },
//             ]}>
//             {room?.source_name}
//           </Text>
//           <Text style={[styles.greenPriceText, styles.equalMargin]}>
//             {numberWithSpaces(room?.total_sum)} UZS
//           </Text>
//         </View>
//       </View>
//       <View style={{ paddingRight: 20, marginRight: 50 }}>
//         {room?.status == 'confirmed' && <ConfirmedStatus />}
//         {room?.status == 'in_house' && <InHouseStatus />}
//         {room?.status == 'check_out' && <CheckOutStatus />}
//         {room?.status == 'canceled' && <CanceledStatus />}
//         {room?.status == 'no_show' && <NoShowStatus />}
//       </View>
//     </View>
//   </Card>
// ))}
// {lastPage ? (
//   <View
//     style={{
//       alignSelf: 'center',
//       backgroundColor: '#212831',
//       width: SIZES.width - 20,
//       height: 40,
//       alignItems: 'center',
//       justifyContent: 'center',
//       marginTop: 15,
//       borderRadius: 6,
//     }}>
//     <Text
//       style={{
//         color: COLORS.grayText,
//         fontWeight: '500',
//         fontSize: 16,
//       }}>
//       Все данные загружены :)
//     </Text>
//   </View>
// ) : (
//   <TouchableOpacity
//     style={{
//       alignSelf: 'center',
//       backgroundColor: '#212831',
//       width: SIZES.width - 20,
//       height: 40,
//       alignItems: 'center',
//       justifyContent: 'center',
//       marginTop: 15,
//       borderRadius: 6,
//     }}
//     onPress={loadNewData}>
//     <Text
//       style={{ color: COLORS.blue, fontWeight: '500', fontSize: 16 }}>
//       {refreshed ? (
//         'Показать ещё'
//       ) : (
//         <ActivityIndicator
//           animating={true}
//           color={COLORS.white}
//           marginTop={5}
//         />
//       )}
//     </Text>
//   </TouchableOpacity>
// )}
// <View
//   style={{
//     paddingBottom: 240,
//   }}
// />
// </ScrollView>
