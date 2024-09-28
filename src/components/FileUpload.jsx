import PropTypes from "prop-types";

const FileUpload = ({ setFile, onChange, multiple = false }) => {
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    onChange(e);
  };

  return (
    <input
      type="file"
      name="file"
      accept="image/*"
      onChange={handleFileChange}
      className="block text-sm text-gray-300 file:mr-2 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-rose-50 file:text-rose-700 hover:file:bg-rose-100 file:cursor-pointer"
      required
      multiple={multiple}
    />
  );
};

FileUpload.propTypes = {
  setFile: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
};

export default FileUpload;
