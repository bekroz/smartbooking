import React from 'react';
import { ActivityIndicator } from 'react-native';
import { COLORS } from '../../../constants';

export default function LoadingIndicator() {
  return <ActivityIndicator animating={true} color={COLORS.white} />;
}
