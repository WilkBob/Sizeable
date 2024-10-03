import { useState } from "react";
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
    { label: "Image Tools", to: "/tools" },
    { label: "progressify-react", to: "/progressify-react" },
  ];
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
          <li>
            <NavAvatar />
          </li>
        </ul>

        <NavBurger
          items={items}
          location={location}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </nav>
  );
};

export default NavBar;
