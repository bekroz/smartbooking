import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants/theme';

export default function NoShowStatus() {
  <View style={styles.statusNoShowViewStyle}>
    <Text style={styles.statusNoShowTextStyle}>Не заезд</Text>
  </View>;
}

const styles = StyleSheet.create({
  statusNoShowViewStyle: {
    height: 21,
    borderRadius: 4,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    left: 15,
    backgroundColor: '#424339',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  statusNoShowTextStyle: {
    fontWeight: SIZES.fontWeight1,
    color: COLORS.yellow,
    fontSize: 13,
  },
});
