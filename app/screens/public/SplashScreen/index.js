// import React, { useEffect } from 'react';
// import { Text, View, SafeAreaView } from 'react-native';
// // Icons
// import { LaunchScreenSvg } from '../../../assets/icons/SvgIcons';
// import {
//   appTokenMiddleware,
//   handleUserTokenizationAPI,
// } from '../../../redux/middlewares';
// import { connect } from 'react-redux';

// function SplashScreen() {
//   // useEffect(() => {
//   //   appTokenMiddleware();
//   //   handleUserTokenizationAPI();
//   // }, []);

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text style={{ color: 'white' }}>
//           SPLASH SCREEN to check user credentials
//         </Text>
//         <LaunchScreenSvg />
//       </View>
//     </SafeAreaView>
//   );
// }
// function mapStateToProps({ authReducer }) {
//   // console.log('====================================');
//   // console.log('THIS IS APP STATE=>>>>>>');
//   // console.log('====================================');
//   // console.log(authReducer);
//   // return { appState: store };
// }

// export default connect(mapStateToProps)(SplashScreen);
