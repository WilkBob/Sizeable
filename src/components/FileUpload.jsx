import { useCallback, useContext, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { AuthContext } from "./context/AuthContext";
import { CgClose } from "react-icons/cg";

const FileUpload = ({ setFile, onChange, multiple = false }) => {
  const [dragActive, setDragActive] = useState(false);
  const [previewFiles, setPreviewFiles] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const isLoggedIn = currentUser !== null;

  const handleFile = useCallback(
    (files) => {
      setFile(files[0]);
      setPreviewFiles(Array.from(files).slice(0, 3));
      onChange({ target: { files } });
    },
    [setFile, onChange]
  );

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFile(e.dataTransfer.files);
      }
    },
    [handleFile]
  );

  const handleChange = useCallback(
    (e) => {
      e.preventDefault();
      if (e.target.files && e.target.files[0]) {
        handleFile(e.target.files);
      }
    },
    [handleFile]
  );

  return (
    <div className="w-full">
      {previewFiles.length === 0 && (
        <motion.div
          className={`relative p-6 mt-4 text-center border-2 border-dashed rounded-lg transition-colors ${
            dragActive
              ? "border-rose-400 bg-rose-100/20"
              : "border-gray-300 bg-rose-200/20"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          animate={{ scale: dragActive ? 1.02 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleChange}
            accept="image/*"
            required
            multiple={isLoggedIn && multiple}
          />
          <div className="space-y-1 text-center">
            <svg
              className="w-12 h-12 mx-auto text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-sm text-gray-600">
              Drop your files here or click to upload
            </p>
          </div>
        </motion.div>
      )}
      {previewFiles.length > 0 && (
        <div className="mt-4 flex justify-center">
          <div className="relative">
            <img
              src={URL.createObjectURL(previewFiles[0])}
              alt="Preview"
              className="object-cover rounded-lg shadow-md bg-rose-200/20"
            />
            {previewFiles.length > 1 && (
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white text-lg">
                +{previewFiles.length - 1}
              </div>
            )}
            <button
              className="absolute top-2 right-2 p-1 bg-white bg-opacity-50 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-opacity-50 flex text-center justify-center align-middle"
              onClick={() => setPreviewFiles([])}
            >
              <CgClose size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

FileUpload.propTypes = {
  setFile: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
};

export default FileUpload;
