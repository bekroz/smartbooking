import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import HorizontalPicker from '@vseslav/react-native-horizontal-picker';

const HorizontalDay = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
        <HorizontalPicker
          data={Items}
          renderItem={renderItem}
          itemWidth={80}
          onChange={chosenItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default HorizontalDay;

const Items = Array.from(Array(32).keys());

const renderItem = (item, index) => (
  <View style={{ width: 80 }}>
    <Text style={{ color: 'white' }}>{item}</Text>
  </View>
);

const chosenItem = (item, index) => (
  <View style={{ width: 100 }}>
    <Text style={{ color: 'blue' }}>{item}</Text>
  </View>
);
