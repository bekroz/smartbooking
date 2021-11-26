import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';
import { Card } from 'react-native-elements/dist/card/Card';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native-gesture-handler';

export default function ComparisonScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
      {/* TOP Title */}
      <View style={{ alignItems: 'center' }}>
        <Text
          style={{
            fontWeight: SIZES.fontWeight3,
            fontSize: SIZES.h2,
            color: COLORS.white,
          }}>
          Сравнение объектов
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingBottom: 15,
          // backgroundColor: 'red',
        }}>
        <TouchableOpacity
          style={[
            styles.topBarBtn,
            {
              borderColor: COLORS.blue,
              width: 53,
              height: 35,
              margin: 10,
              marginBottom: 0,
            },
          ]}>
          <WhiteText style={[styles.topBarText]}>2021</WhiteText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.topBarBtn,
            {
              backgroundColor: '#292F3A',
              borderColor: COLORS.blue,
              alignSelf: 'flex-start',
              height: 35,
              margin: 10,
              marginBottom: 0,
            },
          ]}>
          <WhiteText style={[styles.topBarText]}>{'Августа'}</WhiteText>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Card containerStyle={styles.card} title="Revenue">
          {/* Card Title */}
          <View
            style={{
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: SIZES.fontWeight3,
                fontSize: SIZES.body5,
                color: COLORS.white,
              }}>
              Kukaldosh Boutique Hotel
            </Text>
          </View>
          {/* Content */}
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            {/* LEFT Gray Title */}
            <View
              style={{
                alignItems: 'flex-start',
                marginRight: 25,
                width: 140,
                height: 130,
              }}>
              <Text
                style={[styles.equalBottomMargin, { color: COLORS.grayText }]}>
                Загрузка
              </Text>
              <Text
                style={[styles.equalBottomMargin, { color: COLORS.grayText }]}>
                Доход
              </Text>
              <Text
                style={[styles.equalBottomMargin, { color: COLORS.grayText }]}>
                Проданных номеров
              </Text>
              <Text
                style={[styles.equalBottomMargin, { color: COLORS.grayText }]}>
                Средний чек
              </Text>
              <Text
                style={[styles.equalBottomMargin, { color: COLORS.grayText }]}>
                RevPAR{' '}
              </Text>
            </View>
            {/* MIDDLE White Numbers */}
            <View
              style={{
                alignItems: 'flex-start',
                marginRight: 25,

                width: 90,
                height: 130,
              }}>
              <Text style={[styles.equalBottomMargin, { color: COLORS.white }]}>
                65%
              </Text>
              <Text style={[styles.equalBottomMargin, { color: COLORS.white }]}>
                521 000 000
              </Text>
              <Text style={[styles.equalBottomMargin, { color: COLORS.white }]}>
                245
              </Text>
              <Text style={[styles.equalBottomMargin, { color: COLORS.white }]}>
                525 000
              </Text>
              <Text style={[styles.equalBottomMargin, { color: COLORS.white }]}>
                125 000
              </Text>
            </View>
            {/* RIGHT Red-Green Percentages */}
            <View
              style={{
                alignItems: 'flex-start',
                width: 60,
                height: 130,
              }}>
              <Text style={[styles.equalBottomMargin, { color: COLORS.red }]}>
                -12%
              </Text>
              <Text
                style={[
                  styles.equalBottomMargin,
                  { color: COLORS.greenProgress },
                ]}>
                +13%
              </Text>
              <Text
                style={[
                  styles.equalBottomMargin,
                  { color: COLORS.greenProgress },
                ]}>
                +13%
              </Text>
              <Text
                style={[
                  styles.equalBottomMargin,
                  { color: COLORS.greenProgress },
                ]}>
                +1,5%
              </Text>
              <Text style={[styles.equalBottomMargin, { color: COLORS.red }]}>
                -12%
              </Text>
            </View>
          </View>
        </Card>
        {/* Second Card */}
        <Card containerStyle={styles.card} title="Revenue">
          {/* Card Title */}
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontWeight: SIZES.fontWeight3,
                fontSize: SIZES.body5,
                color: COLORS.white,
              }}>
              Asia Hotel Bukhara
            </Text>
          </View>
          {/* Content */}
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            {/* LEFT Gray Title */}
            <View
              style={{
                alignItems: 'flex-start',
                marginRight: 25,

                width: 140,
                height: 130,
              }}>
              <Text
                style={[styles.equalBottomMargin, { color: COLORS.grayText }]}>
                Загрузка
              </Text>
              <Text
                style={[styles.equalBottomMargin, { color: COLORS.grayText }]}>
                Доход
              </Text>
              <Text
                style={[styles.equalBottomMargin, { color: COLORS.grayText }]}>
                Проданных номеров
              </Text>
              <Text
                style={[styles.equalBottomMargin, { color: COLORS.grayText }]}>
                Средний чек
              </Text>
              <Text
                style={[styles.equalBottomMargin, { color: COLORS.grayText }]}>
                RevPAR{' '}
              </Text>
            </View>
            {/* MIDDLE White Numbers */}
            <View
              style={{
                alignItems: 'flex-start',
                marginRight: 25,

                width: 90,
                height: 130,
              }}>
              <Text style={[styles.equalBottomMargin, { color: COLORS.white }]}>
                65%
              </Text>
              <Text style={[styles.equalBottomMargin, { color: COLORS.white }]}>
                521 000 000
              </Text>
              <Text style={[styles.equalBottomMargin, { color: COLORS.white }]}>
                245
              </Text>
              <Text style={[styles.equalBottomMargin, { color: COLORS.white }]}>
                525 000
              </Text>
              <Text style={[styles.equalBottomMargin, { color: COLORS.white }]}>
                125 000
              </Text>
            </View>
            {/* RIGHT Red-Green Percentages */}
            <View
              style={{
                alignItems: 'flex-start',
                width: 60,
                height: 130,
              }}>
              <Text style={[styles.equalBottomMargin, { color: COLORS.red }]}>
                -12%
              </Text>
              <Text
                style={[
                  styles.equalBottomMargin,
                  { color: COLORS.greenProgress },
                ]}>
                +13%
              </Text>
              <Text
                style={[
                  styles.equalBottomMargin,
                  { color: COLORS.greenProgress },
                ]}>
                +13%
              </Text>
              <Text
                style={[
                  styles.equalBottomMargin,
                  { color: COLORS.greenProgress },
                ]}>
                +1,5%
              </Text>
              <Text style={[styles.equalBottomMargin, { color: COLORS.red }]}>
                -12%
              </Text>
            </View>
          </View>
        </Card>
        {/* Third Card */}
        <Card containerStyle={styles.card} title="Revenue">
          {/* Card Title */}
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontWeight: SIZES.fontWeight3,
                fontSize: SIZES.body5,
                color: COLORS.white,
              }}>
              Asia Hotel Bukhara
            </Text>
          </View>
          {/* Content */}
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            {/* LEFT Gray Title */}
            <View
              style={{
                alignItems: 'flex-start',
                marginRight: 25,

                width: 140,
                height: 130,
              }}>
              <Text
                style={[styles.equalBottomMargin, { color: COLORS.grayText }]}>
                Загрузка
              </Text>
              <Text
                style={[styles.equalBottomMargin, { color: COLORS.grayText }]}>
                Доход
              </Text>
              <Text
                style={[styles.equalBottomMargin, { color: COLORS.grayText }]}>
                Проданных номеров
              </Text>
              <Text
                style={[styles.equalBottomMargin, { color: COLORS.grayText }]}>
                Средний чек
              </Text>
              <Text
                style={[styles.equalBottomMargin, { color: COLORS.grayText }]}>
                RevPAR{' '}
              </Text>
            </View>
            {/* MIDDLE White Numbers */}
            <View
              style={{
                alignItems: 'flex-start',
                marginRight: 25,

                width: 90,
                height: 130,
              }}>
              <Text style={[styles.equalBottomMargin, { color: COLORS.white }]}>
                65%
              </Text>
              <Text style={[styles.equalBottomMargin, { color: COLORS.white }]}>
                521 000 000
              </Text>
              <Text style={[styles.equalBottomMargin, { color: COLORS.white }]}>
                245
              </Text>
              <Text style={[styles.equalBottomMargin, { color: COLORS.white }]}>
                525 000
              </Text>
              <Text style={[styles.equalBottomMargin, { color: COLORS.white }]}>
                125 000
              </Text>
            </View>
            {/* RIGHT Red-Green Percentages */}
            <View
              style={{
                alignItems: 'flex-start',
                width: 60,
                height: 130,
              }}>
              <Text style={[styles.equalBottomMargin, { color: COLORS.red }]}>
                -12%
              </Text>
              <Text
                style={[
                  styles.equalBottomMargin,
                  { color: COLORS.greenProgress },
                ]}>
                +13%
              </Text>
              <Text
                style={[
                  styles.equalBottomMargin,
                  { color: COLORS.greenProgress },
                ]}>
                +13%
              </Text>
              <Text
                style={[
                  styles.equalBottomMargin,
                  { color: COLORS.greenProgress },
                ]}>
                +1,5%
              </Text>
              <Text style={[styles.equalBottomMargin, { color: COLORS.red }]}>
                -12%
              </Text>
            </View>
          </View>
        </Card>
        {/* Fourth Card */}
        <Card containerStyle={styles.card} title="Revenue">
          {/* Card Title */}
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontWeight: SIZES.fontWeight3,
                fontSize: SIZES.body5,
                color: COLORS.white,
              }}>
              Asia Hotel Bukhara
            </Text>
          </View>
          {/* Content */}
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            {/* LEFT Gray Title */}
            <View
              style={{
                alignItems: 'flex-start',
                marginRight: 25,

                width: 140,
                height: 130,
              }}>
              <Text
                style={[styles.equalBottomMargin, { color: COLORS.grayText }]}>
                Загрузка
              </Text>
              <Text
                style={[styles.equalBottomMargin, { color: COLORS.grayText }]}>
                Доход
              </Text>
              <Text
                style={[styles.equalBottomMargin, { color: COLORS.grayText }]}>
                Проданных номеров
              </Text>
              <Text
                style={[styles.equalBottomMargin, { color: COLORS.grayText }]}>
                Средний чек
              </Text>
              <Text
                style={[styles.equalBottomMargin, { color: COLORS.grayText }]}>
                RevPAR{' '}
              </Text>
            </View>
            {/* MIDDLE White Numbers */}
            <View
              style={{
                alignItems: 'flex-start',
                marginRight: 25,

                width: 90,
                height: 130,
              }}>
              <Text style={[styles.equalBottomMargin, { color: COLORS.white }]}>
                65%
              </Text>
              <Text style={[styles.equalBottomMargin, { color: COLORS.white }]}>
                521 000 000
              </Text>
              <Text style={[styles.equalBottomMargin, { color: COLORS.white }]}>
                245
              </Text>
              <Text style={[styles.equalBottomMargin, { color: COLORS.white }]}>
                525 000
              </Text>
              <Text style={[styles.equalBottomMargin, { color: COLORS.white }]}>
                125 000
              </Text>
            </View>
            {/* RIGHT Red-Green Percentages */}
            <View
              style={{
                alignItems: 'flex-start',
                width: 60,
                height: 130,
              }}>
              <Text style={[styles.equalBottomMargin, { color: COLORS.red }]}>
                -12%
              </Text>
              <Text
                style={[
                  styles.equalBottomMargin,
                  { color: COLORS.greenProgress },
                ]}>
                +13%
              </Text>
              <Text
                style={[
                  styles.equalBottomMargin,
                  { color: COLORS.greenProgress },
                ]}>
                +13%
              </Text>
              <Text
                style={[
                  styles.equalBottomMargin,
                  { color: COLORS.greenProgress },
                ]}>
                +1,5%
              </Text>
              <Text style={[styles.equalBottomMargin, { color: COLORS.red }]}>
                -12%
              </Text>
            </View>
          </View>
        </Card>
        <View style={{ paddingBottom: 100 }}></View>
      </ScrollView>
    </SafeAreaView>
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
  topTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: 'white',
    alignSelf: 'center',
    marginTop: 10,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#212831',
    borderColor: '#212831',
    height: 180,
    width: 355,
    borderRadius: 6,
    marginTop: 0,
    marginBottom: 10,
  },
  equalBottomMargin: {
    marginBottom: 8,
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
