import { OtherTools } from "../components/resize/OtherTools";
import { useState } from "react";
import useProgressify from "../hooks/useProgressify";
import FileUpload from "../components/FileUpload";
import ProcessButton from "../components/resize/ProcessButton";
import ErrorMessage from "../components/resize/ErrorMessage";
import Switch from "../components/Switch";
import { Link } from "react-router-dom";
import NotLoggedIn from "../components/NotLoggedIn";
const Progressify = () => {
  return (
    <div className="flex flex-col container mx-auto max-w-full md:max-w-6xl my-4">
      <ImageProcessor />
      <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="w-full bg-rose-200/20 backdrop-blur-sm p-6 rounded-lg">
          <h2 className="text-3xl font-semibold  mb-4">Why Progressify?</h2>
          <p className="text-lg  mb-6">
            Progressify enhances your website&apos;s image loading experience
            by:
          </p>
          <ul className="text-left  space-y-2">
            <li>✨ Showing a low-resolution placeholder immediately</li>
            <li>✨ Lazy-loading images for better performance</li>
            <li>✨ Smooth transition from placeholder to full image</li>
            <li>✨ Optimizing images for web (WebP format, resizing)</li>
          </ul>
          <p className="text-lg  mt-6">
            Want to improve your websites loading speed and user experience?
            Process your images above, then
            <a href="#how-to-use" className="text-lime-200 hover:underline">
              {" use our components"}
            </a>{" "}
            to implement progressive image loading.
          </p>
        </div>
        <div className="w-full bg-rose-200/20 backdrop-blur-sm p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold  mb-4">
            How to Use Progressify
          </h3>
          <p className="mb-4">
            After using the tool to process your images, you can use them any
            way you like, but our <Link to={"/"}>React library</Link> makes it
            easy to implement progressive image loading on your website. Just
            copy the contents of the zip file into your public code, and install
            (or copy/paste) the components into your project, then use them like
            this:
          </p>
          <div className="block bg-rose-950/50 border-2 text-white p-4 rounded-md overflow-x-auto shadow-lg">
            <pre>
              <code>
                <span className="text-teal-300">&lt;ImageProvider</span>{" "}
                <span className="text-yellow-300">indexUrl</span>=
                <span className="text-lime-300">
                  &quot;/path/to/index.json&quot;
                </span>
                <span className="text-teal-300">&gt;</span>
                <br />
                &nbsp;&nbsp;
                <span className="text-teal-300">&lt;ProgressiveImage</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-yellow-300">src</span>=
                <span className="text-lime-300">
                  &quot;image-filename&quot;
                </span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-yellow-300">alt</span>=
                <span className="text-lime-300">
                  &quot;Description of the image&quot;
                </span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-yellow-300">className</span>=
                <span className="text-lime-300">
                  &quot;your-custom-classes&quot;
                </span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-yellow-300">placeholderClassName</span>=
                <span className="text-lime-300">
                  &quot;your-custom-classes&quot;
                </span>
                <br />
                &nbsp;&nbsp;<span className="text-teal-300">/&gt;</span>
                <br />
                <span className="text-teal-300">&lt;/ImageProvider&gt;</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
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
      className="flex flex-col bg-rose-200/20 rounded-lg backdrop-blur-[1px]  p-2"
    >
      <h1 className="text-4xl my-4 font-bold">Progressify</h1>

      <h2 className="text-xl  mb-4">
        Upload your images and we&apos;ll do the rest.
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
      <NotLoggedIn />
      {zipUrl && (
        <a
          href={zipUrl}
          download="processed_images.zip"
          className="text-lime-200 hover:text-lime-400 underline mt-4 block"
        >
          Download Processed Images
        </a>
      )}
    </form>
  );
};
