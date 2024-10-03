import PropTypes from "prop-types";

const ProgressifyOptions = ({ thumbnailSize, setThumbnailSize }) => {
  return (
    <div className="bg-rose-200/20 rounded-lg shadow-md p-8 mt-8">
      <h3 className="text-xl font-semibold mb-6">Choose a thumbnail size</h3>

      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <label htmlFor="max-width" className="text-lg font-medium">
            Width (px)
          </label>
          <div className="w-1/2">
            <input
              id="max-width"
              type="number"
              placeholder="Width"
              value={thumbnailSize}
              min={1}
              max={2000}
              name="Width"
              onChange={(e) => setThumbnailSize(e.target.value)}
              className="block w-full p-3 border-b border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400 bg-rose-200/20"
              required
            />
            <p className="mt-2 text-sm text-gray-500">Max: 2000px</p>
          </div>
        </div>
      </div>
    </div>
  );
};

ProgressifyOptions.propTypes = {
  thumbnailSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setThumbnailSize: PropTypes.func.isRequired,
};

export default ProgressifyOptions;
