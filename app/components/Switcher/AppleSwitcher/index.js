import React, { useState } from 'react';
import { View } from 'react-native';
import { Switch } from 'react-native-paper';
import { COLORS } from '../../../constants';

const AppleSwitcher = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Switch
        value={isSwitchOn}
        onValueChange={onToggleSwitch}
        color={COLORS.blue}
      />
    </View>
  );
};

export default AppleSwitcher;
