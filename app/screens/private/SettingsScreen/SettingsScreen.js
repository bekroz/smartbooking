import React, { useContext } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';
import { Divider } from 'react-native-elements';
// Theme
import { COLORS, POSITIONING, SIZES } from '../../../constants/theme';
// Util
import { clearStorage } from '../../../utils/useCustomAsyncStorage';

export default function SettingsScreen({ navigation }) {
  const handleLogOutButtonPress = async () => {
    try {
      await clearStorage();
      navigation.replace('LoginScreen');
    } catch (error) {
      console.error(error);
    }
  };

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
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <TouchableOpacity
          style={{
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
          }}
          onPress={handleLogOutButtonPress}>
          <Text
            style={[styles.logOutText, { alignSelf: 'flex-start', left: 15 }]}>
            Log Out
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
  logOutText: {
    fontWeight: SIZES.fontWeight1,
    fontSize: SIZES.body5,
    color: COLORS.red,
  },
});

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import React, { useEffect } from 'react';
// import SettingsComponent from '../../components/SettingsComponent'

// const Settings = () => {
//   const [email, setEmail] = React.useState(null);
//   const [modalVisible, setModalVisible] = React.useState(false);
//   const [sortBy, setSortBy] = React.useState(null);

//   const saveSetting = (key, value) => {
//     AsyncStorage.setItem(key, value);
//   };

//   const settingsOptions = [
//     { title: 'My Info', subTitle: 'Setup your profile', onPress: () => {} },
//     { title: 'Accounts', subTitle: null, onPress: () => {} },
//     {
//       title: 'Default account for new contacts',
//       subTitle: email,
//       onPress: () => {},
//     },
//     {
//       title: 'Contacts to display',
//       subTitle: 'All contacts',
//       onPress: () => {},
//     },
//     {
//       title: 'Sort by',
//       subTitle: sortBy,
//       onPress: () => {
//         setModalVisible(true);
//       },
//     },
//     { title: 'Name format', subTitle: 'First name first', onPress: () => {} },
//     { title: 'Import', subTitle: null, onPress: () => {} },
//     { title: 'Export', subTitle: null, onPress: () => {} },
//     { title: 'Blocked numbers', subTitle: null, onPress: () => {} },
//     { title: 'About RNContacts', subTitle: null, onPress: () => {} },
//   ];

//   const prefArr = [
//     {
//       name: 'First Name',
//       selected: sortBy === 'First Name',

//       onPress: () => {
//         saveSetting('sortBy', 'First Name');
//         setSortBy('First Name');
//         setModalVisible(false);
//       },
//     },
//     {
//       name: 'Last Name',
//       selected: sortBy === 'Last Name',
//       onPress: () => {
//         saveSetting('sortBy', 'Last Name');
//         setSortBy('Last Name');
//         setModalVisible(false);
//       },
//     },
//   ];

//   const getSettings = async () => {
//     const user = await AsyncStorage.getItem('user');
//     setEmail(JSON.parse(user).email);

//     const sortPref = await AsyncStorage.getItem('sortBy');
//     if (sortPref) {
//       setSortBy(sortPref);
//     }
//   };
//   useEffect(() => {
//     getSettings();
//   }, []);

//   return (
//     <SettingsComponent
//       modalVisible={modalVisible}
//       setModalVisible={setModalVisible}
//       settingsOptions={settingsOptions}
//       prefArr={prefArr}
//     />
//   );
// };

// export default Settings;
