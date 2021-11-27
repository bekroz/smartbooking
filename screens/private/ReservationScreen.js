import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';
import { Divider } from 'react-native-elements/dist/divider/Divider';
// Theme
import { COLORS, SIZES } from '../../constants/theme';
// Icons
import searchIcon from '../../images/search.png';
import moonIcon from '../../images/moon.png/';
import personIcon from '../../images/person.png/';
// Components
import { SOURCES } from '../../constants/source';

export default function ReservationScreen() {
  const handleSearchButton = () => {
    console.log('handleSearchButton is fired!');
  };

  const comingDateData = '01.02.2021';
  const leavingDateData = '04.02.2021';
  const guestNumbers = '3';
  const stayNumbers = '3';
  const guestFullName = 'Olga Fedorak';
  const reservedRoomQuantity = '2';
  const roomPrice = '313 000 000';
  const currency = 'UZS';
  const endingDate = '22.02.2021';
  const guestStatus = ['В номере', 'Подтверждено'];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
      <View style={styles.titleContainer}>
        <Text style={[styles.headerTitle, { color: COLORS.white }]}>
          Бронирования
        </Text>
        <TouchableOpacity style={styles.search} onPress={handleSearchButton}>
          <View>
            <Image source={searchIcon} />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.topBarButtonsContainer}>
          <TouchableOpacity style={styles.topBarBtn}>
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
        <View style={{ marginTop: 10, marginBottom: 5, alignItems: 'center' }}>
          <Text style={{ color: COLORS.grayText }}>22 бронирования</Text>
        </View>
      </View>
      {/* CARDS */}
      <View style={{ justifyContent: 'center' }}>
        {/* FIRST Card */}
        <Card containerStyle={styles.card} title="Guests">
          {/* Left-side content */}
          <View
            style={{
              alignItems: 'center',
            }}>
            <View style={{ marginBottom: 15, alignItems: 'center' }}>
              <Text style={{ color: COLORS.grayText }}>Дата заезда:</Text>
              <Text style={{ color: COLORS.white }}>{comingDateData}</Text>
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
              style={{ marginBottom: 15, marginTop: 10, alignItems: 'center' }}>
              <Text style={{ color: COLORS.grayText }}>Дата выезда:</Text>
              <Text style={{ paddingTop: 5, color: COLORS.white }}>
                {leavingDateData}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image source={moonIcon} />
              <Text style={{ color: COLORS.white }}> {stayNumbers}</Text>
              <Image style={{ marginLeft: 10 }} source={personIcon} />
              <Text style={{ color: COLORS.white }}> {guestNumbers}</Text>
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
              <Text style={styles.guestName}>{guestFullName}</Text>
              <View>
                <Text style={[styles.equalMargin, { color: COLORS.white }]}>
                  {reservedRoomQuantity} номера
                </Text>
                <Text style={[styles.equalMargin, { color: COLORS.white }]}>
                  {endingDate}
                </Text>
                <Text
                  style={[
                    styles.equalMargin,
                    { fontSize: 16, color: COLORS.white },
                  ]}>
                  booking.com
                </Text>
                <Text style={[styles.greenPriceText, styles.equalMargin]}>
                  {roomPrice} {currency}
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 21,
                borderRadius: 4,
                width: 80,
                alignItems: 'center',
                justifyContent: 'center',
                left: 15,
                backgroundColor: '#2C384E',
                flexWrap: 'wrap',
                alignContent: 'center',
              }}>
              <Text
                style={{
                  fontWeight: SIZES.fontWeight1,
                  color: COLORS.greenProgress,
                  fontSize: 13,
                }}>
                {guestStatus[0]}
              </Text>
            </View>
          </View>
        </Card>

        {/* ADDITION */}
        <Card containerStyle={styles.card} title="Guests">
          {/* Left-side content */}
          <View
            style={{
              alignItems: 'center',
            }}>
            <View style={{ marginBottom: 15, alignItems: 'center' }}>
              <Text style={{ color: COLORS.grayText }}>Дата заезда:</Text>
              <Text style={{ color: COLORS.white }}>01.02.2021</Text>
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
              style={{ marginBottom: 15, marginTop: 10, alignItems: 'center' }}>
              <Text style={{ color: COLORS.grayText }}>Дата выезда:</Text>
              <Text style={{ paddingTop: 5, color: COLORS.white }}>
                {leavingDateData}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image source={moonIcon} />
              <Text style={{ color: COLORS.white }}> {stayNumbers}</Text>
              <Image style={{ marginLeft: 10 }} source={personIcon} />
              <Text style={{ color: COLORS.white }}> {guestNumbers}</Text>
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
              <Text style={styles.guestName}>{guestFullName}</Text>
              <View>
                <Text style={[styles.equalMargin, { color: COLORS.white }]}>
                  {reservedRoomQuantity} номера
                </Text>
                <Text style={[styles.equalMargin, { color: COLORS.white }]}>
                  {endingDate}
                </Text>
                <Text
                  style={[
                    styles.equalMargin,
                    { fontSize: 16, color: COLORS.white },
                  ]}>
                  {SOURCES.dolores}
                </Text>
                <Text style={[styles.greenPriceText, styles.equalMargin]}>
                  {roomPrice} {currency}
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                height: '90%',
                justifyContent: 'flex-start',
              }}>
              <View
                style={{
                  borderRadius: 4,
                  backgroundColor: '#2C384E',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  alignContent: 'center',
                  justifyContent: 'center',
                  right: 25,
                  width: 120,
                  height: 25,
                }}>
                <Text
                  style={{
                    fontWeight: SIZES.fontWeight1,
                    color: COLORS.blue,
                    fontSize: 13,
                  }}>
                  {guestStatus[1]}
                </Text>
              </View>
            </View>
          </View>
        </Card>
        {/* SECOND Card */}
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
