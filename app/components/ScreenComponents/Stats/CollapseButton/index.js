import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, POSITIONING, SIZES } from '../../../../constants';

const CollapseButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
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
    height: 50,
    ...POSITIONING.center,
    backgroundColor: 'green',
    borderRadius: 6,
  },
  collapserText: {
    color: COLORS.white,
    fontWeight: SIZES.fontWeight0,
  },
});
