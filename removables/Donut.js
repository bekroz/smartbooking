import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { VictoryPie } from 'victory-native';

import styles from './styles';

const graphicColor = ['#388087', '#6fb3b8', '#badfe7']; // Colors
const wantedGraphicData = [{ y: 10 }, { y: 50 }, { y: 40 }]; // Data that we want to display
const defaultGraphicData = [{ y: 0 }, { y: 0 }, { y: 100 }]; // Data used to make the animate prop work

export default function Donut() {
  const [graphicData, setGraphicData] = useState(defaultGraphicData);

  useEffect(() => {
    setGraphicData(wantedGraphicData); // Setting the data that we want to display
  }, []);

  return (
    <View style={styles.container}>
      <VictoryPie
        animate={{ easing: 'exp' }}
        data={graphicData}
        width={250}
        height={250}
        colorScale={graphicColor}
        innerRadius={50}
      />
    </View>
  );
}
