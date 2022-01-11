import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, POSITIONING, SIZES } from '../../../../constants';

export default function NoMoreDataAlert() {
  return (
    <View style={styles.noMoreDataContainer}>
      <Text style={styles.noMoreDataAlertText}>Все данные загружены</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  noMoreDataContainer: {
    alignSelf: 'center',
    backgroundColor: COLORS.grayPlaceholder,
    width: SIZES.width - 20,
    height: 40,
    marginTop: 15,
    borderRadius: 6,
    ...POSITIONING.center,
  },
  noMoreDataAlertText: {
    color: COLORS.grayText,
    fontWeight: SIZES.fontWeight1,
    fontSize: SIZES.body5,
  },
});
