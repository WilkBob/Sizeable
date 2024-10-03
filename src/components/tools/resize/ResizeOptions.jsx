import Switch from "../../Switch";
import PropTypes from "prop-types";

const ResizeOptions = ({
  userMaxWidth,
  setUserMaxWidth,
  userWebp,
  setUserWebp,
}) => {
  return (
    <div className="bg-rose-200/20 rounded-lg shadow-md p-8 mt-8">
      <div className="space-y-8">
        <div className="flex flex-col">
          <span className="ml-4 text-lg font-medium">Convert to Webp?</span>
          <Switch value={userWebp} onChange={setUserWebp} />

          <label htmlFor="max-width" className="text-lg font-medium">
            Image width (px)
          </label>

          <input
            id="max-width"
            type="number"
            placeholder="Width"
            value={userMaxWidth}
            min={1}
            max={2000}
            name="Width"
            onChange={(e) => setUserMaxWidth(e.target.value)}
            className="block w-full p-3 border-b border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400 bg-rose-200/20"
            required
          />
          <p className="mt-2 text-sm text-gray-500">Max: 2000px</p>
        </div>
      </div>
    </div>
  );
};

ResizeOptions.propTypes = {
  userMaxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setUserMaxWidth: PropTypes.func.isRequired,
  userWebp: PropTypes.bool.isRequired,
  setUserWebp: PropTypes.func.isRequired,
};

export default ResizeOptions;
