import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Switch } from 'react-native-paper';
import { COLORS, POSITIONING } from '../../../constants';

const AppleSwitcher = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={styles.container}>
      <Switch
        value={isSwitchOn}
        onValueChange={onToggleSwitch}
        color={COLORS.blue}
      />
    </View>
  );
};

export default AppleSwitcher;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...POSITIONING.center,
  },
});
