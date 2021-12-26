import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import dayjs from 'dayjs';
import Carousel from 'react-native-snap-carousel';
import { COLORS, SIZES } from '../app/constants/theme';
export default function SnapCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const dateArray = dayjs().day(0).format('dddd DD MMM');


  let carouselItems = [
    {
      title: 'Item 1',
      text: 'Text 1',
    },
    {
      title: 'Item 2',
      text: 'Text 2',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
    },
  ];

  function renderDaysArray({ index, i }) {
    return (
      <TouchableOpacity
        key={i}
        ref={ref => (carouselItems = ref)}
        onPress={index => setActiveIndex(index)}
        style={{
          backgroundColor: 'black',
          borderRadius: 5,
          padding: 40,
          marginLeft: 25,
          marginRight: 25,
        }}>
        <Text style={styles.dateArrayText}>{dateArray}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: 'rebeccapurple', paddingTop: 50 }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Carousel
          layout={'default'}
          ref={ref => (carouselItems = ref)}
          data={carouselItems}
          sliderWidth={300}
          itemWidth={300}
          renderItem={renderDaysArray}
          onSnapToItem={index => setActiveIndex(index)}
          onPress={index => setActiveIndex(index)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  dateArrayText: {
    color: '#F0F0F0',
    fontSize: 16,
    fontWeight: '300',
  },
});

// import React, { useState } from 'react';
// import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

// import Carousel from 'react-native-snap-carousel';

// export default function SnapCarousel() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const carouselItems = [
//     {
//       title: 'Item 1',
//       text: 'Text 1',
//     },
//     {
//       title: 'Item 2',
//       text: 'Text 2',
//     },
//     {
//       title: 'Item 3',
//       text: 'Text 3',
//     },
//     {
//       title: 'Item 4',
//       text: 'Text 4',
//     },
//     {
//       title: 'Item 5',
//       text: 'Text 5',
//     },
//   ];

//   function getDaysArray(year, month) {
//     var numDaysInMonth, daysInWeek, daysIndex, index, i, l, daysArray;

//     numDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     daysInWeek = [
//       'Sunday',
//       'Monday',
//       'Tuesday',
//       'Wednesday',
//       'Thursday',
//       'Friday',
//       'Saturday',
//     ];
//     daysIndex = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
//     index = daysIndex[new Date(year, month - 1, 1).toString().split(' ')[0]];
//     daysArray = [];

//     for (i = 0, l = numDaysInMonth[month - 1]; i < l; i++) {
//       daysArray.push(i + 1 + '. ' + daysInWeek[index++]);
//       if (index == 7) index = 0;
//     }

//     return daysArray;
//   }
//   return (
//     {carouselItems.map(item,index => {
// <View key={index}
//       style={{
//         backgroundColor: 'floralwhite',
//         borderRadius: 5,
//         height: 300,
//         padding: 50,
//         marginLeft: 25,
//         marginRight: 25,
//       }}>
//       <Text style={{ fontSize: 30 }}>{item.title}</Text>
//       <Text>{item.text}</Text>
//     </View>
//     })}

//   );

//   return (
//     <SafeAreaView
//       style={{ flex: 1, backgroundColor: 'rebeccapurple', paddingTop: 50 }}>
//       <View
//         style={{
//           flex: 1,
//           flexDirection: 'row',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <Carousel
//           layout={'default'}
//           ref={ref => (this.carousel = ref)}
//           data={this.state.carouselItems}
//           sliderWidth={300}
//           itemWidth={300}
//           renderItem={this._renderItem}
//           onSnapToItem={(index = setIndex({ activeIndex: index }))}
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({});
