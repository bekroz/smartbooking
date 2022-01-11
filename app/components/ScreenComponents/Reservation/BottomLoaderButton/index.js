import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, POSITIONING, SIZES } from '../../../../constants';
import LoadingIndicator from '../../../Loaders/LoadingIndicator';

export default function BottomLoaderButton({
  nextPageLoading,
  isLastPage,
  onPress,
}) {
  let disabled = nextPageLoading || isLastPage;

  function renderBottomText() {
    if (isLastPage) {
      return <Text style={styles.noMoreDataText}>Все данные загружены</Text>;
    } else {
      return <Text style={styles.showMoreText}>Показать ещё</Text>;
    }
  }
  return (
    <TouchableOpacity
      style={styles.showMoreButton}
      disabled={disabled}
      onPress={() => onPress()}>
      {nextPageLoading ? <LoadingIndicator /> : renderBottomText()}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loaderCard: {
    alignSelf: 'center',
    backgroundColor: '#212831',
    width: SIZES.width - 20,
    height: 40,
    marginTop: 15,
    borderRadius: 6,
    ...POSITIONING.center,
  },
  showMoreButton: {
    alignSelf: 'center',
    backgroundColor: '#212831',
    width: SIZES.width - 20,
    height: 40,
    marginTop: 15,
    borderRadius: 6,
    ...POSITIONING.center,
  },
  showMoreText: {
    color: COLORS.blue,
    fontWeight: '500',
    fontSize: 16,
  },
  noMoreDataText: {
    color: COLORS.grayText,
    fontWeight: SIZES.fontWeight1,
    fontSize: SIZES.body5,
  },
});
