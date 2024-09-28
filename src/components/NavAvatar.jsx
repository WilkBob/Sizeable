import { useContext, useState, useRef, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import {
  FaUserCircle,
  FaSignOutAlt,
  FaSignInAlt,
  FaChevronDown,
} from "react-icons/fa";

const NavAvatar = () => {
  const { currentUser, login, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogin = async () => {
    try {
      await login();
    } catch (error) {
      console.error("Failed to log in", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setIsOpen(false);
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div
      className="relative flex items-center space-x-4"
      onKeyDown={handleKeyDown}
    >
      {currentUser ? (
        <div ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100/10"
            aria-haspopup="true"
            aria-expanded={isOpen}
          >
            {currentUser.photoURL ? (
              <img
                src={currentUser.photoURL}
                alt=""
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <FaUserCircle className="w-8 h-8 text-gray-500" />
            )}
            <span>{currentUser.displayName || currentUser.email}</span>
            <FaChevronDown
              className={`w-4 h-4 transition-transform ${
                isOpen ? "transform rotate-180" : ""
              }`}
            />
          </button>
          {isOpen && (
            <div
              className="absolute right-0 mt-2  bg-rose-900 hover:bg-rose-500 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none z-40"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu"
            >
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm   focus:outline-none focus:bg-gray-100"
                role="menuitem"
              >
                <FaSignOutAlt className="inline w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={handleLogin}
          className="flex items-center space-x-1 px-3 py-3 text-sm font-medium text-white bg-rose-500 rounded-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
        >
          <FaSignInAlt className="w-4 h-4" />
          <span>Login</span>
        </button>
      )}
    </div>
  );
};

export default NavAvatar;
