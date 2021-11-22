import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SegmentedControl from 'rn-segmented-control';
import { COLORS } from '../constants/theme';

export default function SegmentControl() {
  const [tabIndex, setTabIndex] = React.useState(1);
  const handleTabsChange = index => {
    setTabIndex(index);
  };
  return (
    <SegmentedControl
      tabs={['Обзор', 'Занятость']}
      currentIndex={tabIndex}
      onChange={handleTabsChange}
      segmentedControlBackgroundColor="#292F3A"
      activeSegmentBackgroundColor="#485C8A"
      activeTextColor="white"
      textColor={COLORS.white}
      paddingVertical={10}
      width={220}
      paddingHorizontal={10}
      activeSegmentStyle={{ borderRadius: 6 }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
  },
  textStyle: {
    fontSize: 24,
    textAlign: 'center',
    paddingVertical: 2,
  },
});
