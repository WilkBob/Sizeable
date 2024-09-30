import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex items-center justify-center text-rose-50">
      <motion.div
        className="text-center flex flex-col items-center space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="loader ease-linear rounded-full border-4 border-t-8 border-gray-200 h-32 w-32 mb-4"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        ></motion.div>
        <motion.h2
          className="text-2xl font-semibold"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Loading...
        </motion.h2>
        <motion.p
          className="text-lg"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Please wait while the page loads.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loading;
