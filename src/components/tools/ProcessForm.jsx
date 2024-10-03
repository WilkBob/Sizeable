import { useState } from "react";

import useProcess from "../../hooks/useProcess";
import PropTypes from "prop-types";
import ProgressifyOptions from "./progressify/ProgressifyOptions";
import ResizeOptions from "./resize/ResizeOptions";
import ProcessButton from "./ProcessButton";
import DownloadButton from "./DownloadButton";
import FileUpload from "./FileUpload";
import ImagePreview from "./ImagePreview";
import Processing from "./Processing";
import { BiError } from "react-icons/bi";
import { FiRefreshCw } from "react-icons/fi";
import WebpOptions from "./webp/WebpOptions";

const ProcessForm = ({ processToUse }) => {
  const { loading, error, outUrl, filename, processImages, reset } =
    useProcess(processToUse);
  const [images, setImages] = useState([]);
  const [webp, setWebp] = useState(true);
  const [resizeWidth, setResizeWidth] = useState(500);
  const [thumbSize, setThumbSize] = useState(500);
  const [userQuality, setUserQuality] = useState(80);
  const [processedNumber, setProcessedNumber] = useState(0);

  const reallyReset = () => {
    reset();
    setImages([]);
    setProcessedNumber(0);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    const query = {};
    if (processToUse === "resize") {
      query.webp = webp;
      query.max_width = resizeWidth;
    }
    if (processToUse === "progressify") {
      query.thumbnail_size = thumbSize;
      query.include_thumbnails = true;
      query.max_width = 200;
    }

    if (processToUse === "webp") {
      query.quality = userQuality;
    }

    setProcessedNumber(images.length);
    await processImages(images, query);
  };
  return (
    <form
      className="bg-rose-200/20 rounded-lg backdrop-blur-[1px] flex flex-col p-2 md:p-4"
      onSubmit={handleUpload}
    >
      {loading ? (
        <Processing />
      ) : (
        <>
          {" "}
          {images.length <= 0 ? (
            <FileUpload
              setFile={setImages}
              multiple
              onChange={(e) => {
                console.log(e.target.files);
              }}
            />
          ) : !outUrl ? (
            <ImagePreview previewFiles={images} setPreviewFiles={setImages} />
          ) : (
            <DownloadButton
              processedNumber={processedNumber}
              outUrl={outUrl}
              filename={filename}
              reset={reallyReset}
            />
          )}
        </>
      )}
      {!outUrl && (
        <>
          {processToUse === "resize" && (
            <ResizeOptions
              setUserMaxWidth={setResizeWidth}
              setUserWebp={setWebp}
              userMaxWidth={resizeWidth}
              userWebp={webp}
            />
          )}
          {processToUse === "progressify" && (
            <ProgressifyOptions
              setThumbnailSize={setThumbSize}
              thumbnailSize={thumbSize}
            />
          )}
          {processToUse === "webp" && (
            <WebpOptions
              userQuality={userQuality}
              setUserQuality={setUserQuality}
            />
          )}
        </>
      )}
      {!outUrl && images.length > 0 && (
        <ProcessButton disabled={images.length === 0 || loading} />
      )}
      {error && (
        <div className="bg-rose-950/50 text-white p-4 rounded-lg mt-4 flex items-center justify-between">
          <div className="flex gap-2">
            <BiError className="text-2xl" />
            <strong>Error:</strong> {error}
          </div>
          <button
            onClick={() => reallyReset()}
            className="ml-4 text-white hover:text-gray-300 focus:outline-none flex items-center gap-1"
          >
            <span>Try Again</span> <FiRefreshCw size={20} />
          </button>
        </div>
      )}
    </form>
  );
};

ProcessForm.propTypes = {
  processToUse: PropTypes.string.isRequired,
};

export default ProcessForm;
