// const date = new Date();
// const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
// const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

// DEFAULT OUTGOING DATA TO SEND
// let outgoing_data = {
//   hotelID: '48',
//   date_range_type: 'type_stay_dates',
//   start_date: firstDayOfMonth,
//   end_date: lastDayOfMonth,
//   page: 2,
// };



// TODO: ADD =>>> network watcher
  // import NetInfo from '@react-native-community/netinfo';
  // const [disconnectionAlert, setDisconnectionAlert] = useState(true);
  // NetInfo.addEventListener(networkState => {
  //   // console.log('Connection type - ', networkState.type);
  //   // console.log('Is connected? - ', networkState.isConnected);
  //   setDisconnectionAlert(true);
  // });


  // const [chosenHotelName, setChosenHotelName] = useState(null);

  // import NetInfo from '@react-native-community/netinfo';



  const [disconnectionAlert, setDisconnectionAlert] = useState(false);

  // NetInfo.addEventListener(networkState => {
  //   console.log('Connection type - ', networkState.type);
  //   console.log('Is connected? - ', networkState.isConnected);
  //   if (networkState.isConnected === true) {
  //     setDisconnectionAlert(false);
  //   } else {
  //     setTimeout(setDisconnectionAlert(true));
  //   }
  // });

  // if (disconnectionAlert) {
  //   Alert.alert(
  //     'Нет подключения к Интернету',
  //     '',
  //     [
  //       {
  //         text: 'Попробовать еще раз',
  //         onPress: () => {
  //           // console.log('OK button Pressed');
  //           setDisconnectionAlert(false);
  //         },
  //         style: 'Cancel',
  //       },
  //     ],
  //   );
  // }

  // useEffect(() => {
  //   const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
  //     offline = !(state.isConnected && state.isInternetReachable);
  //     setOfflineStatus(offline);
  //   });

  //   if(offline) {
  //     alert('OFFLINE!')
  //   }
  //   return () => removeNetInfoSubscription();
  // }, []);
