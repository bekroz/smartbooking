import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants/theme';
import FadeInView from '../../../components/FadeInView/FadeInView';
import { NoFutureDataToShowSvg } from '../../../assets/icons/SvgIcons';

export default function NoFutureDataToShow({ show }) {
  if (!show) {
    return (
      <FadeInView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          bottom: 50,
        }}>
        <View style={{ marginBottom: 30 }}>
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
  noFutureDataToShowText: {
    color: COLORS.white,
    fontSize: SIZES.body3,
    fontWeight: SIZES.fontWeight3,
  },
});
