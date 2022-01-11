import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { POSITIONING, SIZES } from '../../../../constants';
import FadeInView from '../../../FadeInView';
import { NoDataToShowSvg } from '../../../../assets/icons/SvgIcons';

export default function NoDataToShow() {
  return (
    <FadeInView>
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <NoDataToShowSvg />
        </View>
        <Text style={styles.noDataToShowText}>Нет данных для показа</Text>
      </View>
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SIZES.width,
    height: 300,
    ...POSITIONING.center,
  },
  imageWrapper: {
    marginBottom: 30,
  },
  noDataToShowText: {
    color: '#F0F0F0',
    fontSize: SIZES.body5,
    fontWeight: SIZES.fontWeight0,
  },
});
