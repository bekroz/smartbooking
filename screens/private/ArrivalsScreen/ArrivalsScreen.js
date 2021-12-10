import React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import moment from 'moment';
import { Card } from 'react-native-elements/dist/card/Card';
import { Divider } from 'react-native-elements/dist/divider/Divider';
// Theme
import { COLORS, POSITIONING, SIZES } from '../../../constants/theme';
// Components
import { HotelListBar } from '../../../components/Dashboard';
import {
  YellowLineIndicator,
  BlueLineIndicator,
  GreenLineIndicator,
} from '../../../components/Dashboard/LineIndicator';
// Helpers
import { numberWithSpaces, wordTruncator } from '../../../helpers';
// Icons
import dropdown from '../../../images/dropdown.png';
import searchIcon from '../../../images/search.png';
import moonIcon from '../../../images/moon.png/';
import personIcon from '../../../images/person.png/';
// api
import useApi from '../../../utils/api/useApi';

export default function ArrivalsScreen({ navigation }) {
  const [refreshed, setRefreshed] = useState(true);
  const chosenHotelName = 'Kukaldosh Hotel';

  const status = ['Выезды', 'Заезды', 'Проживают'];

  const { getHotelSingleReservationData } = useApi();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
      {refreshed ? (
        <ScrollView>
          <HotelListBar />
          <View>
            <View style={{ marginLeft: 22, marginBottom: 35 }}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginBottom: 20 }}>
                <View style={{ paddingRight: 200 }}>
                  <Text style={styles.status}>Заезды</Text>
                  <View style={[styles.indicatorContainer, { left: 100 }]}>
                    <Text style={styles.indicatorNumber}>12</Text>
                  </View>
                </View>
                <View style={{ paddingRight: 200 }}>
                  <Text style={styles.status}>Выезды</Text>
                  <View style={[styles.indicatorContainer, { left: 105 }]}>
                    <Text style={styles.indicatorNumber}>12</Text>
                  </View>
                </View>

                <View style={{ paddingRight: 200 }}>
                  <Text style={styles.status}>Проживают</Text>
                  <View style={[styles.indicatorContainer, { left: 155 }]}>
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
          <Card containerStyle={styles.card} title="Guests">
            {/* LEFT Side Content */}
            {/* {status === } && <YellowLineIndicator />*/}
            {/* {status === } && <BlueLineIndicator />*/}
            {/* {status === } && <GreenLineIndicator />*/}
            <YellowLineIndicator />
            <View
              style={{
                alignItems: 'center',
              }}>
              <View style={{ marginBottom: 15, alignItems: 'center' }}>
                <Text style={{ color: COLORS.grayText, marginBottom: 3 }}>
                  Дата заезда:
                </Text>
                <Text style={{ color: COLORS.white }}>
                  {/* {moment(reservation.checkin).format('DD.MM.YYYY')} */}
                  22.02.2021
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
                  {/* {moment(reservation?.checkout).format('DD.MM.YYYY')} */}
                  22.02.2021
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Image source={moonIcon} />
                <Text style={{ color: COLORS.white }}>
                  {' 3'}
                  {/* {reservation?.nights} */}
                </Text>
                <Image style={{ marginLeft: 10 }} source={personIcon} />
                <Text style={{ color: COLORS.white }}>
                  {' 3'}
                  {/* {reservation?.total_guests} */}
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
                    {/* {wordTruncator(reservation?.guest.first_name, 8)} */}
                    Booking.com
                  </Text>
                  <Text
                    style={{
                      fontSize: SIZES.body7,
                      color: COLORS.white,
                      fontweight: SIZES.fontWeight0,
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
                    {/* {guestName}  */}Богдан Пшеничны...
                  </Text>
                  <Text style={{ color: COLORS.white, marginBottom: 4 }}>
                    {/* {roomType} */}
                    Одноместный номер с....
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: COLORS.white,
                      marginBottom: 18,
                    }}>
                    {/* {reservation?.source_name} */}SGL 105
                  </Text>
                  <Text style={[styles.greenPriceText, styles.equalMargin]}>
                    {/* {numberWithSpaces(reservation?.total_sum)} UZS */}
                    515 000 UZS
                  </Text>
                </View>
              </View>
            </View>
          </Card>

          <View
            style={{
              paddingBottom: 150,
            }}
          />
        </ScrollView>
      ) : (
        <ActivityIndicator animating={true} color={COLORS.white} top={350} />
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
    position: 'absolute',
  },
  indicatorNumber: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: SIZES.fontWeight3,
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
});
