import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { COLORS, SIZES } from '../../../constants';
import { CalendarScreenSvg } from '../../../assets/icons/SvgIcons';

export default function CalendarScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.darkBackground,
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          top: 120,
        }}>
        <CalendarScreenSvg />
        <Text
          style={{
            fontSize: 20,
            fontWeight: SIZES.fontWeight3,
            color: COLORS.white,
            textAlign: 'center',
            marginTop: 19,
            marginBottom: 9,
          }}>
          Проект в разработке
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: SIZES.fontWeight0,
            color: COLORS.white,
            textAlign: 'center',
          }}>
          Cтраницы на данный момент не существует, но в скором времени её
          добавим
        </Text>
      </View>
    </SafeAreaView>
  );
}
