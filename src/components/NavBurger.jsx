import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import NavAvatar from "./NavAvatar";

const NavBurger = ({ items, toolsItems, location, isOpen, setIsOpen }) => {
  const burgerRef = useRef(null);
  const dropdownRef = useRef(null);

  const hoverTimeout = useRef(null);

  useEffect(() => {
    const handleMouseEnter = () => {
      clearTimeout(hoverTimeout.current);

      setIsOpen(true);
    };

    const handleMouseLeave = () => {
      hoverTimeout.current = setTimeout(() => {
        setIsOpen(false);
      }, 200); // Adjust the delay as needed
    };

    const burgerElement = burgerRef.current;
    const dropdownElement = dropdownRef.current;

    if (burgerElement) {
      burgerElement.addEventListener("mouseenter", handleMouseEnter);
      burgerElement.addEventListener("mouseleave", handleMouseLeave);
    }

    if (dropdownElement) {
      dropdownElement.addEventListener("mouseenter", handleMouseEnter);
      dropdownElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (burgerElement) {
        burgerElement.removeEventListener("mouseenter", handleMouseEnter);
        burgerElement.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (dropdownElement) {
        dropdownElement.removeEventListener("mouseenter", handleMouseEnter);
        dropdownElement.removeEventListener("mouseleave", handleMouseLeave);
      }
      clearTimeout(hoverTimeout.current);
    };
  }, [burgerRef, dropdownRef, setIsOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="block md:hidden" ref={burgerRef}>
      <button
        className="text-white hover:text-rose-300 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
      </button>
      {isOpen && (
        <div
          className="absolute right-2 mt-2 w-48 origin-top-right rounded-md bg-rose-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
          ref={dropdownRef}
        >
          <ul>
            {items.map((item) => (
              <Link
                onClick={closeMenu}
                key={item.to}
                to={item.to}
                className={`block px-4 py-2 text-sm transition-colors duration-300 first:rounded-t-md last:rounded-b-md ${
                  location.pathname === item.to
                    ? "bg-rose-500 text-white"
                    : "hover:bg-rose-500 hover:text-white"
                }`}
              >
                <li>{item.label}</li>
              </Link>
            ))}

            <li
              className="block w-full px-4 py-2 text-sm transition-colors duration-300 border-t font-bold"
              onClick={() => setIsOpen(false)}
            >
              Tools:
            </li>

            {toolsItems.map((item) => (
              <Link
                onClick={closeMenu}
                key={item.to}
                to={item.to}
                className={`block px-4 py-2 text-sm transition-colors duration-300 hover:bg-rose-500 hover:text-white last:rounded-b-md ${
                  location.pathname === item.to ? "bg-rose-500" : ""
                }`}
              >
                <li>-{item.label}</li>
              </Link>
            ))}
            <li className=" w-full px-4 py-2 text-sm transition-colors duration-300 flex justify-center">
              <NavAvatar />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

NavBurger.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  toolsItems: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  location: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default NavBurger;
