import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaGithub } from "react-icons/fa";
import { PiHeartStraightFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="backdrop-blur-[1px] text-rose-50 py-6 mt-8">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-4 flex space-x-4 justify-center">
          <Link
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            to="/"
            className="text-rose-50 hover:text-white flex items-center space-x-1"
          >
            <FaHome />
            <span>Home</span>
          </Link>
          <Link
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            to="/about"
            className="text-rose-50 hover:text-white flex items-center space-x-1"
          >
            <FaInfoCircle />
            <span>About</span>
          </Link>
          <a
            href="https://github.com/wilkbob/sizeable"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-50 hover:text-white flex items-center space-x-1"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        </div>
        <div className="flex justify-center items-center py-4">
          <a
            href="https://bob-the-dev.web.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-rose-50 hover:text-rose-400 transition duration-300"
          >
            <span>Made with</span>
            <PiHeartStraightFill className="text-rose-500 animate-pulse" />
            <span>by Bob</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
