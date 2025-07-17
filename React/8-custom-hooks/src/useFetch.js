import { useState, useEffect } from "react";

function useFetch(url) {
  // All the state logic now lives inside the hook
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // We don't want to run the fetch if the URL is not provided
    if (!url) return;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`An error occurred: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]); // The effect now depends on the URL prop

  // Return the state for the component to use
  return { data, isLoading, error };
}

export default useFetch;
