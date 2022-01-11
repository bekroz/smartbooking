import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants';

const SourceDot = ({ sourceColor, sourceName }) => {
  return (
    <View style={styles.dotBlock}>
      <View style={styles.dotStyle} />
      <Text style={styles.sourceText}>{sourceName}</Text>
    </View>
  );
};

export default SourceDot;

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
    backgroundColor: sourceColor,
  },
  sourceText: {
    color: COLORS.white,
  },
});
