import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import moment from 'moment';
// Theme
import { COLORS, SIZES } from '../../../constants/theme';
// Components
import BlueColumns from '../BlueColumns/BlueColumns';
import LineChartData from '../LineChartData/LineChartData';
// Helpers
import { numberWithSpaces } from '../../../helpers';
// API
import { getStatisticsByYearAPI } from '../../../api';
import { useCallback } from 'react';
import { RefreshControl } from 'react-native';

export default function SoldRooms() {
  const [statisticsByYearData, setStatisticsByYearData] = useState(null);

  const [hotelID, setHotelID] = useState(48);
  const [chosenYear, setChosenYear] = useState(2021);
  const [refreshed, setRefreshed] = useState(false);
  const [cardChosen, setCardChosen] = useState(null);

  const getUpdatedData = async () => {
    try {
      await getStatisticsByYearAPI({ hotelID, chosenYear }).then(statistics => {
        setStatisticsByYearData(statistics);
        setRefreshed(true);
        // console.log('====================================');
        // refreshed && console.log(statisticsByYearData);
        // console.log('====================================');
      });
    } catch (error) {
      console.error(error);
    }
  };

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const [refreshing, setRefreshing] = useState(false);

  const onPullToRefresh = useCallback(() => {
    setRefreshing(true);
    wait(500).then(() => setRefreshing(false));
    getUpdatedData();
  }, []);

  useEffect(() => {
    setRefreshed(false);
    getUpdatedData();
  }, []);

  return (
    <ScrollView
      refreshing={refreshing}
      showsHorizontalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onPullToRefresh}
          tintColor={'white'}
        />
      }>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        {/* <TouchableOpacity
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
        </TouchableOpacity> */}
      </View>
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
          {refreshed ? (
            <>
              <BlueColumns />
              <LineChartData />
            </>
          ) : (
            <ActivityIndicator
              animating={true}
              color={COLORS.white}
              left={180}
            />
          )}
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
      {refreshed ? (
        statisticsByYearData?.map((stat, index) => (
          <TouchableOpacity key={index}>
            <Card
              containerStyle={[styles.card, styles.chosenCardStyle]}
              title="SoldRooms">
              {/* Card Context View */}
              <View style={{ flexDirection: 'row' }}>
                {/* LEFT-Side context */}
                <View style={{ marginRight: 20, flex: 1 }}>
                  <View style={{ marginBottom: 15 }}>
                    <Text style={{ color: COLORS.grayText }}>Дата:</Text>
                    <Text style={{ paddingTop: 5, color: COLORS.white }}>
                      {moment(stat?.start_date).format('DD MMM')} -{' '}
                      {moment(stat?.end_date).format('DD MMM')}
                    </Text>
                  </View>
                  <View style={{ marginBottom: 15 }}>
                    <Text style={{ color: COLORS.grayText }}>
                      Проданных номеров
                    </Text>
                    <Text style={{ paddingTop: 5, color: COLORS.white }}>
                      {numberWithSpaces(stat?.reserved)}
                    </Text>
                  </View>
                </View>
                {/* RIGHT-Side context */}
                <View style={{ flex: 1 }}>
                  <View style={{ marginBottom: 15 }}>
                    <Text style={{ color: COLORS.grayText }}>
                      Занято номеров:
                    </Text>
                    <Text style={{ paddingTop: 5, color: COLORS.white }}>
                      {stat?.load_by_period} %
                    </Text>
                  </View>

                  <View style={{ marginBottom: 15 }}>
                    <Text style={{ color: COLORS.grayText }}>Доход UZS</Text>
                    <Text style={{ paddingTop: 5, color: COLORS.white }}>
                      {numberWithSpaces(stat?.revenue)}
                    </Text>
                  </View>
                </View>
              </View>
            </Card>
          </TouchableOpacity>
        ))
      ) : (
        <Card
          containerStyle={[styles.card, styles.chosenCardStyle]}
          title="SoldRooms">
          <ActivityIndicator
            animating={true}
            color={COLORS.white}
            marginTop={40}
          />
        </Card>
      )}
      <View style={{ paddingBottom: 100 }} />
    </ScrollView>
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
    borderColor: COLORS.grayPlaceholder,
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
