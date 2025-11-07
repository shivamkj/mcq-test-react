import { useEffect, useState } from "react";

export function getUrl(testId) {
  return `https://firebasestorage.googleapis.com/v0/b/mcqtestapp-a1465.firebasestorage.app/o/${testId}.json?alt=media`;
};

export function useFetch(url) {
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
