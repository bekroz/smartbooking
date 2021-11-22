import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import styled from 'styled-components/native';
import SegmentedControl from 'rn-segmented-control';
import Details from '../components/Stats/Details';
import SoldRooms from '../components/Stats/SoldRooms';
import { COLORS, SIZES } from '../constants/theme';

export default function Stats() {
  const tabs = ['Обзор', 'Занятость'];
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabsChange = index => {
    setTabIndex(index);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
      <View style={{ backgroundColor: '#111923', alignItems: 'center' }}>
        <View style={styles.titleContainer}>
          <WhiteText style={styles.headerTitle}>Статистика</WhiteText>
        </View>
        <View style={styles.topBarButtonsContainer}>
          <SegmentedControl
            tabs={tabs}
            currentIndex={tabIndex}
            onChange={handleTabsChange}
            segmentedControlBackgroundColor="#292F3A"
            activeSegmentBackgroundColor="#485C8A"
            activeTextColor="white"
            textColor={COLORS.white}
            paddingVertical={6}
            width={220}
            activeSegmentStyle={{ borderRadius: 6 }}
          />
        </View>
      </View>
      <Divider
        orientation="horizontal"
        leftWidth={0.5}
        color={COLORS.grayPlaceholderBorder}
      />
      {tabIndex === 0 ? <Details /> : <SoldRooms />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    alignContent: 'center',
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: '700',
    left: 15,
  },
  search: {
    left: 55,
    padding: 10,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarButtonsContainer: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'center',
  },
  topBarBtn: {
    backgroundColor: '#2E3641',
    borderRadius: 6,
    borderWidth: 0.167,
    borderColor: '#000000',
    height: 30,
    width: 114,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarText: {
    fontSize: 14,
    textAlign: 'center',
    color: COLORS.white,
    // fontFamily: 'SF Pro Display',
  },
  chosenBarTextStyle: {
    fontWeight: SIZES.fontWeight3,
  },
  activeTabStyle: {
    fontSize: 15,
    fontWeight: SIZES.fontWeight2,
  },
  inActiveTabStyle: {
    fontSize: 14,
    fontWeight: SIZES.fontWeight1,
  },
});

const WhiteText = styled.Text`
  color: #ffffff;
`;

const GrayText = styled.Text`
  color: #657282;
`;

const BlueText = styled.Text`
  color: #5f85db;
`;

const GreenText = styled.Text`
  color: #0ecc38;
`;

const GuestDetailsView = styled.View``;
