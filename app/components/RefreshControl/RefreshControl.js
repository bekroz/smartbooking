import React from 'react';
import { RefreshControl } from 'react-native';

export default function CustomRefreshControl({ refreshing, setRefreshing }) {
  const fadingTimeOut = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const onPullToRefresh = React.useCallback(() => {
    setRefreshing(true);
    fadingTimeOut(500).then(() => setRefreshing(false));
    getData();
  }, []);

  return (
    <RefreshControl
      refreshing={refreshing}
      onRefresh={onPullToRefresh}
      tintColor={'white'}
    />
  );
}
