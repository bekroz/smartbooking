import React, { useRef, useCallback } from 'react';
import { SafeAreaView, Button } from 'react-native';
import { ReanimatedArcBase } from '@callstack/reanimated-arc';
import Reanimated, { Easing } from 'react-native-reanimated';

const App = () => {
  const arcAngle = useRef(new Reanimated.Value(50));
  const animate = useCallback(
    () =>
      Reanimated.timing(arcAngle.current, {
        toValue: Math.random() * 360,
        easing: Easing.inOut(Easing.quad),
        duration: 800,
      }).start(),
    [],
  );
  return (
    <SafeAreaView>
      <ReanimatedArcBase
        color="coral"
        diameter={200}
        width={30}
        arcSweepAngle={arcAngle.current}
        lineCap="round"
        rotation={90}
      />
      <Button title="Animate Arc!" onPress={animate} />
    </SafeAreaView>
  );
};

export default App;
