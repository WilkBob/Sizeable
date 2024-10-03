import { useState } from "react";
import PropTypes from "prop-types";
import { FiDownload, FiArchive, FiCheck } from "react-icons/fi";
import { motion } from "framer-motion";

const DownloadButton = ({ outUrl, filename, processedNumber, reset }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 2000);
    reset();
  };

  const IconComponent = processedNumber > 1 ? FiArchive : FiDownload;

  return (
    <>
      {outUrl && (
        <div className="  p-6 flex flex-col items-center">
          <p className="text-lg font-semibold mb-4">Your file is ready!</p>
          <motion.a
            href={outUrl}
            download={filename}
            onClick={handleClick}
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-16 h-16 flex items-center justify-center cursor-pointer bg-rose-500 rounded-full text-white"
              animate={{
                backgroundColor: isClicked ? "#10B981" : "#F43F5E",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{
                  opacity: isClicked ? 0 : 1,
                  scale: isClicked ? 0.8 : 1,
                }}
              >
                <IconComponent size={24} />
              </motion.div>
              {isClicked && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className=""
                >
                  <FiCheck size={24} />

                  {isClicked ? "Downloading!!" : "Download"}
                </motion.div>
              )}
            </motion.div>
          </motion.a>
          <p className="mt-4 text-sm text-gray-500">
            {processedNumber > 1 ? "Zipped archive: " : "Single file: "}
            {filename}
          </p>
          <button
            className="mt-4 text-sm text-gray-500 underline"
            onClick={reset}
          >
            Convert more
          </button>
        </div>
      )}
    </>
  );
};

DownloadButton.propTypes = {
  outUrl: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired,
  processedNumber: PropTypes.number.isRequired,
  reset: PropTypes.func.isRequired,
};

export default DownloadButton;
