import { View, Text, StyleSheet } from 'react-native';
import { COLORS, POSITIONING, SIZES } from '../../../../constants';

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
    left: 15,
    backgroundColor: '#424339',
    flexWrap: 'wrap',
    alignContent: 'center',
    ...POSITIONING.center,
  },
  statusNoShowTextStyle: {
    fontWeight: SIZES.fontWeight1,
    color: COLORS.yellow,
    fontSize: 13,
  },
});
