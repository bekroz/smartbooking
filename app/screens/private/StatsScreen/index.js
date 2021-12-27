import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
// Theme
import { COLORS } from '../../../constants/theme';
// Components
import {
  ChannelsDataShow,
  AnnualDataShow,
  StatsSegmentControl,
} from '../../../components/ScreenComponents/Stats';

const StatsScreen = () => {
  const [index, setIndex] = useState(0);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#111923' }}>
      <View style={styles.container}>
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.headerTitle}>Статистика</Text>
          </View>
          <View style={styles.segmentControlTabsContainer}>
            <StatsSegmentControl
              selectedIndex={index}
              onChange={e => setIndex(e.nativeEvent.selectedSegmentIndex)}
            />
          </View>
        </View>
        <Divider
          orientation="horizontal"
          leftWidth={0.5}
          color={COLORS.grayPlaceholderBorder}
        />
        {index === 0 ? <ChannelsDataShow /> : <AnnualDataShow />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkBackground,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: COLORS.white,
  },
});

// function mapStateToProps({ channelsReducer, annualReducer, hotelReducer }) {
//   const {
//     loading,
//     chosenDateRange,
//     channelsData,
//     totalRevenue,
//     totalSoldNights,
//     totalAverageSum,
//     error,
//   } = channelsReducer;
//   const { chosenYear, annualData } = annualReducer;
//   const { hotelID } = hotelReducer;
//   return {
//     loading,
//     chosenDateRange,
//     channelsData,
//     totalRevenue,
//     totalSoldNights,
//     totalAverageSum,
//     error,
//     chosenYear,
//     annualData,
//     hotelID,
//   };
// }

export default StatsScreen;
