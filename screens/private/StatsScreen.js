import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import SegmentedControl from 'rn-segmented-control';
// Theme
import { COLORS, SIZES } from '../../constants/theme';
// Components
import Details from '../../components/Stats/Details';
import SoldRooms from '../../components/Stats/SoldRooms';

export default function StatsScreen() {
  const tabs = ['Обзор', 'Занятость'];
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabsChange = index => {
    setTabIndex(index);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
      <View style={{ backgroundColor: '#111923', alignItems: 'center' }}>
        <View style={styles.titleContainer}>
          <Text style={styles.headerTitle}>Статистика</Text>
        </View>
        <View style={styles.segmentControlTabsContainer}>
          <SegmentedControl
            tabs={tabs}
            currentIndex={tabIndex}
            onChange={handleTabsChange}
            segmentedControlBackgroundColor={
              COLORS.segmentedControlBackgroundColor
            }
            activeSegmentBackgroundColor={COLORS.darkBlue}
            activeTextColor={COLORS.white}
            textColor={COLORS.white}
            paddingVertical={6}
            width={220}
            activeSegmentStyle={{ borderRadius: 6 }}
          />
        </View>
      </View>
      <Divider
        orientation="horizontal"
        leftWidth={0.5}
        color={COLORS.grayPlaceholderBorder}
      />
      {tabIndex === 0 ? <Details /> : <SoldRooms />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    alignContent: 'center',
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: '700',
    left: 15,
    color: COLORS.white,
  },
  search: {
    left: 55,
    padding: 10,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  segmentControlTabsContainer: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'center',
  },
  topBarBtn: {
    backgroundColor: '#2E3641',
    borderRadius: 6,
    borderWidth: 0.167,
    borderColor: '#000000',
    height: 30,
    width: 114,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarText: {
    fontSize: 14,
    textAlign: 'center',
    color: COLORS.white,
    // fontFamily: 'SF Pro Display',
  },
  chosenBarTextStyle: {
    fontWeight: SIZES.fontWeight3,
  },
  activeTabStyle: {
    fontSize: 15,
    fontWeight: SIZES.fontWeight2,
  },
  inActiveTabStyle: {
    fontSize: 14,
    fontWeight: SIZES.fontWeight1,
  },
});
