import { useState, useCallback } from "react";
import resize from "../API/resize";
import webp from "../API/webp";

const useProcess = (endpoint) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [outUrl, setOutUrl] = useState(null);
  const [filename, setFilename] = useState(null);
  const processImages = useCallback(
    async (images, query) => {
      setLoading(true);
      setError(null);
      setOutUrl(null);
      console.log(images, query);

      try {
        const [url, filename] = await (endpoint === "resize" ? resize : webp)(
          images,
          query
        );
        setOutUrl(url);
        setFilename(filename);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [endpoint]
  );

  const reset = () => {
    setOutUrl(null);
    setError(null);
  };

  return { loading, error, outUrl, filename, processImages, reset };
};

export default useProcess;
