import { useCallback } from 'react';

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  
  const onPullToRefresh = useCallback((function) => {
    wait(500).then(() => function());
  }, []);