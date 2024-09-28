import { OtherTools } from "../components/resize/OtherTools";
import { useState } from "react";
import useProgressify from "../hooks/useProgressify";
import FileUpload from "../components/FileUpload";
import ProcessButton from "../components/resize/ProcessButton";
import ErrorMessage from "../components/resize/ErrorMessage";
import Switch from "../components/Switch";
const Progressify = () => {
  return (
    <div className="flex flex-col container mx-auto max-w-full md:max-w-5xl">
      <ImageProcessor />
      <h2 className="my-4">
        This tool will help you to convert your images to progressive images. we
        resize and convert images to WebP format for better performance. Three
        images are returned: Fullsize webp, thumbnail webp, and a super tiny
        webp. As well, a json file is returned with the image urls, and base 64
        encodings for the tiny image. The json file can be used to lazy load the
        images, and the tiny image can be used as a placeholder while the full
        image loads. Give it a try and see how it can help improve the
        performance of your website!
      </h2>
      <OtherTools location={{ pathname: "/progressify" }} />
    </div>
  );
};

export default Progressify;

const ImageProcessor = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [includeThumbnails, setIncludeThumbnails] = useState(true);
  const [thumbnailsSize, setThumbnailsSize] = useState(300);
  const { loading, error, zipUrl, processImages } = useProgressify();

  const handleFileChange = (event) => {
    setSelectedImages(Array.from(event.target.files));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = {
      include_thumbnails: includeThumbnails,
      thumbnails_size: thumbnailsSize,
    };
    processImages(selectedImages, query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-rose-50/20 rounded-lg backdrop-blur-[1px] mt-8 p-2"
    >
      <h1 className="text-4xl my-4 font-bold">Progressify</h1>

      <h2 className="text-xl font-semibold mb-4">
        Choose your images, and a thumbnail width, and we&apos;ll do the rest.
      </h2>
      <hr className="mb-4" />
      <FileUpload
        setFile={() => {
          return null;
        }}
        onChange={handleFileChange}
        multiple
      />

      <div className="my-4">
        <label className="flex items-center space-x-3">
          <span className="">Include Thumbnails</span>
          <Switch value={includeThumbnails} onChange={setIncludeThumbnails} />
        </label>
      </div>
      {includeThumbnails && (
        <div className="mb-4">
          <label className="flex items-center">Thumbnail Width (Pixels)</label>
          <input
            type="number"
            value={thumbnailsSize}
            onChange={(e) => setThumbnailsSize(e.target.value)}
            className="py-2 px-2 text-gray-600 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
            min="1"
            required={includeThumbnails}
          />
        </div>
      )}
      <ProcessButton loading={loading} disabled={selectedImages.length === 0} />

      <ErrorMessage error={error} />
      {zipUrl && (
        <a
          href={zipUrl}
          download="processed_images.zip"
          className="text-rose-500 hover:text-rose-700 underline mt-4 block"
        >
          Download Processed Images
        </a>
      )}
    </form>
  );
};
