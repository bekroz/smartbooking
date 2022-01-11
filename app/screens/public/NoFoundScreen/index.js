import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
// Theme
import { COLORS, SIZES } from '../../../constants';
// Icons
import { NoFoundScreenSvg } from '../../../assets/icons/SvgIcons';

export default function NoFoundScreen({ navigation }) {
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
        <NoFoundScreenSvg />
        <Text
          style={{
            fontSize: 20,
            fontWeight: SIZES.fontWeight3,
            color: COLORS.white,
            textAlign: 'center',
            marginTop: 19,
            marginBottom: 10,
          }}>
          Проект в разработке
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: SIZES.fontWeight0,
            color: COLORS.white,
            textAlign: 'center',
            marginBottom: 20,
          }}>
          Cтраницы на данный момент не существует, но в скором времени её
          добавим
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.backToLogin}>Вернуться на страницу входа</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backToLogin: {
    fontSize: SIZES.body6,
    fontWeight: SIZES.fontWeight1,
    color: COLORS.blue,
  },
});
