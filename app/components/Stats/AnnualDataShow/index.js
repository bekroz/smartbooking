import React, { useEffect, useCallback, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import dayjs from 'dayjs';
// Theme
import { COLORS, SIZES } from '../../../constants/theme';
// Helpers
import { numberWithSpaces } from '../../../helpers';
// Components
import { SpaceForScroll, BlueColumns, LineChartData } from '../..';

import { connect } from 'react-redux';
import { getAnnualDataMiddleware } from '../../../redux/middlewares';
import FadeInView from '../../../components/FadeInView/FadeInView';

const AnnualDataShow = ({
  navigation,
  loading,
  annualData,
  chosenYear,
  error,
}) => {
  const onPullToRefresh = useCallback(() => {
    getAnnualDataMiddleware();
  }, []);

  useEffect(() => {
    getAnnualDataMiddleware();
  }, []);

  const [refreshing, setRefreshing] = useState(false);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
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
            fontWeight: SIZES.fontWeight1,
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
          <>
            <BlueColumns />
            <LineChartData />
          </>
        </ScrollView>
      </View>
      <Divider
        orientation="horizontal"
        leftWidth={0.5}
        color={COLORS.grayPlaceholderBorder}
      />
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={{ alignSelf: 'flex-start' }}>
          <Text style={styles.soldNightsText}>Количество проданных ночей</Text>
        </View>
        <TouchableOpacity style={styles.chosenYearButton}>
          <Text style={styles.topBarText}>{chosenYear}</Text>
        </TouchableOpacity>
      </View>
      {!loading ? (
        annualData?.map((stat, index) => (
          <TouchableOpacity key={index}>
            <Card
              containerStyle={[styles.card, styles.chosenCardStyle]}
              title="SoldRooms">
              {/* Card Content View */}
              <FadeInView>
                <View style={{ flexDirection: 'row' }}>
                  {/* LEFT-Side context */}
                  <View style={{ marginRight: 20, flex: 1 }}>
                    <View style={{ marginBottom: 15 }}>
                      <Text style={{ color: COLORS.grayText }}>Дата:</Text>
                      <Text style={{ paddingTop: 5, color: COLORS.white }}>
                        {dayjs(stat?.start_date).format('DD MMM')} -{' '}
                        {dayjs(stat?.end_date).format('DD MMM')}
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
              </FadeInView>
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
      <SpaceForScroll />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topBarBtn: {
    backgroundColor: '#2E3641',
    borderRadius: 5,
    borderWidth: 0.167,
    borderColor: COLORS.blackBackground,
    height: 30,
    width: 114,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarText: {
    fontWeight: SIZES.fontWeight1,
    fontSize: SIZES.body6,
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
    fontSize: SIZES.body5,
    fontWeight: SIZES.fontWeight3,
  },
  soldNightsText: {
    margin: 15,
    marginBottom: 10,
    fontSize: SIZES.body5,
    fontWeight: SIZES.fontWeight1,
    color: COLORS.white,
  },
  chosenYearButton: {
    backgroundColor: '#2E3641',
    borderRadius: 5,
    borderWidth: 0.167,
    borderColor: COLORS.blue,
    height: 30,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    top: -3,
    alignSelf: 'flex-end',
    right: 5,
  },
});

function mapStateToProps({ annualReducer, dateReducer }) {
  const { loading, annualData, error } = annualReducer;
  const { chosenYear } = dateReducer;
  return { loading, annualData, chosenYear, error };
}

export default connect(mapStateToProps)(AnnualDataShow);
