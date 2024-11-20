import PropTypes from "prop-types";
import { FiDownload, FiArchive, FiCheck, FiRefreshCw } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ImagePreview from "./ImagePreview";
import { img } from "framer-motion/client";

const DownloadButton = ({ outUrl, filename, processedNumber, reset }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 2000);
  };

  const IconComponent = processedNumber > 1 ? FiArchive : FiDownload;

  return (
    <AnimatePresence>
      {outUrl && (
        <motion.div
          className=" p-6 my-6 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <motion.p
            className="text-xl font-semibold mb-4 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Your file is ready!
          </motion.p>
          <motion.a
            href={outUrl}
            download={filename}
            onClick={handleClick}
            className="group relative inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="cursor-pointer bg-rose-500 rounded-full text-white shadow-lg group-hover:bg-rose-600 transition-colors duration-300 flex items-center justify-center space-x-2 p-4"
              animate={{
                backgroundColor: isClicked ? "#10B981" : undefined,
              }}
            >
              <AnimatePresence mode="wait">
                {isClicked ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  >
                    <FiCheck size={32} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="icon"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <IconComponent size={32} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.span
              className="text-sm text-white font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {isClicked ? "Downloading!" : "Download"}
            </motion.span>
          </motion.a>
          <motion.p
            className="mt-12 text-sm text-gray-400 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {processedNumber > 1 ? "Zipped archive: " : "Image Name: "}
            <br />

            <span className="font-medium text-gray-300">{filename}</span>
          </motion.p>
          {processedNumber === 1 && (
            <img src={outUrl} alt={filename} className="" />
          )}
          <motion.button
            className="mt-6 px-4 py-2 bg-gray-700 text-white rounded-full flex items-center space-x-2 hover:bg-gray-600 transition-colors duration-300"
            onClick={reset}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <FiRefreshCw size={16} />
            <span>Convert more</span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

DownloadButton.propTypes = {
  outUrl: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired,
  processedNumber: PropTypes.number.isRequired,
  reset: PropTypes.func.isRequired,
};

export default DownloadButton;
