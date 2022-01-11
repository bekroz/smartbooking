import React from 'react';
import { StyleSheet } from 'react-native';
import { POSITIONING, SIZES } from '../../../../constants';
import LoadingIndicator from '../../../Loaders/LoadingIndicator';
import { Card } from 'react-native-elements/dist/card/Card';

export default function LoadingCard() {
  return (
    <Card containerStyle={styles.card}>
      <LoadingIndicator />
    </Card>
  );
}

const styles = StyleSheet.create({
  noDataToShowText: {
    color: '#F0F0F0',
    fontSize: SIZES.body5,
    fontWeight: SIZES.fontWeight0,
  },
  card: {
    backgroundColor: '#212831',
    borderColor: '#212831',
    height: 167,
    width: SIZES.width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 0,
    marginRight: 20,
    ...POSITIONING.center,
  },
});
