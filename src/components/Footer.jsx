import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaGithub,
  FaUser,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="backdrop-blur-[1px] text-rose-50 py-6 mt-8">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-4 flex space-x-4 justify-center">
          <Link
            to="/"
            className="text-rose-50 hover:text-white flex items-center space-x-1"
          >
            <FaHome />
            <span>Home</span>
          </Link>
          <Link
            to="/about"
            className="text-rose-50 hover:text-white flex items-center space-x-1"
          >
            <FaInfoCircle />
            <span>About</span>
          </Link>
          <Link
            to="/contact"
            className="text-rose-50 hover:text-white flex items-center space-x-1"
          >
            <FaEnvelope />
            <span>Contact</span>
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
          <a
            href="https://bob-the-dev.web.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-50 hover:text-white flex items-center space-x-1"
          >
            <FaUser />
            <span>Portfolio</span>
          </a>
        </div>
        <div className="text-sm text-center">
          Made with <span className="text-red-500">&hearts;</span> by Bob
        </div>
      </div>
    </footer>
  );
};

export default Footer;
