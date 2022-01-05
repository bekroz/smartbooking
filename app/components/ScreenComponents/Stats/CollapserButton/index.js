import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, SIZES } from '../../../../constants';

const CollapserButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={styles.collapserText}>Показать еще</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CollapserButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SIZES.width - 30,
    height: 30,
    backgroundColor: '#212B36',
    position: 'absolute',
    bottom: 30,
    justifyContent: 'center',
    // right: 0,
    alignSelf: 'center',
  },
  collapserText: {
    color: COLORS.blue,
    fontWeight: '400',
  },
});
