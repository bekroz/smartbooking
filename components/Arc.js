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
          radius={100}
          intervals={[
            { start: 30, end: 90 },
            { start: 120, end: 300 },
          ]}
          color="orange"
          backgroundColor="#f7f7f7"
          width={4}
        />
      </View>
    );
  }
}
