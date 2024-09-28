const InfoSection = () => {
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-rose-200/20 backdrop-blur-sm p-4 rounded-lg shadow-md">
        <h2 className="text-2xl  mb-2">How to Use</h2>
        <ol className="list-decimal pl-4">
          <li>
            Upload an image file by clicking the &quot;Choose File&quot; button.
          </li>
          <li>
            Enter the desired maximum width in pixels in the &quot;Max
            Width&quot; field.
          </li>
          <li>
            Optionally check the &quot;Convert to WebP&quot; checkbox to
            optimize the image for smaller file sizes.
          </li>
          <li>
            Click the &quot;Upload and Process&quot; button to resize the image.
          </li>
        </ol>
      </div>
      <div className="bg-rose-200/20 backdrop-blur-sm p-4 rounded-lg shadow-md">
        <h2 className="text-2xl  mb-2">Why Resize Your Images?</h2>
        <ul className="list-disc pl-4">
          <li>
            <strong>Faster loading times:</strong> Smaller image files load more
            quickly, improving user experience.
          </li>
          <li>
            <strong>Improved website performance:</strong> Optimized images
            contribute to better overall website performance.
          </li>
          <li>
            <strong>Reduced bandwidth usage:</strong> Smaller images require
            less data to transfer, saving bandwidth.
          </li>
          <li>
            <strong>Saved storage space:</strong> Storing smaller images can
            save storage space on your server.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InfoSection;
