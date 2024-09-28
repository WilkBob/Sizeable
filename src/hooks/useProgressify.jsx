import { useState, useCallback } from "react";
import progressify from "../API/progressify";

const useProgressify = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [zipUrl, setZipUrl] = useState(null);

  const processImages = useCallback(async (images, query) => {
    setLoading(true);
    setError(null);
    setZipUrl(null);

    try {
      const url = await progressify(images, query);
      setZipUrl(url);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, error, zipUrl, processImages };
};

export default useProgressify;
