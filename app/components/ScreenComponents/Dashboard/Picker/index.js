import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
// Theme
import { COLORS, SIZES } from '../../../../constants';
// Components
import Calendar from '../../../Additionals/date-picker';

const App = ({ handleAcceptButtonPress }) => {
  const [range, setRange] = useState({});
  const [dateRangeValue, setDateRangeValue] = useState(null);
  console.log(range);
  return (
    <SafeAreaView style={{ backgroundColor: '#212831', borderRadius: 12 }}>
      <View
        style={{
          width: SIZES.width,
        }}>
        <Calendar
          format="YYYY-MM-DD"
          showControls={true}
          userColors={{ title: '#FFFFFF' }}
          onDateChange={range => setRange(range)}
          mode="range"
          locale="ru"
          style={styles.container}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
          marginRight: 50,
          marginLeft: 50,
          paddingBottom: 20,
        }}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: COLORS.blue,
            borderRadius: 6,
            width: 108,
            height: 36,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: COLORS.blue,
              fontSize: 13,
              fontWeight: SIZES.fontWeight3,
            }}>
            Очистить
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.acceptButtonStyle}
          onPress={handleAcceptButtonPress}>
          <Text style={styles.acceptTextstyle}>Подтвердить</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 50,
  },
  selectedDateContainerStyle: {
    height: 35,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  selectedDateStyle: {
    fontWeight: 'bold',
    color: 'white',
  },
  acceptButtonStyle: {
    backgroundColor: '#5E85DB',
    borderRadius: 6,
    width: 108,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  acceptTextstyle: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: SIZES.fontWeight3,
  },
});

export default App;
