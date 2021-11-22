import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import styled from 'styled-components/native';
import { COLORS, SIZES } from '../../constants/theme';

export default function Details() {
  const currency = 'UZS';
  const hotelRoomPrice = '235 000';
  const lineWidth = 250;
  const revenue = '123 000 312';
  const stays = '229';
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 5,
          paddingBottom: 10,
          paddingTop: 5,
        }}>
        <TouchableOpacity
          style={[
            styles.topBarBtn,
            {
              backgroundColor: '#292F3A',
              borderColor: '#5F85DB',
              minWidth: 55,
              height: 35,
              marginRight: 5,
            },
          ]}>
          <WhiteText style={[styles.topBarText, { fontSize: 13 }]}>
            01 Sep - 30 Sep
          </WhiteText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.topBarBtn,
            {
              backgroundColor: '#292F3A',
              borderColor: '#5F85DB',
              minWidth: 55,
              height: 35,
            },
          ]}>
          <WhiteText style={[styles.topBarText, { fontSize: 13 }]}>
            От стойки
          </WhiteText>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {/* FIRST Card */}
        <Card containerStyle={styles.card} title="Revenue">
          {/* Card Context View */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 15,
            }}>
            <View>
              <WhiteText
                style={{ fontWeight: SIZES.fontWeight1, fontSize: 16 }}>
                Доход
              </WhiteText>
              <Text
                style={{
                  fontWeight: SIZES.fontWeight1,
                  fontSize: 10,
                  color: COLORS.grayText,
                }}>
                Revenue
              </Text>
            </View>
            <GrayText>
              Всего {revenue} {currency}
            </GrayText>
          </View>
          <View style={{ flexDirection: 'row' }}>
            {/* LEFT Donut View */}
            <View
              style={{
                backgroundColor: 'green',
                width: 180,
                marginRight: 10,
                height: 140,
              }}>
              <Text>Donut View</Text>
            </View>
            {/* Color and Title */}
            <View>
              {/* TEXT COLOR */}
              {/* TEXT */}

              <View style={styles.dotBlock}>
                <View
                  style={[
                    styles.dotStyle,
                    { backgroundColor: COLORS.blueCircle },
                  ]}
                />
                <WhiteText>От стойки</WhiteText>
              </View>

              <View style={styles.dotBlock}>
                <View
                  style={[styles.dotStyle, { backgroundColor: COLORS.orange }]}
                />
                <WhiteText>Телефон</WhiteText>
              </View>

              <View style={styles.dotBlock}>
                <View
                  style={[styles.dotStyle, { backgroundColor: COLORS.yellow }]}
                />
                <WhiteText>Сайт</WhiteText>
              </View>

              <View style={styles.dotBlock}>
                <View
                  style={[
                    styles.dotStyle,
                    { backgroundColor: COLORS.greenCircle },
                  ]}
                />
                <WhiteText>Booking.Com</WhiteText>
              </View>

              <View style={styles.dotBlock}>
                <View
                  style={[
                    styles.dotStyle,
                    { backgroundColor: COLORS.pinkCircle },
                  ]}
                />
                <WhiteText>Трамина</WhiteText>
              </View>

              <View style={styles.dotBlock}>
                <View
                  style={[styles.dotStyle, { backgroundColor: COLORS.coral }]}
                />
                <WhiteText>Dolores</WhiteText>
              </View>
            </View>
          </View>
        </Card>
        {/* SECOND Card */}
        <Card containerStyle={styles.card} title="Revenue">
          {/* Card Context View */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <View>
              <WhiteText
                style={{ fontWeight: SIZES.fontWeight1, fontSize: 16 }}>
                К-ство проданных ночей
              </WhiteText>
              <Text
                style={{
                  fontWeight: SIZES.fontWeight1,
                  fontSize: 10,
                  color: COLORS.grayText,
                }}>
                Room Nights
              </Text>
            </View>
            <GrayText>{stays} ночей</GrayText>
          </View>
          <View style={{ flexDirection: 'row' }}>
            {/* LEFT Donut View */}
            <View
              style={{
                backgroundColor: 'green',
                width: 180,
                marginRight: 10,
                height: 140,
              }}>
              <Text>Donut View</Text>
            </View>
            {/* Color and Title */}
            <View>
              <View style={styles.dotBlock}>
                <View
                  style={[
                    styles.dotStyle,
                    { backgroundColor: COLORS.blueCircle },
                  ]}
                />
                <WhiteText>От стойки</WhiteText>
              </View>

              <View style={styles.dotBlock}>
                <View
                  style={[styles.dotStyle, { backgroundColor: COLORS.orange }]}
                />
                <WhiteText>Телефон</WhiteText>
              </View>

              <View style={styles.dotBlock}>
                <View
                  style={[styles.dotStyle, { backgroundColor: COLORS.yellow }]}
                />
                <WhiteText>Сайт</WhiteText>
              </View>

              <View style={styles.dotBlock}>
                <View
                  style={[
                    styles.dotStyle,
                    { backgroundColor: COLORS.greenCircle },
                  ]}
                />
                <WhiteText>Booking.Com</WhiteText>
              </View>

              <View style={styles.dotBlock}>
                <View
                  style={[
                    styles.dotStyle,
                    { backgroundColor: COLORS.pinkCircle },
                  ]}
                />
                <WhiteText>Трамина</WhiteText>
              </View>

              <View style={styles.dotBlock}>
                <View
                  style={[styles.dotStyle, { backgroundColor: COLORS.coral }]}
                />
                <WhiteText>Dolores</WhiteText>
              </View>
            </View>
          </View>
        </Card>
        {/* THIRD Card */}
        <Card containerStyle={[styles.card, { height: 280 }]} title="Revenue">
          {/* Card Context View */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 15,
            }}>
            <View
              style={{
                width: 167,
                marginRight: 10,
              }}>
              <WhiteText
                style={{ fontWeight: SIZES.fontWeight1, fontSize: 16 }}>
                Средняя цена номера
              </WhiteText>
            </View>

            <GrayText>
              Всего {revenue} {currency}
            </GrayText>
          </View>

          {/* Color Line and Title */}
          <View
            style={{
              marginBottom: 5,
            }}>
            <View style={styles.dotBlock}>
              <View
                style={[
                  styles.lineStyle,
                  { backgroundColor: COLORS.blueCircle, width: lineWidth },
                ]}
              />
              <WhiteText>
                {hotelRoomPrice} {currency}
              </WhiteText>
            </View>

            <View style={styles.dotBlock}>
              <View
                style={[
                  styles.dotStyle,
                  { backgroundColor: COLORS.orange, width: 67 },
                ]}
              />
              <WhiteText>
                {hotelRoomPrice} {currency}
              </WhiteText>
            </View>

            <View style={styles.dotBlock}>
              <View
                style={[
                  styles.lineStyle,
                  { backgroundColor: COLORS.yellow, width: 130 },
                ]}
              />
              <WhiteText>
                {hotelRoomPrice} {currency}
              </WhiteText>
            </View>

            <View style={styles.dotBlock}>
              <View
                style={[
                  styles.lineStyle,
                  { backgroundColor: COLORS.greenCircle, width: 130 },
                ]}
              />
              <WhiteText>
                {hotelRoomPrice} {currency}
              </WhiteText>
            </View>

            <View style={styles.dotBlock}>
              <View
                style={[
                  styles.lineStyle,
                  { backgroundColor: COLORS.pinkCircle, width: 67 },
                ]}
              />
              <WhiteText>
                {hotelRoomPrice} {currency}
              </WhiteText>
            </View>

            <View style={styles.dotBlock}>
              <View
                style={[
                  styles.lineStyle,
                  { backgroundColor: COLORS.coral, width: 130 },
                ]}
              />
              <WhiteText>
                {hotelRoomPrice} {currency}
              </WhiteText>
            </View>
          </View>

          {/* DOTS */}
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: 115,
                marginRight: 5,
              }}>
              <View style={[styles.dotBlock, styles.thirdCardDotMargin]}>
                <View
                  style={[
                    styles.dotStyle,
                    { backgroundColor: COLORS.blueCircle },
                  ]}
                />
                <WhiteText>От стойки</WhiteText>
              </View>
              <View style={[styles.dotBlock]}>
                <View
                  style={[styles.dotStyle, { backgroundColor: COLORS.orange }]}
                />
                <WhiteText>Телефон</WhiteText>
              </View>
            </View>
            <View
              style={{
                width: 115,
                marginRight: 15,
              }}>
              <View style={[styles.dotBlock, styles.thirdCardDotMargin]}>
                <View
                  style={[styles.dotStyle, { backgroundColor: COLORS.yellow }]}
                />
                <WhiteText>Сайт</WhiteText>
              </View>
              <View style={[styles.dotBlock]}>
                <View
                  style={[
                    styles.dotStyle,
                    { backgroundColor: COLORS.greenCircle },
                  ]}
                />
                <WhiteText>Booking.com</WhiteText>
              </View>
            </View>
            <View
              style={{
                width: 100,
              }}>
              <View style={[styles.dotBlock, styles.thirdCardDotMargin]}>
                <View
                  style={[
                    styles.dotStyle,
                    { backgroundColor: COLORS.pinkCircle },
                  ]}
                />
                <WhiteText>Трамина</WhiteText>
              </View>
              <View style={[styles.dotBlock]}>
                <View
                  style={[styles.dotStyle, { backgroundColor: COLORS.coral }]}
                />
                <WhiteText>Dolores</WhiteText>
              </View>
            </View>
          </View>
        </Card>
        <View
          style={{
            paddingBottom: 80,
          }}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  topBarBtn: {
    backgroundColor: '#2E3641',
    borderRadius: 5,
    borderWidth: 0.167,
    borderColor: '#000000',
    height: 30,
    width: 114,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarText: {
    fontWeight: SIZES.fontWeight1,
    fontSize: 14,
    textAlign: 'center',
    color: COLORS.white,
    // fontFamily: 'SF Pro Display',
  },
  card: {
    backgroundColor: COLORS.grayPlaceholder,
    borderColor: COLORS.grayPlaceholder,
    borderRadius: 6,
    height: 200,
  },
  chosenCardStyle: {
    borderColor: COLORS.blue,
  },
  priceText: {
    fontSize: SIZES.body5,
    fontWeight: SIZES.fontWeight2,
  },
  equalMargin: {
    marginTop: 10,
  },
  guestName: {
    color: COLORS.softBlue,
    fontSize: 16,
    fontWeight: SIZES.fontWeight3,
  },
  dotBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  lineStyle: {
    maxWidth: 222,
    height: 10,
    borderRadius: 50,
    marginRight: 6,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 50,
    marginRight: 6,
  },
  thirdCardDotMargin: {
    marginBottom: 10,
  },
});

const WhiteText = styled.Text`
  color: #ffffff;
`;

const GrayText = styled.Text`
  color: #657282;
`;

const BlueText = styled.Text`
  color: #5f85db;
`;

const GreenText = styled.Text`
  color: #0ecc38;
`;

const GuestDetailsView = styled.View``;
