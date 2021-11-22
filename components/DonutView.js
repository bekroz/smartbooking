import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';
import { COLORS } from '../constants/theme';

const DonutView = () => {
  const radius = 70;
  const circleCircumference = 3 * Math.PI * radius;

  const coralCircleData = 30;
  const blueCircleData = 0;
  const orangeCircleData = 0;

  const yellowCircleData = 0;
  const greenCircleData = 0;
  const pinkCircleData = 0;

  // Total View
  const totalAmount =
    blueCircleData +
    orangeCircleData +
    yellowCircleData +
    greenCircleData +
    pinkCircleData +
    coralCircleData;

  // New Value
  // const totalAmount =
  //   blueCircleData +
  //   blueCircleData +
  //   orangeCircleData +
  //   yellowCircleData +
  //   greenCircleData +
  //   pinkCircleData +
  //   coralCircleData;

  const bluePercentage = (blueCircleData / totalAmount) * 100;
  const orangePercentage = (orangeCircleData / totalAmount) * 100;
  const yellowPercentage = (yellowCircleData / totalAmount) * 100;
  const greenPercentage = (greenCircleData / totalAmount) * 100;
  const pinkPercentage = (pinkCircleData / totalAmount) * 100;
  const coralPercentage = (coralCircleData / totalAmount) * 100;

  const blueStrokeDashoffset =
    circleCircumference - (circleCircumference * bluePercentage) / 100;
  const orangeStrokeDashoffset =
    circleCircumference - (circleCircumference * orangePercentage) / 100;
  const yellowStrokeDashoffset =
    circleCircumference - (circleCircumference * yellowPercentage) / 100;

  const greenStrokeDashoffset =
    circleCircumference - (circleCircumference * greenPercentage) / 100;

  const pinkStrokeDashoffset =
    circleCircumference - (circleCircumference * pinkPercentage) / 100;

  const coralStrokeDashoffset =
    circleCircumference - (circleCircumference * coralPercentage) / 100;

  const blueCircleAngle = (blueCircleData / totalAmount) * 360;
  const orangeCircleAngle = (orangeCircleData / totalAmount) * 360;
  const yellowCircleAngle = (yellowCircleData / totalAmount) * 360;
  const greenCircleAngle = (greenCircleData / totalAmount) * 360;
  const pinkCircleAngle = (pinkCircleData / totalAmount) * 360;
  const coralAngle =
    blueCircleAngle +
    orangeCircleAngle +
    yellowCircleAngle +
    greenCircleAngle +
    pinkCircleAngle;

  // const coralAngle = blueCircleAngle + orangeCircleAngle + yellowCircleAngle + greenCircleAngle + pinkCircleAngle;

  return (
    <View style={styles.container}>
      <View style={styles.graphWrapper}>
        <Svg height="100" width="100" viewBox="0 0 180 180">
          <G rotation={-90} originX="90" originY="90">
            <>
              {/* CORAL Circle */}

              {/* YELLOW Circle */}
              {/* <Circle
                cx="50%"
                cy="50%"
                r={radius}
                stroke={COLORS.greenCircle}
                fill="transparent"
                strokeWidth="15"
                strokeDasharray={circleCircumference}
                strokeDashoffset={yellowStrokeDashoffset}
                rotation={yellowCircleAngle}
                originX="90"
                originY="90"
                strokeLinecap="round"
              /> */}
              <Circle
                cx="50%"
                cy="50%"
                r={radius}
                stroke={COLORS.coral}
                fill="transparent"
                strokeWidth="15"
                strokeDasharray={circleCircumference}
                strokeDashoffset={coralStrokeDashoffset}
                rotation={coralAngle}
                originX="90"
                originY="90"
                strokeLinecap="round"
              />
              {/* PINK Circle */}
              <Circle
                cx="50%"
                cy="50%"
                r={radius}
                stroke={COLORS.pinkCircle}
                fill="transparent"
                strokeWidth="15"
                strokeDasharray={circleCircumference}
                strokeDashoffset={pinkStrokeDashoffset}
                rotation={pinkCircleAngle}
                originX="90"
                originY="90"
                strokeLinecap="round"
              />
              {/* ORANGE Circle */}
              <Circle
                cx="50%"
                cy="50%"
                r={radius}
                stroke={COLORS.orange}
                fill="transparent"
                strokeWidth="15"
                strokeDasharray={circleCircumference}
                strokeDashoffset={orangeStrokeDashoffset}
                rotation={orangeCircleAngle}
                originX="90"
                originY="90"
                strokeLinecap="round"
              />

              <Circle
                cx="50%"
                cy="50%"
                r={radius}
                stroke={COLORS.blue}
                fill="transparent"
                strokeWidth="15"
                strokeDasharray={circleCircumference}
                strokeDashoffset={blueStrokeDashoffset}
                rotation={blueCircleAngle}
                originX="90"
                originY="90"
                strokeLinecap="round"
              />
            </>
          </G>
        </Svg>
        <Text style={styles.label}>{totalAmount}</Text>
      </View>
    </View>
  );
};

export default DonutView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  graphWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: COLORS.white,
    position: 'absolute',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 24,
  },
});

//               {/* GREEN Circle */}
//               <Circle
//                 cx="50%"
//                 cy="50%"
//                 r={radius}
//                 stroke={COLORS.greenCircle}
//                 fill="transparent"
//                 strokeWidth="15"
//                 strokeDasharray={circleCircumference}
//                 strokeDashoffset={greenStrokeDashoffset}
//                 rotation={greenCircleAngle}
//                 originX="90"
//                 originY="90"
//                 strokeLinecap="round"
//               />
