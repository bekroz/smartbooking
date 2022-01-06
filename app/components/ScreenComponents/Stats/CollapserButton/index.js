import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, SIZES } from '../../../../constants';

const CollapserButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <TouchableOpacity
        style={{
          alignItems: 'center',
        }}>
        <Text style={styles.collapserText}>Показать еще</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default CollapserButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    width: SIZES.width - 30,
    height: 34,
    backgroundColor: 'red',
    opacity: 0.5,
    position: 'relative',
    bottom: 30,
    borderRadius: 6,
    zIndex: 2,
  },
  collapserText: {
    color: COLORS.blue,
    fontWeight: SIZES.fontWeight0,
  },
});
