import { useEffect, useState } from "react";

export const getUrl = (testId) => {
  return `https://storage.googleapis.com/mcq-test/${testId}.json`;
};

export const useFetch = (url) => {
  const [isLoading, setLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await fetch(url);
      setFetchedData(await res.json());
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return [fetchedData, isLoading];
};
