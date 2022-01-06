import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Swiper from 'react-native-swiper';
import { COLORS, SIZES } from './app/constants';

export default function ColumnChart() {
  return (
    <View
      style={{
        flex: 1,
        width: SIZES.width,
        height: 210,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 30,
        backgroundColor: 'black',
      }}>
      <Swiper
        containerStyle={{
          width: 200,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
          // alignSelf: 'center',
        }}
        showsButtons={false}
        // scrollEventThrottle={}
        // showsPagination={false}
        // bounces={false}
        // loop={false}
        loadMinimalSize={5}
        loadMinimal={false}
        backgroundColor={'green'}
        index={3}>
        <TouchableOpacity style={styles.columnBlockView}>
          <View style={styles.blueColumnStyle}></View>
          <Text style={styles.columnText}>January</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.columnBlockView}>
          <View style={styles.blueColumnStyle}></View>
          <Text style={styles.columnText}>Feb</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.columnBlockView}>
          <View style={styles.blueColumnStyle}></View>
          <Text style={styles.columnText}>March</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.columnBlockView}>
          <View style={styles.blueColumnStyle}></View>
          <Text style={styles.columnText}>May</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.columnBlockView}>
          <View style={styles.blueColumnStyle}></View>
          <Text style={styles.columnText}>January</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.columnBlockView}>
          <View style={styles.blueColumnStyle}></View>
          <Text style={styles.columnText}>January</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.columnBlockView}>
          <View style={styles.blueColumnStyle}></View>
          <Text style={styles.columnText}>January</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.columnBlockView}>
          <View style={styles.blueColumnStyle}></View>
          <Text style={styles.columnText}>January</Text>
        </TouchableOpacity>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  columnBlockView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 5,
    backgroundColor: 'yellow',
    // marginHorizontal: 100,
    width: 50,
    height: 150,
    alignSelf: 'center',
    // marginTop: 20,
    // alignSelf: 'center',
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
  columnText: {
    color: COLORS.black,
    top: 10,
  },
});

// import React, { Component } from 'react';
// import { View, Text, Image } from 'react-native';
// import Carousel from 'react-native-carousel';

// export default class App extends Component {
//   render() {
//     return (
//       <Carousel loop={true} arrows={true} bullets={false} loopTimer={23}>
//         <Text>'Hello World!'</Text>
//         <View>
//           <Text>'Hello World! 2'</Text>
//         </View>
//         <Image source={{ uri: `<some Path>`, scale: 1 }} />
//       </Carousel>
//     );
//   }
// }
