import React from 'react';
import { View, Text } from 'react-native';
import { Donut, DonutValue, DonutLabel } from 'react-donut-component';

const DonutComponent = () => {
  return (
    <View style={{ justifyContent: 'center' }}>
      <Donut
        styleTrack={{ strokeWidth: 9, stroke: 'AliceBlue' }}
        styleIndicator={{ stroke: 'Cyan', strokeLinecap: 'round' }}>
        <DonutValue
          style={{ fontWeight: 'bold' }}
          symbol="°C"
          styleSymbol={{ fontWeight: 'bold', fontSize: '18px' }}
          symbolPosition="top-right">
          <DonutLabel>Ballon d'ors</DonutLabel>
        </DonutValue>
      </Donut>
    </View>
  );
};

export default DonutComponent;
