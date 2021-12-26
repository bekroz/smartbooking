import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants/theme';
import FadeInView from '../../FadeInView/FadeInView';
import { NoNetworkSvg } from '../../../assets/icons/SvgIcons';

export default function NoNetwork({ show }) {
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
