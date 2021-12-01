// import React, { Component } from 'react';
// import { AppRegistry, StyleSheet, Text, View, Platform } from 'react-native';
// import FusionCharts from 'react-native-fusioncharts';

// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       type: 'column2d',
//       width: '100%',
//       height: '100%',
//       dataFormat: 'json',
//       dataSource: {
//         chart: {
//           caption: "Harry's SuperMart",
//           subCaption: 'Top 5 stores in last month by revenue',
//           numberprefix: '$',
//           theme: 'fint',
//         },
//         data: [
//           { label: 'Bakersfield Central', value: '880000' },
//           { label: 'Garden Groove harbour', value: '730000' },
//           { label: 'Los Angeles Topanga', value: '590000' },
//           { label: 'Compton-Rancho Dom', value: '520000' },
//           { label: 'Daly City Serramonte', value: '330000' },
//         ],
//       },
//     };

//     this.libraryPath = Platform.select({
//       // Specify fusioncharts.html file location
//       ios: require('../assets/fusioncharts/fusioncharts.html'),
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
