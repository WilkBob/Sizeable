import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FiImage } from "react-icons/fi";
import Switch from "../Switch";
import { IoInformationCircle } from "react-icons/io5";

const ResizeOptions = ({
  userMaxWidth,
  setUserMaxWidth,
  userWebp,
  setUserWebp,
}) => {
  return (
    <motion.div
      className="bg-rose-200/20 rounded-lg shadow-lg p-6 mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
        <FiImage className="mr-2 text-rose-400" />
        Width (px){" "}
        <span className="text-gray-400 ml-2 text-sm">
          - Your images will be scaled proportionally to this width
        </span>
      </h3>
      <div className="flex items-center space-x-4">
        <input
          type="range"
          min="100"
          max="2000"
          value={userMaxWidth}
          onChange={(e) => setUserMaxWidth(e.target.value)}
          className="w-full h-2 bg-gray-700 accent-rose-500 rounded-lg appearance-none cursor-pointer"
        />
        <input
          type="number"
          value={userMaxWidth}
          onChange={(e) => setUserMaxWidth(e.target.value)}
          min="100"
          max="2000"
          className="w-20 p-2 text-center bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
        />
        <span className="text-gray-400">px</span>
      </div>
      <p className="mt-2 text-sm text-gray-400">Width range: 100px - 2000px</p>
      <div className="mt-6 flex items-center gap-2">
        <Switch value={userWebp} onChange={setUserWebp} />
        <span className="text-white">Convert to WebP</span>
        <span className="flex items-center text-rose-400">
          <IoInformationCircle className="mr-1" />
          Recommended
        </span>
      </div>
    </motion.div>
  );
};

ResizeOptions.propTypes = {
  userMaxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setUserMaxWidth: PropTypes.func.isRequired,
  userWebp: PropTypes.bool.isRequired,
  setUserWebp: PropTypes.func.isRequired,
};

export default ResizeOptions;
