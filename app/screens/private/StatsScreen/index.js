import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
// Theme
import { COLORS, SIZES } from '../../../constants/theme';
// Components
import { Details, SoldRooms } from '../../../components/Stats';
// Helpers
import { firstDayOfMonth, today, monthRangeUntilToday } from '../../../helpers';
// Redux
import { connect } from 'react-redux';
import { getChannelsDataMiddleware } from '../../../redux/middlewares';

const StatsScreen = ({
  navigation,
  loading,
  chosenDateRange,
  channelsData,
  totalRevenue,
  totalSoldNights,
  totalAverageSum,
  chosenYear,
  annualData,
  // hotelID,
  error,
}) => {
  const [segmentIndex, setSegmentIndex] = useState(0);

  const dateRange = chosenDateRange ? chosenDateRange : monthRangeUntilToday;
  const hotelID = 48;

  // async function getStatsDataOnTabPress() {
  //   try {
  //     await getChannelsDataMiddleware(dateRange, hotelID);
  //   } catch (error) {
  //     alert(error);
  //   }
  // }

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     getStatsDataOnTabPress();
  //   });
  //   return unsubscribe;
  // }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#111923' }}>
      <View style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.headerTitle}>Статистика</Text>
          </View>
          <View style={styles.segmentControlTabsContainer}>
            <SegmentedControl
              values={['Обзор', 'Занятость']}
              selectedIndex={segmentIndex}
              onChange={event => {
                setSegmentIndex(event.nativeEvent.selectedSegmentIndex);
              }}
              activeFontStyle={{
                color: COLORS.white,
                fontWeight: SIZES.fontWeight2,
                fontSize: 15,
              }}
              tintColor="#546691"
              style={{
                backgroundColor: COLORS.segmentedControlBackgroundColor,
              }}
              inactiveFontStyle={{
                fontWeight: SIZES.fontWeight1,
                fontSize: SIZES.body6,
              }}
              fontStyle={{
                color: COLORS.white,
              }}
              style={{
                width: SIZES.width / 1.4,
              }}
            />
          </View>
        </View>
        <Divider
          orientation="horizontal"
          leftWidth={0.5}
          color={COLORS.grayPlaceholderBorder}
        />
        {segmentIndex === 0 ? (
          <Details
            navigation={navigation}
            loading={loading}
            chosenDateRange={chosenDateRange}
            channelsData={channelsData}
            totalRevenue={totalRevenue}
            totalRevenue={totalRevenue}
            totalSoldNights={totalSoldNights}
            totalAverageSum={totalAverageSum}
            hotelID={hotelID}
            error={error}
          />
        ) : (
          <SoldRooms
            navigation={navigation}
            loading={loading}
            chosenYear={chosenYear}
            annualData={annualData}
            hotelID={hotelID}
            error={error}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: COLORS.white,
  },
  segmentControlTabsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
});

function mapStateToProps({ channelsReducer, annualReducer, hotelReducer }) {
  const {
    loading,
    chosenDateRange,
    channelsData,
    totalRevenue,
    totalSoldNights,
    totalAverageSum,
    error,
  } = channelsReducer;
  const { chosenYear, annualData } = annualReducer;
  const { hotelID } = hotelReducer;
  return {
    loading,
    chosenDateRange,
    channelsData,
    totalRevenue,
    totalSoldNights,
    totalAverageSum,
    error,
    chosenYear,
    annualData,
    hotelID,
  };
}

export default connect(mapStateToProps)(StatsScreen);
