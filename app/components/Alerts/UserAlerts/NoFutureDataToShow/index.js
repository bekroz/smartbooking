import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NoFutureDataToShowSvg } from '../../../../assets/icons/SvgIcons';
import { COLORS, POSITIONING, SIZES } from '../../../../constants';
import FadeInView from '../../../FadeInView';

export default function NoFutureDataToShow({ show }) {
  if (!show) {
    return (
      <FadeInView style={styles.container}>
        <View style={styles.imageWrapper}>
          <NoFutureDataToShowSvg />
        </View>
        <Text
          style={styles.noFutureDataToShowText}>{`Нет данных для показа`}</Text>
      </FadeInView>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: 50,
    ...POSITIONING.center,
  },
  imageWrapper: {
    marginBottom: 30,
  },
  noFutureDataToShowText: {
    color: COLORS.white,
    fontSize: SIZES.body3,
    fontWeight: SIZES.fontWeight3,
  },
});
