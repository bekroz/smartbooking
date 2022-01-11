import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { COLORS, SIZES } from '../../../constants';
// Icons
import { RestoreScreenSvg } from '../../../assets/icons/SvgIcons';

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
        <RestoreScreenSvg />
        <Text
          style={{
            fontSize: 20,
            fontWeight: SIZES.fontWeight3,
            color: COLORS.white,
            textAlign: 'center',
            marginTop: 19,
            marginBottom: 10,
          }}>
          TODO: PASS RESTORE SCREEN
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

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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
