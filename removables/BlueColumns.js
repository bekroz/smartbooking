import React from 'react';
import { SafeAreaView, View, Text, ScrollView, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';

export default function BlueColumns() {
  const data = {
    Jan: {
      revenue: 20,
      soldRooms: 20,
    },
    Feb: {
      revenue: 20,
      soldRooms: 200,
    },
    Mar: {
      revenue: 20,
      soldRooms: 200,
    },
    Apr: {
      revenue: 20,
      soldRooms: 200,
    },
    May: {
      revenue: 20,
      soldRooms: 200,
    },
    Jun: {
      revenue: 20,
      soldRooms: 200,
    },
    Jul: {
      revenue: 20,
      soldRooms: 200,
    },
    Aug: {
      revenue: 20,
      soldRooms: 200,
    },
    Sep: {
      revenue: 20,
      soldRooms: 200,
    },
    Oct: {
      revenue: 20,
      soldRooms: 200,
    },
    Nov: {
      revenue: 20,
      soldRooms: 200,
    },
    Dec: {
      revenue: 20,
      soldRooms: 200,
    },
  };

  const totalRevenueData =
    data.Jan.revenue +
    data.Feb.revenue +
    data.Mar.revenue +
    data.Apr.revenue +
    data.May.revenue +
    data.Jun.revenue +
    data.Jul.revenue +
    data.Aug.revenue +
    data.Sep.revenue +
    data.Oct.revenue +
    data.Nov.revenue +
    data.Dec.revenue;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.darkBackground,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'red',
          width: SIZES.width,
          height: 150,
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* Empty Space */}
          <View style={styles.emptySpaceForScroll} />
          {/* Jan */}
          <View style={styles.blueColumnStyle}>
            <Text style={{ color: COLORS.white }}>JAN</Text>
          </View>
          {/* Feb */}
          <View style={styles.blueColumnStyle}>
            <Text style={{ color: COLORS.white }}>FEB</Text>
          </View>
          {/* Mar */}
          <View style={styles.blueColumnStyle}>
            <Text style={{ color: COLORS.white }}>MAR</Text>
          </View>
          {/* Apr */}
          <View style={styles.blueColumnStyle}>
            <Text style={{ color: COLORS.white }}>APR</Text>
          </View>
          {/* May */}
          <View style={styles.blueColumnStyle}>
            <Text style={{ color: COLORS.white }}>MAY</Text>
          </View>
          {/* Jun */}
          <View style={styles.blueColumnStyle}>
            <Text style={{ color: COLORS.white }}>JUN</Text>
          </View>
          {/* Jul */}
          <View style={styles.blueColumnStyle}>
            <Text style={{ color: COLORS.white }}>JUL</Text>
          </View>
          {/* Aug */}
          <View style={styles.blueColumnStyle}>
            <Text style={{ color: COLORS.white }}>AUG</Text>
          </View>
          {/* Sep */}
          <View style={styles.blueColumnStyle}>
            <Text style={{ color: COLORS.white }}>SEP</Text>
          </View>
          {/* Oct */}
          <View style={styles.blueColumnStyle}>
            <Text style={{ color: COLORS.white }}>OCT</Text>
          </View>
          {/* Nov */}
          <View style={styles.blueColumnStyle}>
            <Text style={{ color: COLORS.white }}>NOV</Text>
          </View>
          {/* Dec */}
          <View style={styles.blueColumnStyle}>
            <Text style={{ color: COLORS.white }}>DEC</Text>
          </View>
          {/* Empty Space */}
          <View style={styles.emptySpaceForScroll} />
        </ScrollView>
      </View>

      {/* <ScrollView style={{}} horizontal={true}>
        <View
          style={{
            height: 148,
            width: 43,
            borderWidth: 0.5,
            borderRadius: 6,
            borderColor: COLORS.blue,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.h3,
              fontWeight: SIZES.fontWeight0,
            }}>
            Sep
          </Text>
        </View>

        <View
          style={{
            height: 148,
            width: 43,
            borderWidth: 0.5,
            borderRadius: 6,
            borderColor: COLORS.blue,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.h3,
              fontWeight: SIZES.fontWeight0,
            }}>
            Авг
          </Text>
        </View>
      </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  blueColumnStyle: {
    backgroundColor: COLORS.blue,
    height: 120,
    width: 17,
    maxHeight: 130,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    borderBottomStartRadius: 2,
    borderBottomEndRadius: 2,
    marginRight: 30,
    top: 20,
    justifyContent: 'center',
  },
  emptySpaceForScroll: {
    paddingRight: 30,
  },
});
