import { useState } from "react";

import FileUpload from "../components/FileUpload";
import ResizeOptions from "../components/resize/ResizeOptions";
import ProcessButton from "../components/resize/ProcessButton";
import ImagePreview from "../components/resize/ImagePreview";
import ErrorMessage from "../components/resize/ErrorMessage";
import InfoSection from "../components/resize/InfoSection";
import { OtherTools } from "../components/resize/OtherTools";
import { extractFilename } from "../utils/extractFilename";
import NotLoggedIn from "../components/NotLoggedIn";

const Resize = () => {
  const [file, setFile] = useState(null);
  const [userMaxWidth, setUserMaxWidth] = useState("");
  const [userWebp, setUserWebp] = useState(true);
  const [processedImage, setProcessedImage] = useState(null);
  const [downloadFilename, setDownloadFilename] = useState(
    "processed-image.webp"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;
    if (!validateInput()) return;

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(
        `http://localhost:8000/resize/?max_width=${
          userMaxWidth || 500
        }&webp=${userWebp}`,
        { method: "POST", body: formData }
      );

      if (!response.ok) throw new Error("Network response was not ok");

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setProcessedImage(imageUrl);

      const contentDisposition = response.headers.get("Content-Disposition");
      setDownloadFilename(extractFilename(contentDisposition));
    } catch (error) {
      console.error("Error uploading file:", error);
      setError("Error processing image");
    } finally {
      setLoading(false);
    }
  };

  const validateInput = () => {
    if (userMaxWidth && (isNaN(userMaxWidth) || userMaxWidth <= 0)) {
      setError("Please enter a valid max width");
      return false;
    }
    if (userMaxWidth > 2000) {
      setError("Max width should be less than or equal to 2000");
      return false;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("File size should be less than 5MB");
      return false;
    }
    if (file.type.split("/")[0] !== "image") {
      setError("Please upload an image file");
      return false;
    }
    return true;
  };

  return (
    <div className="flex flex-col container mx-auto max-w-full md:max-w-6xl my-4">
      <form
        className="bg-rose-200/20 rounded-lg backdrop-blur-[1px] flex flex-col p-2 "
        onSubmit={handleUpload}
      >
        <h1 className="text-4xl my-4 font-bold">Image Resizer</h1>

        <h2 className="text-xl  mb-4">
          Choose an image, and enter a width, image will scale according to
          aspect ratio
        </h2>
        <hr className="mb-4" />
        <FileUpload
          file={file}
          setFile={setFile}
          onChange={() => {
            setError(null);
            setProcessedImage(null);
          }}
        />
        <ResizeOptions
          userMaxWidth={userMaxWidth}
          setUserMaxWidth={setUserMaxWidth}
          userWebp={userWebp}
          setUserWebp={setUserWebp}
        />
        <ProcessButton disabled={!file || loading} loading={loading} />
        <NotLoggedIn />
      </form>

      <ImagePreview
        processedImage={processedImage}
        downloadFilename={downloadFilename}
      />
      <InfoSection />
      <ErrorMessage error={error} />
      <OtherTools location={{ pathname: "/resize" }} />
    </div>
  );
};

export default Resize;
