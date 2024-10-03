import PropTypes from "prop-types";

const ProcessButton = ({ disabled }) => {
  const buttonClasses = `mt-4 px-4 py-2 text-white font-semibold rounded-lg shadow-mdfocus:outline-none focus:ring-2 focus:ring-opacity-75 ${
    disabled
      ? "cursor-not-allowed bg-gray-500 focus:ring-gray-400 hover:bg-gray-500"
      : "bg-rose-500 hover:bg-rose-700 focus:ring-rose-400"
  }`;

  return (
    <button type="submit" className={buttonClasses} disabled={disabled}>
      {"Upload and Process"}
    </button>
  );
};

ProcessButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
};

export default ProcessButton;
