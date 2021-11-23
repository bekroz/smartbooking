import React from 'react';
import { View, Text } from 'react-native';
import Pie from 'react-native-pie';
import { COLORS, SIZES } from '../constants/theme';

export default function Donut() {
  const data = { firstSource: 10, secondSource: 10 };

  return (
    <View style={{ justifyContent: 'center' }}>
      <Pie
        radius={65}
        innerRadius={50}
        sections={[
          {
            percentage: 60,
            color: COLORS.blue,
          },
          {
            percentage: 20,
            color: COLORS.orange,
          },
          {
            percentage: 5,
            color: COLORS.yellow,
          },
          {
            percentage: 5,
            color: COLORS.greenCircle,
          },
          {
            percentage: 5,
            color: COLORS.pinkCircle,
          },
          {
            percentage: 10,
            color: COLORS.coral,
          },
          {
            percentage: 10,
            color: COLORS.grayCirclePart,
          },
        ]}
        strokeCap={'butt'}
      />
      <View
        style={{
          alignItems: 'center',
          position: 'absolute',
          alignSelf: 'center',
        }}>
        <Text style={{ color: COLORS.white, fontWeight: SIZES.fontWeight0 }}>
          от стойки
        </Text>
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.body5,
            fontWeight: SIZES.fontWeight2,
            bottom: -5,
          }}>
          47%
        </Text>
      </View>
    </View>
  );
}

// import React, { Component } from 'react';

// import { AppRegistry, StyleSheet, Text, View, Platform } from 'react-native';
// import FusionCharts from 'react-native-fusioncharts';

// const dataSource = {
//   chart: {
//     caption: 'Android Distribution for our app',
//     subcaption: 'For all users in 2017',
//     showpercentvalues: '1',
//     defaultcenterlabel: 'Android Distribution',
//     aligncaptionwithcanvas: '0',
//     captionpadding: '0',
//     decimals: '1',
//     plottooltext:
//       '<b>$percentValue</b> of our Android users are on <b>$label</b>',
//     centerlabel: '# Users: $value',
//     theme: 'fusion',
//   },
//   data: [
//     {
//       label: 'Ice Cream Sandwich',
//       value: '1000',
//     },
//     {
//       label: 'Jelly Bean',
//       value: '5300',
//     },
//     {
//       label: 'Kitkat',
//       value: '10500',
//     },
//     {
//       label: 'Lollipop',
//       value: '18900',
//     },
//     {
//       label: 'Marshmallow',
//       value: '17904',
//     },
//   ],
// };

// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = dataSource;

//     this.libraryPath = Platform.select({
//       // Specify fusioncharts.html file location
//       ios: require('./assets/fusioncharts.html'),
//       android: { uri: 'file:///android_asset/fusioncharts.html' },
//     });
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.heading}>
//           FusionCharts Integration with React Native
//         </Text>
//         <View style={styles.chartContainer}>
//           <FusionCharts
//             type={this.state.type}
//             width={this.state.width}
//             height={this.state.height}
//             dataFormat={this.state.dataFormat}
//             dataSource={this.state.dataSource}
//             libraryPath={this.libraryPath} // set the libraryPath property
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   heading: {
//     fontSize: 20,
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   chartContainer: {
//     height: 200,
//   },
// });

// // skip this line if using Create React Native App
// AppRegistry.registerComponent('ReactNativeFusionCharts', () => App);
