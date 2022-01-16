import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, COLOR_PALETTE } from '../../../../constants';

const DotView = ({ sourceName, colorIndex }) => {
  return (
    <View style={styles.dotBlock}>
      <View
        style={[
          styles.dotStyle,
          { backgroundColor: COLOR_PALETTE[colorIndex] },
        ]}
      />
      <Text style={{ color: COLORS.white }}>{sourceName}</Text>
    </View>
  );
};

export default DotView;

const styles = StyleSheet.create({
  dotBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 50,
    marginRight: 6,
  },
});
