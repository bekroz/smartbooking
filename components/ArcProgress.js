import React, { useState } from 'react';
import { View } from 'react-native';
import ArcProgressBar, { resolveNewValue } from 'react-native-arc-progress-bar';

const ArcProgress = () => {
  const [state, setState] = useState(250);

  const [scrollableMax, absoluteMax] = [800, 2000];
  const onChange = ([alpha, beta]) => {
    setState(resolveNewValue(alpha, beta, absoluteMax, scrollableMax));
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        <ArcProgressBar
          rectangularSize={250}
          lowerValue={100}
          stackedValue={state}
          maxValue={scrollableMax}
          absoluteMaxValue={absoluteMax}
          showCursor
          showMinMax
          minStyle={{ textAlign: 'center' }}
          maxStyle={{ textAlign: 'center' }}
          caption1Text={'MAX\n'}
          caption2Text={'\nMIN'}
          showMin
          showMax
          onChange={onChange}
        />
      </View>
      <View style={{ flex: 1 }} />
    </>
  );
};

export default ArcProgress;
