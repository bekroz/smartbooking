import React from 'react';
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';

export default function CentralColumnIndicator() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.darkBackground,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          height: 148,
          width: 43,
          borderWidth: 0.5,
          borderRadius: 6,
          borderColor: COLORS.blue,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.h3,
            fontWeight: SIZES.fontWeight0,
          }}>
          Авг
        </Text>
      </View>
    </SafeAreaView>
  );
}
