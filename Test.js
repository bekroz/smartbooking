import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-web-swiper';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, width: 200, height: 200 }}>
        <View style={{ flex: 1 }}>
          <Swiper
            from={2}
            minDistanceForAction={0.1}
            controlsProps={{
              dotsTouchable: true,
              prevPos: 'left',
              nextPos: 'right',
              nextTitle: '>',
              nextTitleStyle: { color: 'red', fontSize: 24, fontWeight: '500' },
              PrevComponent: ({ onPress }) => (
                <TouchableOpacity onPress={onPress}>
                  <Text
                    style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>
                  </Text>
                </TouchableOpacity>
              ),
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(20,20,200,0.3)',
              }}>
              <Text>Slide 1</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(20,200,20,0.3)',
              }}>
              <Text>Slide 2</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(200,20,20,0.3)',
              }}>
              <Text>Slide 3</Text>
            </View>
          </Swiper>
        </View>
      </View>
    );
  }
}
