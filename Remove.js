import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { COLORS, SIZES } from './app/constants/theme';

export default App = () => {
  const [segmentedControlIndex, setSegmentedControlIndex] = useState(0);
  return (
    <View style={styles.container}>
      <SegmentedControl
        values={['Обзор', 'Занятость']}
        selectedIndex={index}
        onChange={event => {
          setIndex(event.nativeEvent.selectedSegmentIndex);
        }}
        activeFontStyle={{
          fontWeight: SIZES.fontWeight2,
          fontSize: 15,
        }}
        tintColor="#546691"
        style={{
          backgroundColor: '#292F3A',
        }}
        inactiveFontStyle={{
          fontWeight: SIZES.fontWeight1,
          fontSize: SIZES.body6,
        }}
        fontStyle={{
          color: COLORS.white,
        }}
      />
      <Text style={styles.text}>Selected index: {index}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});
