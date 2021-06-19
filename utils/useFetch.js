import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setFetchedData(result);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return [fetchedData, isLoading];
};

export default useFetch;
