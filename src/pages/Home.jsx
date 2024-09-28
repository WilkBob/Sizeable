import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaImage, FaFileImage, FaSpinner } from "react-icons/fa";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="container mx-auto max-w-full md:max-w-6xl p-6 text-lg h-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.header className="text-center mb-8" variants={itemVariants}>
        <h1 className="text-4xl font-bold mb-4">Welcome to Sizeable</h1>
        <p className="text-lg">
          Your one-stop solution for image resizing and optimization.
        </p>
      </motion.header>

      <motion.section className="my-8" variants={itemVariants}>
        <h2 className="text-2xl mb-4">Features</h2>
        <ul className="list-none pl-6">
          <motion.li className="flex items-center mb-2" variants={itemVariants}>
            <FaImage className="mr-2 text-rose-500" />
            Quickly resize images to your desired dimensions.
          </motion.li>
          <motion.li className="flex items-center mb-2" variants={itemVariants}>
            <FaFileImage className="mr-2 text-rose-500" />
            Convert images to WebP format for better performance.
          </motion.li>
          <motion.li className="flex items-center mb-2" variants={itemVariants}>
            <FaSpinner className="mr-2 text-rose-500" />
            Progressive image loading for a smoother user experience.
          </motion.li>
        </ul>
      </motion.section>

      <motion.section className="my-8" variants={itemVariants}>
        <h2 className="text-2xl mb-4">Get Started</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/resize"
              className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-700 transition-colors duration-300 text-center flex items-center justify-center"
            >
              <FaImage className="mr-2" /> Resize Images
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/webp"
              className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-700 transition-colors duration-300 text-center flex items-center justify-center"
            >
              <FaFileImage className="mr-2" /> Convert to WebP
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/progressify"
              className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-700 transition-colors duration-300 text-center flex items-center justify-center"
            >
              <FaSpinner className="mr-2" /> Progressive Loading
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;
