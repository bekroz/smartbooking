// import React, { useState, useCallback } from 'react';
// import {
//   SafeAreaView,
//   StatusBar,
//   StyleSheet,
//   RefreshControl,
//   ScrollView,
//   Text,
// } from 'react-native';
// import BarLoader from 'react-spinners/BarLoader';
// import { SIZES } from '../constants/theme';

// function delay(timeout) {
//   return new Promise(resolve => {
//     setTimeout(resolve, timeout);
//   });
// }

// const App = () => {
//   const [loading, setLoading] = useState(false);

//   const loadMore = useCallback(async () => {
//     setLoading(true);

//     delay(1500).then(() => setLoading(false));
//   }, [loading]);

//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView style={styles.container}>
//         <ScrollView
//           contentContainerStyle={styles.scrollView}

//           // <RefreshControl
//           //   progressBackgroundColor="red"
//           //   tintColor="red"
//           //   refreshing={loading}
//           //   onRefresh={loadMore}
//           // /
//         >
//           <BarLoader height={4} width={SIZES.width} />
//           <Text>Swipe down to refresh</Text>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollView: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default App;
