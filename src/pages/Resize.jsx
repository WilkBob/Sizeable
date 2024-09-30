import { useState } from "react";

import FileUpload from "../components/FileUpload";
import ResizeOptions from "../components/resize/ResizeOptions";
import ProcessButton from "../components/resize/ProcessButton";
import ImagePreview from "../components/resize/ImagePreview";
import ErrorMessage from "../components/resize/ErrorMessage";
import InfoSection from "../components/resize/InfoSection";
import { OtherTools } from "../components/resize/OtherTools";
import NotLoggedIn from "../components/NotLoggedIn";
import useProcess from "../hooks/useProcess";
import ResizeHelmet from "./Helmets/ResizeHelmet";

const Resize = () => {
  const [file, setFile] = useState(null);
  const [userMaxWidth, setUserMaxWidth] = useState("");
  const [userWebp, setUserWebp] = useState(true);

  const [processedMultiple, setProcessedMultiple] = useState(false);
  const { loading, error, outUrl, processImages, reset, filename } =
    useProcess("resize");

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    const query = {
      max_width: userMaxWidth,
      webp: userWebp,
    };

    await processImages(file, query);
  };

  return (
    <div className="flex flex-col container mx-auto max-w-full md:max-w-6xl my-4">
      <ResizeHelmet />
      <form
        className="bg-rose-200/20 rounded-lg backdrop-blur-[1px] flex flex-col p-2"
        onSubmit={handleUpload}
      >
        <h1 className="text-4xl my-4 font-bold">Image Resizer</h1>
        <h2 className="text-xl mb-4">
          Choose an image, and enter a width, image will scale according to
          aspect ratio
        </h2>
        <hr className="mb-4" />
        <FileUpload
          file={file}
          setFile={setFile}
          onChange={(e) => {
            reset();
            const multiple = e.target.files.length > 1;
            setFile(Array.from(e.target.files));

            setProcessedMultiple(multiple);
          }}
          multiple
        />
        <ResizeOptions
          userMaxWidth={userMaxWidth}
          setUserMaxWidth={setUserMaxWidth}
          userWebp={userWebp}
          setUserWebp={setUserWebp}
        />
        <ProcessButton disabled={!file || loading} loading={loading} />
        <NotLoggedIn />

        {outUrl && processedMultiple && (
          <a
            href={outUrl}
            download={filename}
            className="
          bg-lime-500 text-white px-4 py-2 my-4 rounded-md hover:bg-lime-700 transition-colors duration-300 text-center flex items-center justify-center
          "
          >
            Download Processed Images
          </a>
        )}
      </form>

      {outUrl && !processedMultiple && (
        <ImagePreview processedImage={outUrl} downloadFilename={filename} />
      )}
      <ErrorMessage error={error} />
      <InfoSection />

      <OtherTools location={{ pathname: "/resize" }} />
    </div>
  );
};

export default Resize;
