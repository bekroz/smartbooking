import React from 'react';
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
import { COLORS, POSITIONING, SIZES } from '../../../constants';
// Util
import { clearStorage } from '../../../utils/useCustomAsyncStorage';
import {
  logOutRequestAction,
  logOutFailureAction,
  logOutSuccessAction,
  purgeHotelDataAction,
} from '../../../redux/actions';
import { useDispatch } from 'react-redux';

export default function SettingsScreen({ navigation }) {
  const dispatch = useDispatch();

  function logOutButtonPress() {
    Alert.alert('Вы действительно хотите выйти из своего аккаунта?', '', [
      {
        text: 'Выйти',
        onPress: () => handleLogOut(),
        style: 'destructive',
      },
      {
        text: 'Отменить',
        style: 'cancel',
      },
    ]);
  }

  async function handleLogOut() {
    dispatch(logOutRequestAction());
    try {
      await clearStorage();
      dispatch(logOutSuccessAction());
      dispatch(purgeHotelDataAction());
      navigation.replace('LoginScreen');
    } catch (err) {
      dispatch(logOutFailureAction(err));
      console.error(err);
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
      <View style={styles.logOutButtonContainer}>
        <TouchableOpacity
          style={styles.logOutButton}
          onPress={logOutButtonPress}>
          <Text style={styles.logOutText}>Выйти</Text>
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
    ...POSITIONING.center,
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
  menuOptionStyle: {
    fontWeight: SIZES.fontWeight1,
    fontSize: SIZES.body5,
    color: COLORS.white,
  },
  logOutButtonContainer: {
    alignSelf: 'center',
  },
  logOutButton: {
    backgroundColor: COLORS.grayPlaceholder,
    borderColor: COLORS.grayPlaceholder,
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: '#404040',
    height: 140,
    width: 355,
    height: 48,
    marginTop: 20,
    ...POSITIONING.center,
  },
  logOutText: {
    fontWeight: SIZES.fontWeight1,
    fontSize: SIZES.body5,
    color: COLORS.red,
    alignSelf: 'flex-start',
    marginLeft: 15,
  },
});
