import Switch from "../Switch";
import PropTypes from "prop-types";

const ResizeOptions = ({
  userMaxWidth,
  setUserMaxWidth,
  userWebp,
  setUserWebp,
}) => {
  return (
    <>
      <div className="flex items-center mt-4">
        <Switch value={userWebp} onChange={setUserWebp} />
        <p className="ml-2 text-sm">Convert to WebP</p>
      </div>
      <label htmlFor="max-width" className="text-sm mt-4">
        Width in pixels (Max: 2000)
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
        className="block w-full p-2 text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 mt-2"
        required
      />
    </>
  );
};

ResizeOptions.propTypes = {
  userMaxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setUserMaxWidth: PropTypes.func.isRequired,
  userWebp: PropTypes.bool.isRequired,
  setUserWebp: PropTypes.func.isRequired,
};

export default ResizeOptions;
