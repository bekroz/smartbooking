import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, POSITIONING, SIZES } from '../../../../constants';
import FadeInView from '../../../FadeInView';
import { NoNetworkSvg } from '../../../../assets/icons/SvgIcons';

export default function NoNetwork({ show }) {
  if (!show) {
    return (
      <FadeInView
        style={{
          flex: 1,
          bottom: 50,
          ...POSITIONING.center,
        }}>
        <View style={{ marginBottom: 30 }}>
          <NoNetworkSvg />
        </View>
        <Text style={styles.noNetWorkText}>
          {`Нет соединения с интернетом, 
                      подождем?`}
        </Text>
      </FadeInView>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  noNetWorkText: {
    color: COLORS.white,
    fontSize: SIZES.body3,
    fontWeight: SIZES.fontWeight3,
  },
});
