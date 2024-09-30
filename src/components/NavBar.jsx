import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavBurger from "./NavBurger";
import NavAvatar from "./NavAvatar";

const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const items = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
  ];

  const toolsItems = [
    { label: "Image Resizer", to: "/resize" },
    { label: "WebP Converter", to: "/webp" },
    { label: "Progressify", to: "/progressify" },
    { label: "progressify-react", to: "/progressify-react" },
  ];

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
      }, 400); // Adjust the delay as needed
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

  return (
    <nav className="p-4 text-lg" role="navigation" aria-label="Main Navigation">
      <div className="container max-w-6xl mx-auto flex justify-between items-center">
        <Link
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          to={"/"}
          className="text-xl font-bold hover:text-rose-300"
        >
          Sizeable
        </Link>

        <ul className="space-x-4 hidden md:flex items-center">
          {items.map((item) => (
            <li key={item.to}>
              <Link
                onClick={closeMenu}
                to={item.to}
                className={`px-3 py-2 rounded-md transition-colors duration-300 ${
                  location.pathname === item.to
                    ? "text-white bg-rose-500"
                    : "text-white hover:text-rose-300"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className={`relative`} ref={burgerRef}>
            <button
              className={`inline px-3 py-2 rounded-md transition-colors duration-200 text-white hover:text-rose-300${
                !isOpen &&
                (location.pathname === toolsItems[0].to ||
                  location.pathname === toolsItems[1].to ||
                  location.pathname === toolsItems[2].to)
                  ? " bg-rose-500"
                  : isOpen
                  ? " bg-rose-500/50"
                  : ""
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              Tools
            </button>
            {isOpen && (
              <ul
                ref={dropdownRef}
                className="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-rose-100 rounded-md bg-rose-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
              >
                {toolsItems.map((item, index) => (
                  <Link
                    key={item.to}
                    onClick={closeMenu}
                    to={item.to}
                    className={`block px-4 py-2 text-sm transition-colors duration-300  hover:bg-rose-500 hover:text-white ${
                      index === 0
                        ? "rounded-t-md"
                        : index === toolsItems.length - 1
                        ? "rounded-b-md"
                        : ""
                    }
                        ${
                          location.pathname === item.to
                            ? "bg-rose-500 text-white"
                            : ""
                        }`}
                  >
                    <li>{item.label}</li>
                  </Link>
                ))}
              </ul>
            )}
          </li>
          <li>
            <NavAvatar />
          </li>
        </ul>

        <NavBurger
          items={items}
          toolsItems={toolsItems}
          location={location}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </nav>
  );
};

export default NavBar;
