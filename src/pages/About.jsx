import { motion } from "framer-motion";
import {
  FaImage,
  FaFileImage,
  FaSpinner,
  FaCode,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import AboutHelmet from "./Helmets/AboutHelmet";

const About = () => {
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
      className=" text-lg flex flex-col container mx-auto max-w-full md:max-w-6xl p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AboutHelmet />
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        variants={itemVariants}
      >
        About Sizeable
      </motion.h1>

      <motion.section className="mb-8" variants={itemVariants}>
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaLightbulb className="mr-2 text-rose-500" /> Our Goal
        </h2>
        <p className="mb-4">
          At Sizeable, our mission is to make image processing free, simple, and
          accessible to everyone. We believe that optimizing images
          shouldn&apos;t be a complex or expensive task, but a straightforward
          process that enhances the web experience for all.
        </p>
      </motion.section>

      <motion.section className="mb-8" variants={itemVariants}>
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaRocket className="mr-2 text-rose-500" /> Our Tools
        </h2>
        <ul className="list-none pl-6">
          <motion.li className="mb-4" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <FaFileImage className="mr-2 " /> WebP Conversion
              <Link
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                to="/resize"
                className=" hover:underline ml-2 text-lime-300 hover:text-lime-200"
              >
                {" -Try it!"}
              </Link>
            </h3>
            <p>
              Convert your images to the WebP format, which provides superior
              compression and quality characteristics compared to traditional
              formats like JPEG or PNG.
            </p>
          </motion.li>
          <motion.li className="mb-4" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <FaImage className="mr-2 " /> Image Resizing
              <Link
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                to="/resize"
                className=" hover:underline ml-2 text-lime-300 hover:text-lime-200"
              >
                {" -Try it!"}
              </Link>
            </h3>
            <p>
              Easily resize your images to optimal dimensions, reducing file
              size without compromising on quality.
            </p>
          </motion.li>
          <motion.li className="mb-4" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <FaSpinner className="mr-2 " /> Progressify
              <Link
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                to="/resize"
                className=" hover:underline ml-2 text-lime-300 hover:text-lime-200"
              >
                {" -Try it!"}
              </Link>
            </h3>
            <p>
              Our progressive image tool creates optimized versions of your
              images, ready for use with <code>progressify-react</code>.
            </p>
          </motion.li>
        </ul>
      </motion.section>

      <motion.section className="mb-8" variants={itemVariants}>
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaCode className="mr-2 text-rose-500" /> The
          <code className="mx-3 font-extralight"> progressify-react </code>
          Library
          <Link
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            to="/progressify-react"
            className=" hover:underline ml-2 text-lime-300 hover:text-lime-200"
          >
            {" -Get Started!"}
          </Link>
        </h2>
        <p className="mb-4">
          Enhance your React applications with progressive image loading using
          the <code>progressify-react</code> library. This library allows you to
          easily integrate progressive images into your React app, improving
          performance and user experience.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <motion.li variants={itemVariants}>
            Easy integration with React applications
          </motion.li>
          <motion.li variants={itemVariants}>
            Support for lazy loading, improving page load times
          </motion.li>
          <motion.li variants={itemVariants}>
            Smooth transitions from low-resolution placeholders to full-quality
            images
          </motion.li>
          <motion.li variants={itemVariants}>
            Customizable styling to fit your design needs (works like an{" "}
            {`<img>`}, use your own classNames)
          </motion.li>
        </ul>
        <p className="my-2">
          With Progressify, you can ensure your images load quickly and
          efficiently, providing an optimal user experience across all devices
          and network conditions.
        </p>
      </motion.section>

      <motion.section variants={itemVariants}>
        <p className="italic text-gray-600">
          Join us in our mission to make the web faster, more efficient, and
          more accessible through better image optimization. Start using our
          free tools today and experience the difference!
        </p>
      </motion.section>
    </motion.div>
  );
};

export default About;
