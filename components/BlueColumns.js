import { months } from 'moment';
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

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

  const monthsRu = [
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Июн',
    'Июл',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек',
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {/* Empty Space */}
      <View style={styles.emptySpaceForScroll} />
      {/* Jan */}
      <TouchableOpacity style={styles.columnBlockView}>
        <View style={styles.blueColumnStyle}></View>
        <Text style={{ color: COLORS.white, top: 10 }}>{monthsRu[0]}</Text>
      </TouchableOpacity>
      {/* Feb */}
      <TouchableOpacity style={styles.columnBlockView}>
        <View style={styles.blueColumnStyle}></View>
        <Text style={{ color: COLORS.white, top: 10 }}>{monthsRu[1]}</Text>
      </TouchableOpacity>
      {/* Mar */}
      <TouchableOpacity style={styles.columnBlockView}>
        <View style={styles.blueColumnStyle}></View>
        <Text style={{ color: COLORS.white, top: 10 }}>{monthsRu[2]}</Text>
      </TouchableOpacity>
      {/* Apr */}
      <TouchableOpacity style={styles.columnBlockView}>
        <View style={styles.blueColumnStyle}></View>
        <Text style={{ color: COLORS.white, top: 10 }}>{monthsRu[3]}</Text>
      </TouchableOpacity>
      {/* May */}
      <TouchableOpacity style={styles.columnBlockView}>
        <View style={styles.blueColumnStyle}></View>
        <Text style={{ color: COLORS.white, top: 10 }}>{monthsRu[4]}</Text>
      </TouchableOpacity>
      {/* Jun */}
      <TouchableOpacity style={styles.columnBlockView}>
        <View style={styles.blueColumnStyle}></View>
        <Text style={{ color: COLORS.white, top: 10 }}>{monthsRu[5]}</Text>
      </TouchableOpacity>
      {/* Jul */}
      <TouchableOpacity style={styles.columnBlockView}>
        <View style={styles.blueColumnStyle}></View>
        <Text style={{ color: COLORS.white, top: 10 }}>{monthsRu[6]}</Text>
      </TouchableOpacity>
      {/* Aug */}
      <TouchableOpacity style={styles.columnBlockView}>
        <View style={styles.blueColumnStyle}></View>
        <Text style={{ color: COLORS.white, top: 10 }}>{monthsRu[7]}</Text>
      </TouchableOpacity>
      {/* Sep */}
      <TouchableOpacity style={styles.columnBlockView}>
        <View style={styles.blueColumnStyle}></View>
        <Text style={{ color: COLORS.white, top: 10 }}>{monthsRu[8]}</Text>
      </TouchableOpacity>
      {/* Oct */}
      <TouchableOpacity style={styles.columnBlockView}>
        <View style={styles.blueColumnStyle}></View>
        <Text style={{ color: COLORS.white, top: 10 }}>{monthsRu[9]}</Text>
      </TouchableOpacity>
      {/* Nov */}
      <TouchableOpacity style={styles.columnBlockView}>
        <View style={styles.blueColumnStyle}></View>
        <Text style={{ color: COLORS.white, top: 10 }}>{monthsRu[10]}</Text>
      </TouchableOpacity>
      {/* Dec */}
      <TouchableOpacity style={styles.columnBlockView}>
        <View style={styles.blueColumnStyle}></View>
        <Text style={{ color: COLORS.white, top: 10 }}>{monthsRu[11]}</Text>
      </TouchableOpacity>
      {/* Empty Space */}
      <View style={styles.emptySpaceForScroll} />
    </ScrollView>
);
}

const styles = StyleSheet.create({
  columnBlockView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    padding: 10,
  },
  blueColumnStyle: {
    backgroundColor: COLORS.blue,
    height: 100,
    width: 17,
    maxHeight: 130,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    borderBottomStartRadius: 2,
    borderBottomEndRadius: 2,
    justifyContent: 'center',
  },
  emptySpaceForScroll: {
    paddingRight: 30,
  },
});
