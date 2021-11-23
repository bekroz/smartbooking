import React from 'react';
import { View } from 'react-native';
import { MultiArcCircle } from 'react-native-circles';

export default class CircleExample extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MultiArcCircle
          radius={90}
          intervals={[
            { start: 0, end: 140 },
            { start: 220, end: 360 },
          ]}
          color="#0ECC38"
          width={10}
        />
      </View>
    );
  }
}
