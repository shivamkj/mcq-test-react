import { useEffect, useState } from "react";
import { parseQueryParam } from "./helper";

export const getUrl = () => {
  return `https://storage.googleapis.com/mcq-test/${parseQueryParam("id")}.json`;
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
