import React, { useState, useRef, useCallback } from 'react';
import {
  Vibration,
  StatusBar,
  Easing,
  TextInput,
  Dimensions,
  Animated,
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  COLORS,
  SIZES,
  POSITIONING,
  ITEM_SIZE,
  ITEM_SPACING,
  DAYS_ARRAY,
} from '../../../../constants';

export default function HorizontalDayPicker({ chosenDay }) {
  const [state, setState] = useState(0);
  const daysRef = useRef(0);
  const scrollX = useRef(new Animated.Value(3)).current;
  const onItemIndexChange = useCallback(setState, []);

  const onMomentumScrollEnd = event => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / ITEM_SIZE);
    // console.log(DAYS_ARRAY[newIndex]);
  };
  const handleOnScroll = useCallback(() => {
    Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
      useNativeDriver: true,
    });
  }, []);

  const renderDays = ({ item, index }) => {
    // console.log('====================================');
    // console.log(item);
    // console.log('====================================');
    const inputRange = [
      (index - 4) * ITEM_SIZE,
      index * ITEM_SIZE,
      (index + 4) * ITEM_SIZE,
    ];
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0, 1, 0],
    });
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.1, 1.3, 0.1],
    });
    const transformer = {
      opacity,
      transform: [{ scale }],
    };
    return (
      <TouchableOpacity style={styles.dayBtn}>
        <Animated.Text style={[styles.text, transformer]}>{item}</Animated.Text>
      </TouchableOpacity>
    );
  };
  const keyExtractor = item => {
    //
    return item;
  };

  return (
    <View style={styles.dayPickerContainer}>
      <Animated.FlatList
        onItemIndexChange={onItemIndexChange}
        ref={daysRef}
        // initialScrollIndex={chosenDay}
        data={DAYS_ARRAY}
        keyExtractor={keyExtractor}
        horizontal={true}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true },
        )}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToInterval={ITEM_SIZE}
        style={styles.flatListStyle}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={renderDays}
        onMomentumScrollEnd={onMomentumScrollEnd}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dayBtn: {
    width: ITEM_SIZE,
    ...POSITIONING.center,
  },
  dayPickerContainer: {
    height: 50,
    marginTop: 10,
    ...POSITIONING.justify,
  },
  text: {
    fontSize: 28,
    color: COLORS.blue,
    fontWeight: SIZES.fontWeight1,
  },
  contentContainerStyle: {
    paddingHorizontal: ITEM_SPACING,
  },
  flatListStyle: {
    flexGrow: 0,
  },
});
