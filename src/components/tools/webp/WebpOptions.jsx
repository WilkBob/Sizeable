import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FiImage } from "react-icons/fi";
import { IoInformationCircle } from "react-icons/io5";
import { useState, useEffect } from "react";

const WebpOptions = ({ userQuality, setUserQuality }) => {
  const [localUserQuality, setLocalUserQuality] = useState(userQuality);

  useEffect(() => {
    const handler = setTimeout(() => {
      setUserQuality(localUserQuality);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [localUserQuality, setUserQuality]);

  return (
    <motion.div
      className="bg-rose-200/20 rounded-lg shadow-lg p-6 mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-semibold mb-6 text-white flex flex-wrap items-center space-x-2">
        <FiImage className="text-2xl text-rose-400" />
        <span>Quality</span>
        <span className="text-gray-400 ml-2 text-sm gap-2">
          - Your images will be compressed to this quality.
        </span>
      </h3>
      <div className="flex items-center space-x-4">
        <input
          type="range"
          min="0"
          max="100"
          value={localUserQuality}
          onChange={(e) => setLocalUserQuality(e.target.value)}
          className="w-full h-2 bg-gray-700 accent-rose-500 rounded-lg appearance-none cursor-pointer"
        />
        <input
          type="number"
          value={localUserQuality}
          onChange={(e) => setLocalUserQuality(e.target.value)}
          min="0"
          max="100"
          className="w-20 p-2 text-center bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
        />
      </div>
      <p className="mt-2 text-sm text-gray-400">
        Range: 0 - 100
        {localUserQuality < 80 && (
          <span className="text-rose-400">
            <IoInformationCircle className="inline text-xl mx-2" />
            Low quality may result in visible artifacts.
          </span>
        )}
      </p>
    </motion.div>
  );
};

WebpOptions.propTypes = {
  userQuality: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setUserQuality: PropTypes.func.isRequired,
};

export default WebpOptions;
