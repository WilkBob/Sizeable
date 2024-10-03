import { CgClose } from "react-icons/cg";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const ImagePreview = ({ previewFiles, setPreviewFiles }) => {
  const fileNumber = previewFiles.length;
  return (
    <>
      {previewFiles.length > 0 && (
        <div className="mt-4 flex justify-center">
          <div className="relative w-64 h-64">
            <img
              src={URL.createObjectURL(previewFiles[0])}
              alt="Preview"
              className="object-cover w-full h-full rounded-lg shadow-md bg-rose-200/20"
            />
            {previewFiles.length > 1 && (
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white text-lg">
                +{fileNumber - 1}
              </div>
            )}
            <motion.button
              className="absolute top-2 right-2 p-1 bg-white bg-opacity-75 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-opacity-50 flex text-center justify-center items-center hover:bg-opacity-100 transition duration-300"
              onClick={() => setPreviewFiles([])}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <CgClose
                size={20}
                className="text-gray-800 hover:text-gray-600"
              />
            </motion.button>
          </div>
        </div>
      )}
    </>
  );
};

ImagePreview.propTypes = {
  previewFiles: PropTypes.array.isRequired,
  setPreviewFiles: PropTypes.func.isRequired,
};

export default ImagePreview;
