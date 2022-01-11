import React from 'react';
import { View, StyleSheet } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { SEGMENT_VALUES } from '../../../../constants';
import { COLORS, POSITIONING, SIZES } from '../../../../constants';

export default function StatsSegmentControl({ onChange, selectedIndex }) {
  return (
    <View style={styles.segmentControlTabsContainer}>
      <SegmentedControl
        values={SEGMENT_VALUES}
        selectedIndex={selectedIndex}
        onChange={onChange}
        activeFontStyle={styles.activeSegmentFontStyle}
        tintColor="#546691"
        style={styles.segmentControlStyle}
        inactiveFontStyle={styles.inactiveSegmentFontStyle}
        fontStyle={styles.segmentFontStyle}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  segmentControlTabsContainer: {
    marginBottom: 12,
    ...POSITIONING.center,
  },
  activeSegmentFontStyle: {
    color: COLORS.white,
    fontWeight: SIZES.fontWeight2,
    fontSize: 15,
  },
  segmentControlStyle: {
    backgroundColor: COLORS.segmentedControlBackgroundColor,
    width: SIZES.width / 1.4,
  },
  inactiveSegmentFontStyle: {
    fontWeight: SIZES.fontWeight1,
    fontSize: SIZES.body6,
  },
  segmentFontStyle: {
    color: COLORS.white,
  },
});
