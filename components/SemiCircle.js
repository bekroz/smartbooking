import React, { useState } from 'react';
import {
  Stylesheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import styled from 'styled-components/native';
import ArcProgressBar, { resolveNewValue } from 'react-native-arc-progress-bar';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { MapContainer, TileLayer } from 'react-leaflet';
import { SemiCircle, SemiCircleMarker } from 'react-leaflet-semicircle';

export default function SemiCircleView() {
  return (
    <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center' }}>
      {/* <AnimatedCircularProgress
        size={100}
        width={15}
        fill={10}
        tintColor="#00e0ff"
        onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor="#3d5875"
      /> */}
      {/*  */}
      <MapContainer center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <SemiCircle
          position={[51.505, -0.09]}
          radius={2000}
          startAngle={90}
          stopAngle={180}
        />
        <SemiCircleMarker
          position={[51.505, -0.09]}
          radius={20}
          startAngle={90}
          stopAngle={180}
        />
      </MapContainer>
      ;
    </View>
  );
}

const WhiteText = styled.Text`
  color: white;
`;
