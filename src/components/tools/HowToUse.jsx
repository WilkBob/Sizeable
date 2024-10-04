import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FiImage, FiMaximize, FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
import UsageExample from "./progressify/UsageExample";

const HowToUse = ({ tool }) => {
  const toolInfo = {
    resize: {
      icon: <FiMaximize className="text-rose-500" size={24} />,
      title: "How to Resize Images",
      steps: [
        "Upload your image(s) using the dropzone above",
        "Choose your desired width",
        "Click 'Process' to resize your images",
        "Download your resized image(s)",
      ],
    },
    webp: {
      icon: <FiImage className="text-rose-500" size={24} />,
      title: "How to Convert to WebP",
      steps: [
        "Upload your image(s) using the dropzone above",
        "Choose quality settings",
        "Click 'Process' to convert your images to WebP format",
        "Download your WebP image(s)",
      ],
    },
    progressify: {
      icon: <FiDownload className="text-rose-500" size={24} />,
      title: "How to Use Progressify",
      steps: [
        "Upload your image(s) using the dropzone above",
        "Set the desired thumbnail size",
        "Click 'Process' to create progressive versions",
        "Download your images. The thumbnails will be included in a zip file.",
        <>
          {
            <>
              Use{" "}
              <Link to="/progressify-react" className="text-rose-500">
                progressify-react
              </Link>{" "}
              to display the images in your React app.
            </>
          }
        </>,
      ],
    },
  };

  const { icon, title, steps } = toolInfo[tool];

  return (
    <motion.div
      className="bg-rose-200/20 rounded-lg shadow-lg p-6 mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-2 text-white">{title}</h3>
      </div>
      <ol className="list-decimal list-inside space-y-2 mb-4">
        {steps.map((step, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {step}
          </motion.li>
        ))}
      </ol>
      {tool === "progressify" && <UsageExample />}
    </motion.div>
  );
};

HowToUse.propTypes = {
  tool: PropTypes.oneOf(["resize", "webp", "progressify"]).isRequired,
};

export default HowToUse;
