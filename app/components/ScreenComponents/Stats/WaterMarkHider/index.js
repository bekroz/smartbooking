import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants';

const WaterMarkHider = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: 'black',
        }}>
        {/* HIDER */}
      </Text>
    </View>
  );
};

export default WaterMarkHider;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 170,
    height: 36,
    backgroundColor: COLORS.grayPlaceholder,
    position: 'absolute',
    bottom: 30,
    zIndex: 1,
    left: -10,
  },
});
