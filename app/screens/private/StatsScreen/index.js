import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
// Theme
import { COLORS, SIZES } from '../../../constants/theme';
// Components
import { Details, SoldRooms } from '../../../components/Stats';
import { ScrollView } from 'react-native';

export default function StatsScreen({ navigation }) {
  const [segmentIndex, setSegmentIndex] = useState(0);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     // getData();
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#111923' }}>
      <View style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.headerTitle}>Статистика</Text>
          </View>
          <View style={styles.segmentControlTabsContainer}>
            <SegmentedControl
              values={['Обзор', 'Занятость']}
              selectedIndex={segmentIndex}
              onChange={event => {
                setSegmentIndex(event.nativeEvent.selectedSegmentIndex);
              }}
              activeFontStyle={{
                fontWeight: SIZES.fontWeight2,
                fontSize: 15,
              }}
              tintColor="#546691"
              style={{
                backgroundColor: COLORS.segmentedControlBackgroundColor,
              }}
              inactiveFontStyle={{
                fontWeight: SIZES.fontWeight1,
                fontSize: SIZES.body6,
              }}
              fontStyle={{
                color: COLORS.white,
              }}
              style={{
                width: SIZES.width / 1.4,
              }}
            />
          </View>
        </View>
        <Divider
          orientation="horizontal"
          leftWidth={0.5}
          color={COLORS.grayPlaceholderBorder}
        />
        {segmentIndex === 0 ? <Details /> : <SoldRooms />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: COLORS.white,
  },
  segmentControlTabsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
});
