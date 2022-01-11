import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';
// Theme
import { COLORS, POSITIONING, SIZES } from '../../../constants';
// Components
import { SpaceForScroll, GoBackButton } from '../../../components';
// Helpers
import { numberWithSpaces, getMonthNameLong } from '../../../helpers';
// Constants
import { COMPARISON_CARD_VALUES } from '../../../constants';
// Redux
import { connect } from 'react-redux';
import { getComparisonDataMiddleware } from '../../../redux/middlewares';

const ComparisonScreen = ({
  navigation,
  loading,
  comparisonData,
  chosenYear,
  chosenMonth,
}) => {
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getComparisonDataMiddleware();
  }, []);

  const onPullToRefresh = useCallback(() => {
    getComparisonDataMiddleware();
  }, []);

  const formattedMonth = getMonthNameLong(chosenMonth);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBarContainer}>
        <GoBackButton navigation={navigation} />
        <Text style={styles.title}>Сравнение объектов</Text>
      </View>
      <View style={styles.dateButtonContainer}>
        <TouchableOpacity style={styles.yearButton}>
          <Text style={styles.dateButtonText}>{chosenYear}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.monthButton}>
          <Text style={styles.dateButtonText}>{formattedMonth}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onPullToRefresh}
            tintColor={COLORS.white}
          />
        }>
        {comparisonData.map(
          (
            {
              name,
              load,
              revenue,
              reserved,
              average_price,
              revpar,
              compare_load_percent,
              compare_revenue_percent,
              compare_reserved_percent,
              compare_average_price_percent,
              compare_revpar_percent,
            },
            index,
          ) => (
            <Card containerStyle={styles.card} title="Revenue" key={index}>
              <View style={styles.hotelNameContainer}>
                <Text style={styles.hotelNameText}>{name}</Text>
              </View>
              <View style={styles.cardContainer}>
                <View style={styles.cardDefinitionContainer}>
                  {COMPARISON_CARD_VALUES.map((item, index) => (
                    <Text key={index} style={styles.cardDefinitionText}>
                      {item}
                    </Text>
                  ))}
                </View>
                <>
                  <View style={styles.cardContentContainer}>
                    <Text style={styles.contentText}>
                      {load ? numberWithSpaces(load) : 0}
                    </Text>
                    <Text style={styles.contentText}>
                      {revenue ? numberWithSpaces(revenue) : 0}
                    </Text>
                    <Text style={styles.contentText}>
                      {reserved ? numberWithSpaces(reserved) : 0}
                    </Text>
                    <Text style={styles.contentText}>
                      {average_price ? numberWithSpaces(average_price) : 0}
                    </Text>
                    <Text style={styles.contentText}>
                      {revpar ? numberWithSpaces(revpar) : 0}
                    </Text>
                  </View>
                  {/* Percentages */}
                  <View style={styles.percentageContainer}>
                    <Text
                      style={
                        compare_load_percent < 0
                          ? styles.inActivePercentageStyle
                          : styles.activePercentageStyle
                      }>
                      {compare_load_percent === '0'
                        ? `${numberWithSpaces(compare_load_percent)} %`
                        : null}
                    </Text>
                    <Text
                      style={
                        compare_revenue_percent < 0
                          ? styles.inActivePercentageStyle
                          : styles.activePercentageStyle
                      }>
                      {compare_revenue_percent === '0'
                        ? `${numberWithSpaces(compare_revenue_percent)} %`
                        : null}
                    </Text>
                    <Text
                      style={
                        compare_reserved_percent < 0
                          ? styles.inActivePercentageStyle
                          : styles.activePercentageStyle
                      }>
                      {compare_reserved_percent === '0'
                        ? `${numberWithSpaces(compare_reserved_percent)} %`
                        : null}
                    </Text>
                    <Text
                      style={
                        compare_average_price_percent < 0
                          ? styles.inActivePercentageStyle
                          : styles.activePercentageStyle
                      }>
                      {compare_average_price_percent === '0'
                        ? `${numberWithSpaces(compare_average_price_percent)} %`
                        : null}
                    </Text>
                    <Text
                      style={
                        compare_revpar_percent < 0
                          ? styles.inActivePercentageStyle
                          : styles.activePercentageStyle
                      }>
                      {compare_revpar_percent === '0'
                        ? `${numberWithSpaces(compare_revpar_percent)} %`
                        : null}
                    </Text>
                  </View>
                </>
              </View>
            </Card>
          ),
        )}
        <SpaceForScroll paddingBottom={30} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkBackground,
  },
  topBarContainer: {
    flexDirection: 'row',
    width: SIZES.width,
    ...POSITIONING.center,
  },
  monthButton: {
    backgroundColor: '#2E3641',
    borderRadius: 5,
    borderWidth: 0.167,
    borderColor: '#000000',
    height: 30,
    width: 114,
    backgroundColor: '#292F3A',
    borderColor: COLORS.blue,
    alignSelf: 'flex-start',
    height: 35,
    margin: 10,
    marginBottom: 0,
    ...POSITIONING.center,
  },
  dateButtonContainer: {
    flexDirection: 'row',
    paddingBottom: 15,
    ...POSITIONING.justify,
  },
  yearButton: {
    backgroundColor: '#2E3641',
    borderRadius: 5,
    borderWidth: 0.167,
    borderColor: '#000000',
    height: 30,
    width: 114,
    borderColor: COLORS.blue,
    width: 53,
    height: 35,
    margin: 10,
    marginBottom: 0,
    ...POSITIONING.center,
  },
  dateButtonText: {
    fontWeight: SIZES.fontWeight1,
    fontSize: 14,
    textAlign: 'center',
    color: COLORS.white,
    // fontFamily: 'SF Pro Display',
  },
  title: {
    fontWeight: SIZES.fontWeight3,
    fontSize: SIZES.h2,
    color: COLORS.white,
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
  hotelNameContainer: {
    alignItems: 'center',
  },
  hotelNameText: {
    fontWeight: SIZES.fontWeight3,
    fontSize: SIZES.body5,
    color: COLORS.white,
  },
  cardContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  cardDefinitionContainer: {
    alignItems: 'flex-start',
    marginRight: 25,
    width: 140,
    height: 130,
  },
  cardDefinitionText: {
    marginBottom: 8,
    color: COLORS.grayText,
  },
  cardContentContainer: {
    alignItems: 'flex-start',
    marginRight: 5,
    width: 115,
    height: 130,
  },
  contentText: {
    marginBottom: 8,
    color: COLORS.white,
  },
  equalBottomMargin: {
    marginBottom: 8,
  },
  percentageContainer: {
    alignItems: 'flex-start',
    width: 60,
    height: 130,
  },
  activePercentageStyle: {
    marginBottom: 8,
    width: 50,
    color: COLORS.greenProgress,
  },
  inActivePercentageStyle: {
    marginBottom: 8,
    color: COLORS.red,
  },
});

function mapStateToProps({ comparisonReducer, dateReducer }) {
  const { loading, comparisonData } = comparisonReducer;
  const { chosenYear, chosenMonth } = dateReducer;
  return {
    loading,
    comparisonData,
    chosenYear,
    chosenMonth,
  };
}

export default connect(mapStateToProps)(ComparisonScreen);
