import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaImage,
  FaFileImage,
  FaSpinner,
  FaGithub,
  FaNpm,
} from "react-icons/fa";

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
      className="min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto max-w-full md:max-w-6xl p-6 text-lg">
        <motion.header
          className="text-center mb-12 pt-16"
          variants={itemVariants}
        >
          <h1 className="text-6xl font-bold mb-4 text-rose-500">
            Welcome to Sizeable
          </h1>
          <p className="text-2xl text-gray-300">
            Your one-stop solution for image resizing, optimization, and
            progressive loading.
          </p>
        </motion.header>

        <motion.section className="my-16" variants={itemVariants}>
          <h2 className="text-3xl mb-8 text-center font-semibold">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-rose-200/20 p-6 rounded-lg shadow-lg flex flex-col"
              variants={itemVariants}
            >
              <FaImage className="text-4xl text-rose-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Image Resizing</h3>
              <p className="flex-grow">
                Quickly resize images to your desired dimensions with our
                intuitive interface.
              </p>
              <motion.div
                className="mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/resize"
                  className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition-colors duration-300 text-center flex items-center justify-center"
                >
                  <FaImage className="mr-2" /> Resize Images
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="bg-rose-200/20 p-6 rounded-lg shadow-lg flex flex-col"
              variants={itemVariants}
            >
              <FaFileImage className="text-4xl text-rose-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">WebP Conversion</h3>
              <p className="flex-grow">
                Convert images to WebP format for better performance and smaller
                file sizes.
              </p>
              <motion.div
                className="mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/webp"
                  className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition-colors duration-300 text-center flex items-center justify-center"
                >
                  <FaFileImage className="mr-2" /> Convert to WebP
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="bg-rose-200/20 p-6 rounded-lg shadow-lg flex flex-col"
              variants={itemVariants}
            >
              <FaSpinner className="text-4xl text-rose-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Progressify</h3>
              <p className="flex-grow">
                Optimize your images for progressive loading, enhancing user
                experience.
              </p>
              <motion.div
                className="mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/progressify"
                  className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition-colors duration-300 text-center flex items-center justify-center"
                >
                  <FaSpinner className="mr-2" /> Progressify
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section className="my-16" variants={itemVariants}>
          <h2 className="text-3xl mb-8 text-center font-semibold">
            progressify-react Library
          </h2>
          <div className="bg-rose-200/20 p-8 rounded-lg shadow-lg">
            <p className="mb-4">
              Enhance your React applications with progressive image loading
              using our{" "}
              <Link
                to={"/progressify-react"}
                className="text-rose-500 font-semibold hover:underline"
              >
                progressify-react
              </Link>{" "}
              library. It&apos;s designed to work seamlessly with images
              processed by Sizeable.
            </p>
            <div className="flex justify-center space-x-4 mt-6">
              <motion.a
                href="https://github.com/yourusername/progressify-react"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors duration-300 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="mr-2" /> GitHub
              </motion.a>
              <motion.a
                href="https://www.npmjs.com/package/progressify-react"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors duration-300 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaNpm className="mr-2" /> npm
              </motion.a>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Home;
