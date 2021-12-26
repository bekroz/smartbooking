import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SIZES } from '../../../constants/theme';
import FadeInView from '../../../components/FadeInView/FadeInView';
import { NoDataToShowSvg } from '../../../assets/icons/SvgIcons';

export default function NoDataToShow() {
  return (
    <FadeInView style={{}}>
      <View
        style={{
          width: SIZES.width,
          height: 300,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{ marginBottom: 30 }}>
          <NoDataToShowSvg />
        </View>
        <Text style={styles.noDataToShowText}>Нет данных для показа</Text>
      </View>
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  noDataToShowText: {
    color: '#F0F0F0',
    fontSize: SIZES.body5,
    fontWeight: SIZES.fontWeight0,
  },
});
