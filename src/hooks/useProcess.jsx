import { useState, useCallback } from "react";
import processImagesAPI from "../API/API";
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
      //console.log(images, query);

      try {
        const [url, filename] = await processImagesAPI(
          endpoint, // resize, resize-multiple, webp, webp-multiple, or component. Crazy, i know.
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
    setFilename(null);
    setLoading(false);
  };

  return { loading, error, outUrl, filename, processImages, reset };
};

export default useProcess;
