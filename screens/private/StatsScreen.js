import React, { useState, useEffect } from 'react';
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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#111923' }}>
      <View style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
        <View>
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
              textStyle={{ fontWeight: '500', fontSize: 14 }}
              activeTextWeight="600"
            />
          </View>
        </View>
        <Divider
          orientation="horizontal"
          leftWidth={0.5}
          color={COLORS.grayPlaceholderBorder}
        />
        {tabIndex === 0 ? <Details /> : <SoldRooms />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: COLORS.white,
  },
  segmentControlTabsContainer: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'center',
    borderRadius: 6,
  },
});
