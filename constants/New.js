import React from 'react';
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';

export default function BlueColumns() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.darkBackground,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: COLORS.blue,
            height: 120,
            width: 17,
            borderTopStartRadius: 50,
            borderTopEndRadius: 50,
            borderBottomStartRadius: 2,
            borderBottomEndRadius: 2,
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          height: 25,
          width: 50,
          top: 5,
        }}>
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
    </SafeAreaView>
  );
}


<ScrollView
        style={{
          backgroundColor: 'red',
        }}
        horizontal={true}>
        <View
          style={{
            backgroundColor: 'green',
            padding: 10,
            position: 'absolute',
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

        <View style={{ width: 50, backgroundColor: 'yellow' }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.h3,
              fontWeight: SIZES.fontWeight0,
            }}>
            Feb
          </Text>
        </View>
        <View style={{ width: 50, backgroundColor: 'yellow' }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.h3,
              fontWeight: SIZES.fontWeight0,
            }}>
            Feb
          </Text>
        </View>
        <View style={{ width: 50, backgroundColor: 'yellow' }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.h3,
              fontWeight: SIZES.fontWeight0,
            }}>
            Feb
          </Text>
        </View>
        <View style={{ width: 50, backgroundColor: 'green' }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.h3,
              fontWeight: SIZES.fontWeight0,
            }}>
            Feb
          </Text>
        </View>
        <View style={{ width: 150, backgroundColor: 'yellow' }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.h3,
              fontWeight: SIZES.fontWeight0,
            }}>
            Feb
          </Text>
        </View>
        <View style={{ paddingRight: 100 }} />
      </ScrollView>