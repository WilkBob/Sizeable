import PropTypes from "prop-types";

const ErrorMessage = ({ error }) => {
  if (!error) return null;
  return (
    <p className="text-red-500 mt-4 p-2 bg-rose-900 rounded">
      <span
        className="
      px-2 bg-red-500 text-white rounded-full text-lg font-bold mr-2
      "
      >
        !
      </span>
      {error}
    </p>
  );
};

ErrorMessage.propTypes = {
  error: PropTypes.string,
};

export default ErrorMessage;
