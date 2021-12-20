
// TODO: DRY Remove repeating pull to refresh functions from all screens when
// => Pull to refresh block
const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const onPullToRefresh = React.useCallback(() => {
    hotelAllReservationsData = [];
    console.log('====================================');
    console.log(hotelAllReservationsData);
    console.log('====================================');
    setRefreshing(true);
    wait(500).then(() => setRefreshing(false));
    getData();
  }, []);
  
  useEffect(() => {
    getData();
  }, [onPullToRefresh]);
  
  async function loadNewData() {
    setDataLoaded(false);
    try {
      await getData(pageIndex);
      setDataLoaded(true);
    } catch (error) {
      alert.error(error);
    }
  }
  
  React.useEffect(() => {
    setDataLoaded(false);
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
  
    return unsubscribe;
  }, [navigation]);
  