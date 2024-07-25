import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    const initialLoadingTimer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 2000);

    //const initialLoadingTimer = setIsInitialLoading(false);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setIsDataLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsDataLoading(false);
      }
    };

    if (!isInitialLoading) {
      fetchData();
    }

    return () => clearTimeout(initialLoadingTimer);
  }, [url, isInitialLoading]);

  return { data, isInitialLoading, isDataLoading };
};

export default useFetch;
