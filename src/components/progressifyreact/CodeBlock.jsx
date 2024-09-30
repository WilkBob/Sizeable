import PropTypes from "prop-types";
const CodeBlock = ({ code }) => (
  <pre className="bg-rose-200/20 border-white border-2 text-lime-300 p-4 rounded-md overflow-x-auto">
    <code>{code}</code>
  </pre>
);

CodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
};

export default CodeBlock;
