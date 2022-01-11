import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, POSITIONING, SIZES } from '../../../../constants';

const CollapseButton = () => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => alert('Pressed')}>
      <Text style={styles.collapserText}>Показать еще</Text>
    </TouchableOpacity>
  );
};

export default CollapseButton;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignSelf: 'center',
    width: SIZES.width - 30,
    height: 34,
    ...POSITIONING.center,
    // backgroundColor: 'green',
    // position: 'absolute',
    // bottom: 30,
    // borderRadius: 6,
    // bottom: 0,
    // zIndex: 99,
  },
  collapserText: {
    color: COLORS.white,
    fontWeight: SIZES.fontWeight0,
  },
});
