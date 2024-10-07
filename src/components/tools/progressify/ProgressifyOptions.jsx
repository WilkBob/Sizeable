import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FiImage } from "react-icons/fi";
import { useState, useEffect } from "react";

const ProgressifyOptions = ({ thumbnailSize, setThumbnailSize }) => {
  const [localThumbnailSize, setLocalThumbnailSize] = useState(thumbnailSize);

  useEffect(() => {
    const handler = setTimeout(() => {
      setThumbnailSize(localThumbnailSize);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [localThumbnailSize, setThumbnailSize]);

  return (
    <motion.div
      className="bg-rose-200/20 rounded-lg shadow-lg p-6 mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-semibold mb-6 text-white flex flex-wrap items-center">
        <FiImage className="mr-2 text-2xl text-rose-400" />
        Thumbnail Size{" "}
        <span className="text-gray-400 ml-2 text-sm">
          - Consider where you&apos;ll be displaying smaller versions of your
          images
        </span>
      </h3>
      <div className="flex items-center space-x-4">
        <input
          type="range"
          min="100"
          max="650"
          value={localThumbnailSize}
          onChange={(e) => setLocalThumbnailSize(e.target.value)}
          className="w-full h-2 bg-gray-700 accent-rose-500 rounded-lg appearance-none cursor-pointer"
          required
        />
        <input
          required
          type="number"
          value={localThumbnailSize}
          onChange={(e) => setLocalThumbnailSize(e.target.value)}
          min="100"
          max="650"
          className="w-20 p-2 text-center bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
        />
        <span className="text-gray-400">px</span>
      </div>
      <p className="mt-2 text-sm text-gray-400">Width range: 100px - 650px</p>
    </motion.div>
  );
};

ProgressifyOptions.propTypes = {
  thumbnailSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  setThumbnailSize: PropTypes.func.isRequired,
};

export default ProgressifyOptions;
