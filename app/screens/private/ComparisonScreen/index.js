import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';
// Theme
import { COLORS, SIZES } from '../../../constants/theme';
// Buttons
import { GoBackSvg } from '../../../assets/icons/SvgIcons';
// Helpers
import { numberWithSpaces, getMonthName } from '../../../helpers';
// API
import { getPropertiesComparisonDataAPI } from '../../../api';

export default function ComparisonScreen({ navigation }) {
  // HARD CODED DATA ===> STARTS
  const [date, setDate] = useState({
    year: '2021',
    month: '12',
  });
  // HARD CODED DATA ===> ENDS

  const [dataLoaded, setDataLoaded] = useState(false);
  // Data container
  const [comparisonData, setComparisonData] = useState({});

  async function getUpdatedData() {
    setDataLoaded(false);
    try {
      await getPropertiesComparisonDataAPI(date).then(response => {
        setComparisonData(response.data[0]);
        setDataLoaded(true);
      });
    } catch (error) {
      console.error(error);
    }
  }

  // Button handlers
  function handleBackButtonPress() {
    navigation.navigate('TabNavigator');
  }

  useEffect(() => {
    getUpdatedData();
  }, []);

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
          <GoBackSvg />
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
          <Text style={[styles.topBarText]}>{date.year}</Text>
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
          <Text style={styles.topBarText}>{getMonthName(date.month)}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Card containerStyle={styles.card} title="Revenue">
          {/* Card Title */}
          {dataLoaded ? (
            <>
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
                  {numberWithSpaces(comparisonData?.name)}
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
                    style={[
                      styles.equalBottomMargin,
                      { color: COLORS.grayText },
                    ]}>
                    Загрузка
                  </Text>
                  <Text
                    style={[
                      styles.equalBottomMargin,
                      { color: COLORS.grayText },
                    ]}>
                    Доход
                  </Text>
                  <Text
                    style={[
                      styles.equalBottomMargin,
                      { color: COLORS.grayText },
                    ]}>
                    Проданных номеров
                  </Text>
                  <Text
                    style={[
                      styles.equalBottomMargin,
                      { color: COLORS.grayText },
                    ]}>
                    Средний чек
                  </Text>
                  <Text
                    style={[
                      styles.equalBottomMargin,
                      { color: COLORS.grayText },
                    ]}>
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
                  <Text
                    style={[styles.equalBottomMargin, { color: COLORS.white }]}>
                    {numberWithSpaces(comparisonData?.load)} %
                  </Text>
                  <Text
                    style={[styles.equalBottomMargin, { color: COLORS.white }]}>
                    {/* {dataLoaded && numberWithSpaces(comparisonData?.reserved)} 0 */}
                    {numberWithSpaces(comparisonData?.revenue)}
                  </Text>
                  <Text
                    style={[styles.equalBottomMargin, { color: COLORS.white }]}>
                    {numberWithSpaces(comparisonData?.reserved)}
                  </Text>
                  <Text
                    style={[styles.equalBottomMargin, { color: COLORS.white }]}>
                    {dataLoaded &&
                      numberWithSpaces(comparisonData?.average_price)}
                  </Text>
                  <Text
                    style={[styles.equalBottomMargin, { color: COLORS.white }]}>
                    {numberWithSpaces(comparisonData?.revpar)}
                  </Text>
                </View>
                {/* RIGHT Red-Green Percentages */}
                <View
                  style={{
                    alignItems: 'flex-start',
                    width: 60,
                    height: 130,
                  }}>
                  <Text
                    style={[styles.equalBottomMargin, { color: COLORS.red }]}>
                    {comparisonData?.compare_load_percent === '0'
                      ? `${numberWithSpaces(
                          comparisonData?.compare_load_percent,
                        )} %`
                      : null}
                  </Text>
                  <Text
                    style={[
                      styles.equalBottomMargin,
                      { color: COLORS.greenProgress },
                    ]}>
                    {comparisonData?.compare_revenue_percent === '0'
                      ? `${numberWithSpaces(
                          comparisonData?.compare_revenue_percent,
                        )} %`
                      : null}
                  </Text>
                  <Text
                    style={[
                      styles.equalBottomMargin,
                      { color: COLORS.greenProgress },
                    ]}>
                    {comparisonData?.compare_reserved_percent === '0'
                      ? `${numberWithSpaces(
                          comparisonData?.compare_reserved_percent,
                        )} %`
                      : null}
                  </Text>
                  <Text
                    style={[
                      styles.equalBottomMargin,
                      { color: COLORS.greenProgress },
                    ]}>
                    {comparisonData?.compare_average_price_percent === '0'
                      ? `${numberWithSpaces(
                          comparisonData?.compare_average_price_percent,
                        )} %`
                      : null}
                  </Text>
                  <Text
                    style={[styles.equalBottomMargin, { color: COLORS.red }]}>
                    {comparisonData?.compare_revenue_percent === '0'
                      ? `${numberWithSpaces(
                          comparisonData?.compare_revenue_percent,
                        )} %`
                      : null}
                  </Text>
                </View>
              </View>
            </>
          ) : (
            <ActivityIndicator
              animating={true}
              color={COLORS.white}
              marginTop={60}
            />
          )}
        </Card>
        {/* Second Card */}
        <View style={{ paddingBottom: 100 }} />
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
