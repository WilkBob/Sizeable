import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Switch = ({ value, onChange }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only peer"
      />
      <div
        className={`w-11 h-6 bg-gray-600 rounded-lg peer peer-checked:bg-rose-600`}
      >
        <motion.div
          className={`w-[50%] h-full bg-rose-100 rounded-lg shadow-md`}
          layout
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
            duration: 0.3,
          }}
          animate={{ x: value ? 20 : 0 }}
        />
      </div>
    </label>
  );
};

Switch.propTypes = {
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Switch;
