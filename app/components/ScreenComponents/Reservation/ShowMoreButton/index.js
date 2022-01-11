import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { COLORS, POSITIONING, SIZES } from '../../../../constants';

const ShowMoreButton = ({
  onPress,
  initialLoading,
  nextPageLoading,
  isLastPage,
}) => {
  return (
    <TouchableOpacity style={styles.showMoreButton} onPress={onPress}>
      {nextPageLoading && <Text style={styles.showMoreText}>Показать ещё</Text>}
    </TouchableOpacity>
  );
};

export default ShowMoreButton;

const styles = StyleSheet.create({
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
  noMoreDataAlertText: {
    color: COLORS.grayText,
    fontWeight: SIZES.fontWeight1,
    fontSize: SIZES.body5,
  },
});
