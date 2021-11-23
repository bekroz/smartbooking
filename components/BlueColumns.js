import { months } from 'moment';
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { COLORS } from '../constants/theme';

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

  function handleColumnPress() {
    alert('Column Bar DATA is shown!');
  }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {/* Empty Space */}
      <View style={styles.emptySpaceForScroll} />
      {/* Jan */}
      <TouchableOpacity
        onPress={handleColumnPress}
        style={styles.columnBlockView}>
        <View style={styles.blueColumnStyle}></View>
        <Text style={styles.columnText}>{monthsRu[0]}</Text>
      </TouchableOpacity>
      {/* Feb */}
      <TouchableOpacity
        onPress={handleColumnPress}
        style={styles.columnBlockView}>
        <View style={styles.blueColumnStyle}></View>
        <Text style={styles.columnText}>{monthsRu[1]}</Text>
      </TouchableOpacity>
      {/* Mar */}
      <TouchableOpacity
        onPress={handleColumnPress}
        style={styles.columnBlockView}>
        <View style={styles.blueColumnStyle}></View>
        <Text style={styles.columnText}>{monthsRu[2]}</Text>
      </TouchableOpacity>
      {/* Apr */}
      <TouchableOpacity
        onPress={handleColumnPress}
        style={styles.columnBlockView}>
        <View style={styles.blueColumnStyle}></View>
        <Text style={styles.columnText}>{monthsRu[3]}</Text>
      </TouchableOpacity>
      {/* May */}
      <TouchableOpacity
        onPress={handleColumnPress}
        style={styles.columnBlockView}>
        <View style={styles.blueColumnStyle}></View>
        <Text style={styles.columnText}>{monthsRu[4]}</Text>
      </TouchableOpacity>
      {/* Jun */}
      <TouchableOpacity
        onPress={handleColumnPress}
        style={styles.columnBlockView}>
        <View style={styles.blueColumnStyle}></View>
        <Text style={styles.columnText}>{monthsRu[5]}</Text>
      </TouchableOpacity>
      {/* Jul */}
      <TouchableOpacity
        onPress={handleColumnPress}
        style={styles.columnBlockView}>
        <View style={styles.blueColumnStyle}></View>
        <Text style={styles.columnText}>{monthsRu[6]}</Text>
      </TouchableOpacity>
      {/* Aug */}
      <TouchableOpacity
        onPress={handleColumnPress}
        style={styles.columnBlockView}>
        <View style={styles.blueColumnStyle}></View>
        <Text style={styles.columnText}>{monthsRu[7]}</Text>
      </TouchableOpacity>
      {/* Sep */}
      <TouchableOpacity
        onPress={handleColumnPress}
        style={styles.columnBlockView}>
        <View style={styles.blueColumnStyle}></View>
        <Text style={styles.columnText}>{monthsRu[8]}</Text>
      </TouchableOpacity>
      {/* Oct */}
      <TouchableOpacity
        onPress={handleColumnPress}
        style={styles.columnBlockView}>
        <View style={styles.blueColumnStyle}></View>
        <Text style={styles.columnText}>{monthsRu[9]}</Text>
      </TouchableOpacity>
      {/* Nov */}
      <TouchableOpacity
        onPress={handleColumnPress}
        style={styles.columnBlockView}>
        <View style={styles.blueColumnStyle}></View>
        <Text style={styles.columnText}>{monthsRu[10]}</Text>
      </TouchableOpacity>
      {/* Dec */}
      <TouchableOpacity style={styles.columnBlockView}>
        <View style={styles.blueColumnStyle}></View>
        <Text style={styles.columnText}>{monthsRu[11]}</Text>
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
  columnText: {
    color: COLORS.white,
    top: 10,
  },
});
