import React, { useContext } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';
import { Divider } from 'react-native-elements';
// Theme
import { COLORS, POSITIONING, SIZES } from '../../../constants/theme';
// Util
import { clearStorage } from '../../../utils/useCustomAsyncStorage';

export default function SettingsScreen({ navigation }) {
  function logOutButtonPress() {
    Alert.alert('Вы действительно хотите выйти из своего аккаунта?', '', [
      {
        text: 'Выйти',
        onPress: () => handleLougOut(),
        style: 'destructive',
      },
      {
        text: 'Отменить',
        style: 'cancel',
      },
    ]);
  }

  async function handleLougOut() {
    try {
      await clearStorage();
      navigation.replace('LoginScreen');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
      <View style={POSITIONING.align}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={styles.topTitle}>Настройки</Text>
        </View>
        <Card
          containerStyle={[styles.menuBlock, styles.chosenCardStyle]}
          title="SoldRooms">
          {/* Card Context View */}
          <View style={{}}>
            {/* LEFT-Side context */}
            <View style={{ marginBottom: 15 }}>
              <TouchableOpacity
                style={{
                  marginBottom: 20,
                  height: 20,
                }}
                onPress={() => navigation.navigate('ComparisonScreen')}>
                <Text style={styles.menuOptionStyle}>Мои гостиницы</Text>

                <Divider
                  orientation="horizontal"
                  width={0.7}
                  color={COLORS.grayDivider}
                  top={10}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  marginBottom: 20,
                }}>
                <Text style={styles.menuOptionStyle}>Отзывы гостей</Text>
                <Divider
                  orientation="horizontal"
                  width={0.7}
                  color={COLORS.grayDivider}
                  top={10}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginBottom: 20,
                }}>
                <Text style={styles.menuOptionStyle}>Финансы</Text>
                <Divider
                  orientation="horizontal"
                  width={0.7}
                  color={COLORS.grayDivider}
                  top={10}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginBottom: 20,
                }}>
                <Text style={styles.menuOptionStyle}>Настройки сообщений</Text>

                <Divider
                  orientation="horizontal"
                  width={0.5}
                  color={COLORS.grayDivider}
                  top={10}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  marginBottom: 20,
                }}>
                <Text style={styles.menuOptionStyle}>Спецпредложения</Text>

                <Divider
                  orientation="horizontal"
                  width={0.7}
                  color={COLORS.grayDivider}
                  top={10}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  marginBottom: 20,
                }}>
                <Text style={styles.menuOptionStyle}>Центр возможностей</Text>

                <Divider
                  orientation="horizontal"
                  width={0.7}
                  color={COLORS.grayDivider}
                  top={10}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  marginBottom: 20,
                }}>
                <Text style={styles.menuOptionStyle}>Отчеты</Text>

                <Divider
                  orientation="horizontal"
                  width={0.7}
                  color={COLORS.grayDivider}
                  top={10}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  marginBottom: 10,
                }}>
                <Text style={styles.menuOptionStyle}>
                  Повышение категории номера
                </Text>

                <Divider
                  orientation="horizontal"
                  width={0.7}
                  color={COLORS.grayDivider}
                  top={10}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  marginTop: 10,
                  height: 30,
                }}>
                <Text style={styles.menuOptionStyle}>Питание</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card>
      </View>
      <View
        style={{
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          style={styles.logOutButtonStyle}
          onPress={logOutButtonPress}>
          <Text
            style={[styles.logOutText, { alignSelf: 'flex-start', left: 15 }]}>
            Выйти
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: 'white',
    alignSelf: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuBlock: {
    backgroundColor: COLORS.grayPlaceholder,
    borderColor: COLORS.grayPlaceholder,
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: '#404040',
    height: 140,
    width: 355,
    height: 368,
  },
  logOutButton: {
    backgroundColor: COLORS.grayPlaceholder,
    borderColor: COLORS.grayPlaceholder,
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: '#404040',
    height: 140,
    width: 325,
    height: 368,
  },
  menuOptionStyle: {
    fontWeight: SIZES.fontWeight1,
    fontSize: SIZES.body5,
    color: COLORS.white,
  },
  logOutButton: {
    fontWeight: SIZES.fontWeight1,
    fontSize: SIZES.body5,
    color: COLORS.red,
  },
  logOutButtonStyle: {
    backgroundColor: COLORS.grayPlaceholder,
    borderColor: COLORS.grayPlaceholder,
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: '#404040',
    height: 140,
    width: 355,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  logOutText: {
    fontWeight: SIZES.fontWeight1,
    fontSize: SIZES.body5,
    color: COLORS.red,
  },
});
