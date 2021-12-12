import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NoNetwork } from '../../../assets/icons/SvgIcons';
import { COLORS, SIZES } from '../../../constants/theme';
import FadeInView from '../../../components/FadeInView/FadeInView';

const NoNetworkScreen = ({ show }) => {
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
          <NoNetwork />
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
};

export default NoNetworkScreen;

const styles = StyleSheet.create({
  noNetWorkText: {
    color: COLORS.white,
    fontSize: SIZES.body3,
    fontWeight: SIZES.fontWeight3,
  },
});
