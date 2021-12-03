import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';
import { Card } from 'react-native-elements/dist/card/Card';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native-gesture-handler';
import blueChevronLeft from '../../images/blueChevronLeft.png';
import useApi from '../../utils/useApi';
import { numberWithSpaces, getMonthName } from '../../helpers';

export default function ComparisonScreen({ navigation }) {
  function handleBackButtonPress() {
    navigation.navigate('Home');
  }
  const { getPropertiesComparisonData } = useApi();
  const [comparisonData, setComparisonData] = useState(null);
  const [date, setDate] = useState({
    year: '2021',
    month: '12',
  });
  const [refreshed, setRefreshed] = useState(false);

  const getUpdatedData = async () => {
    try {
      await getPropertiesComparisonData(date).then(response => {
        console.log('10. PROPERTIES COMPARISON DATA ===>>>');
        console.log(response.data[0]);
        setComparisonData(response.data[0]);
        setRefreshed(true);
      });
    } catch (error) {
      console.error(error);
      setRefreshed(false);
    }
  };

  useEffect(() => {
    setRefreshed(false);
    getUpdatedData();
  }, []);

  console
    .log
    // comparisonData?.revenue / comparisonData?.compare_revenue_percent,
    ();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
      {/* TOP Title */}
      <View style={{ alignItems: 'center' }}></View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: SIZES.width,
        }}>
        <TouchableOpacity
          onPress={handleBackButtonPress}
          style={{
            left: 15,
            padding: 10,
            position: 'absolute',
          }}>
          <Image source={blueChevronLeft} />
        </TouchableOpacity>
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
          <WhiteText style={[styles.topBarText]}>{date.year}</WhiteText>
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
          <Text style={styles.topBarText}>
            {getMonthName(date.month)}
          </Text>
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
              {refreshed && numberWithSpaces(comparisonData?.name)}
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
                {refreshed && numberWithSpaces(comparisonData?.load)} %
              </Text>
              <Text style={[styles.equalBottomMargin, { color: COLORS.white }]}>
                {/* {refreshed && numberWithSpaces(comparisonData?.reserved)} 0 */}
                {refreshed && numberWithSpaces(comparisonData?.revenue)}
              </Text>
              <Text style={[styles.equalBottomMargin, { color: COLORS.white }]}>
                {refreshed && numberWithSpaces(comparisonData?.reserved)}
              </Text>
              <Text style={[styles.equalBottomMargin, { color: COLORS.white }]}>
                {refreshed && numberWithSpaces(comparisonData?.average_price)}
              </Text>
              <Text style={[styles.equalBottomMargin, { color: COLORS.white }]}>
                {refreshed &&
                  numberWithSpaces(
                    Math.round(
                      comparisonData?.revenue / comparisonData?.reserved,
                    ),
                  )}
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
                {refreshed &&
                  numberWithSpaces(comparisonData?.compare_load_percent)}{' '}
                %
              </Text>
              <Text
                style={[
                  styles.equalBottomMargin,
                  { color: COLORS.greenProgress },
                ]}>
                {refreshed &&
                  numberWithSpaces(
                    comparisonData?.compare_revenue_percent,
                  )}{' '}
                %
              </Text>
              <Text
                style={[
                  styles.equalBottomMargin,
                  { color: COLORS.greenProgress },
                ]}>
                {refreshed &&
                  numberWithSpaces(
                    comparisonData?.compare_reserved_percent,
                  )}{' '}
                %
              </Text>
              <Text
                style={[
                  styles.equalBottomMargin,
                  { color: COLORS.greenProgress },
                ]}>
                {refreshed &&
                  numberWithSpaces(
                    comparisonData?.compare_average_price_percent,
                  )}{' '}
                %
              </Text>
              <Text style={[styles.equalBottomMargin, { color: COLORS.red }]}>
                {refreshed &&
                  numberWithSpaces(
                    comparisonData?.compare_revenue_percent,
                  )}{' '}
                %
              </Text>
            </View>
          </View>
        </Card>
        {/* Second Card */}
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
