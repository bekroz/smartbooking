import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import styled from 'styled-components/native';
// Theme
import { COLORS, SIZES } from '../../constants/theme';
// Components
import BlueColumns from './BlueColumns';
import LineChartData from './LineChartData';

export default function SoldRooms() {
  return (
    <>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity
          style={[
            styles.topBarBtn,
            {
              backgroundColor: '#292F3A',
              borderColor: '#5F85DB',
              width: 55,
              height: 35,
              margin: 10,
              marginLeft: 0,
            },
          ]}>
          <Text
            style={[styles.topBarText, { fontSize: 13, color: COLORS.white }]}>
            2021
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.topBarBtn,
            {
              backgroundColor: '#292F3A',
              borderColor: '#5F85DB',
              minWidth: 55,
              height: 35,
              margin: 10,
              marginLeft: 0,
            },
          ]}>
          <Text
            style={[styles.topBarText, { fontSize: 13, color: COLORS.white }]}>
            booking.com
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.topBarBtn,
            {
              backgroundColor: '#292F3A',
              borderColor: '#5F85DB',
              minWidth: 55,
              maxWidth: 75,
              height: 35,
              margin: 10,
              marginLeft: 0,
            },
          ]}>
          <Text
            style={[styles.topBarText, { fontSize: 13, color: COLORS.white }]}>
            Августа
          </Text>
        </TouchableOpacity>
      </View>
      <Divider
        orientation="horizontal"
        leftWidth={1}
        color={COLORS.grayPlaceholderBorder}
      />
      <View>
        <Text
          style={{
            margin: 15,
            marginLeft: 30,
            fontSize: 16,
            fontWeight: '500',
            color: COLORS.white,
          }}>
          Количество проданных ночей
        </Text>
      </View>
      {/* Chart and Line Graph View */}
      <View
        style={{
          marginBottom: 15,
          maxWidth: SIZES.width,
          height: 140,
        }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          containerStyle={{
            justifyContent: 'center',
          }}>
          <BlueColumns />
          <LineChartData />
        </ScrollView>
      </View>
      <Divider
        orientation="horizontal"
        leftWidth={0.5}
        color={COLORS.grayPlaceholderBorder}
      />
      <View style={{ alignSelf: 'flex-start' }}>
        <Text
          style={{
            margin: 15,
            marginBottom: 10,
            fontSize: 16,
            fontWeight: '500',
            color: COLORS.white,
          }}>
          Количество проданных ночей
        </Text>
      </View>
      <ScrollView>
        <Card
          containerStyle={[styles.card, styles.chosenCardStyle]}
          title="SoldRooms">
          {/* Card Context View */}
          <View style={{ flexDirection: 'row' }}>
            {/* LEFT-Side context */}
            <View style={{ paddingRight: 20 }}>
              <View style={{ marginBottom: 15 }}>
                <Text style={{ color: COLORS.grayText }}>Дата:</Text>
                <Text style={{ paddingTop: 5, color: COLORS.white }}>
                  01 января - 03 декабря
                </Text>
              </View>
              <View style={{ marginBottom: 15 }}>
                <Text style={{ color: COLORS.grayText }}>
                  Проданных номеров
                </Text>
                <WhiteText style={{ paddingTop: 5 }}>2</WhiteText>
              </View>
            </View>
            {/* RIGHT-Side context */}
            <View>
              <View style={{ marginBottom: 15 }}>
                <Text style={{ color: COLORS.grayText }}>Занято номеров:</Text>
                <Text style={{ paddingTop: 5, color: COLORS.white }}>
                  0.29%
                </Text>
              </View>
              <View style={{ marginBottom: 15 }}>
                <Text style={{ color: COLORS.grayText }}>Доход UZS</Text>
                <Text style={{ paddingTop: 5, color: COLORS.white }}>
                  10 277 000
                </Text>
              </View>
            </View>
          </View>
        </Card>

        <Card containerStyle={styles.card} title="SoldRooms">
          {/* Card Context View */}
          <View style={{ flexDirection: 'row' }}>
            {/* LEFT-Side context */}
            <View style={{ paddingRight: 20 }}>
              <View style={{ marginBottom: 15 }}>
                <Text style={{ color: COLORS.grayText }}>Дата:</Text>
                <Text style={{ paddingTop: 5, color: COLORS.white }}>
                  01 января - 03 декабря
                </Text>
              </View>
              <View style={{ marginBottom: 15 }}>
                <Text style={{ color: COLORS.grayText }}>
                  Проданных номеров
                </Text>
                <Text style={{ paddingTop: 5, color: COLORS.white }}>2</Text>
              </View>
            </View>
            {/* RIGHT-Side context */}
            <View>
              <View style={{ marginBottom: 15 }}>
                <Text style={{ color: COLORS.grayText }}>Занято номеров:</Text>
                <Text style={{ paddingTop: 5, color: COLORS.white }}>
                  0.29%
                </Text>
              </View>
              <View style={{ marginBottom: 15 }}>
                <Text style={{ color: COLORS.grayText }}>Доход UZS</Text>
                <Text style={{ paddingTop: 5, color: COLORS.white }}>
                  10 277 000
                </Text>
              </View>
            </View>
          </View>
        </Card>

        <View style={{ paddingBottom: 100 }} />
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
    height: 140,
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
});

const WhiteText = styled.Text`
  color: #ffffff;
`;

const GrayText = styled.Text`
  color: #657282;
`;
