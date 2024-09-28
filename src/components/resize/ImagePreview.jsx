import PropTypes from "prop-types";

const ImagePreview = ({ processedImage, downloadFilename }) => {
  if (!processedImage) return null;

  return (
    <div className="bg-rose-50/10 rounded-lg backdrop-blur-[1px] p-2 my-4">
      <img
        src={processedImage}
        alt="Processed"
        className="object-contain rounded-lg shadow-md max-w-full max-h-full bg-gray-600"
      />
      <p className="mt-4">File: {downloadFilename}</p>
      <a
        href={processedImage}
        download={downloadFilename}
        className="mt-4 inline-block px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
      >
        Download Processed Image
      </a>
    </div>
  );
};

ImagePreview.propTypes = {
  processedImage: PropTypes.string,
  downloadFilename: PropTypes.string,
};

export default ImagePreview;
