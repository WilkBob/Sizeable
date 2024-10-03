import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FiImage } from "react-icons/fi";

const ProgressifyOptions = ({ thumbnailSize, setThumbnailSize }) => {
  return (
    <motion.div
      className="bg-rose-200/20 rounded-lg shadow-lg p-6 mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
        <FiImage className="mr-2" />
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
          max="2000"
          value={thumbnailSize}
          onChange={(e) => setThumbnailSize(e.target.value)}
          className="w-full h-2 bg-gray-700 accent-rose-500 rounded-lg appearance-none cursor-pointer"
        />
        <input
          type="number"
          value={thumbnailSize}
          onChange={(e) => setThumbnailSize(e.target.value)}
          min="100"
          max="2000"
          className="w-20 p-2 text-center bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
        />
        <span className="text-gray-400">px</span>
      </div>
      <p className="mt-2 text-sm text-gray-400">Width range: 100px - 2000px</p>
    </motion.div>
  );
};

ProgressifyOptions.propTypes = {
  thumbnailSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  setThumbnailSize: PropTypes.func.isRequired,
};

export default ProgressifyOptions;
