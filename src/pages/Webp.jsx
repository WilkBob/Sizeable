import { useState } from "react";
import { OtherTools } from "../components/resize/OtherTools";
import { extractFilename } from "../utils/extractFilename";
import FileUpload from "../components/FileUpload";
import ProcessButton from "../components/resize/ProcessButton";
import ImagePreview from "../components/resize/ImagePreview";
import ErrorMessage from "../components/resize/ErrorMessage";
import NotLoggedIn from "../components/NotLoggedIn";

const Webp = () => {
  const [file, setFile] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [downloadFilename, setDownloadFilename] = useState(
    "processed-image.webp"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(`http://localhost:8000/webp/`, {
        method: "POST",
        body: formData,
      });

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

  return (
    <div className="flex flex-col container mx-auto max-w-full md:max-w-6xl my-4">
      <form
        className="bg-rose-200/20 rounded-lg backdrop-blur-[1px] flex flex-col p-2"
        onSubmit={handleUpload}
      >
        <h1 className="text-4xl my-4 font-bold">WebP Converter</h1>

        <h2 className="text-xl  mb-4">
          Choose an image, and we&apos;ll convert it to WebP format for better
          performance.
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
        <ProcessButton disabled={!file || loading} loading={loading} />
        <NotLoggedIn />
      </form>

      <ImagePreview
        processedImage={processedImage}
        downloadFilename={downloadFilename}
      />
      <div className="p-4 my-4 rounded-lg bg-rose-200/20 backdrop-blur-sm">
        <h1 className="text-3xl">How to use:</h1>
        <p className="my-4">
          Choose an image file from your computer, and we will convert it to
          WebP format. WebP images are smaller in size compared to JPEG and PNG
          images, which can help improve the performance of your website. Once
          the image is converted, you can download it and use it on your
          website.
        </p>
      </div>

      <ErrorMessage error={error} />
      <OtherTools location={{ pathname: "/webp" }} />
    </div>
  );
};

export default Webp;
