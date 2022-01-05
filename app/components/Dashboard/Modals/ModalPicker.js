import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Picker from '@wowmaking/react-native-ios-scroll-picker';

const start = 2000;
const years = new Array(new Date().getFullYear() - start + 1)
  .fill(0)
  .map((_, i) => {
    const value = start + i;
    return { value, label: value };
  })
  .reverse();

const App = () => {
  const defaultValue = 2010;
  const [currentValue, setCurrentValue] = useState(defaultValue);

  const handelPickerItemChange = value => {
    setCurrentValue(value);
  };

  return (
    <View style={styles.pickerContainer}>
      <Picker
        values={years}
        containerWidth={120}
        defaultValue={defaultValue}
        withTranslateZ={true}
        withOpacity={true}
        withScale={true}
        visibleItems={5}
        itemHeight={32}
        deviderStyle={styles.pickerDevider}
        labelStyle={styles.pickerItemLabel}
        onChange={handelPickerItemChange}
      />

      <Text>{currentValue}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  pickerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerDevider: {
    borderColor: 'rgba(0,0,0,0.1)',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  pickerItemLabel: {
    color: '#000000',
    fontSize: 25,
  },
});
