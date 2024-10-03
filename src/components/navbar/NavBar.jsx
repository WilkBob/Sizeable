import { NavLink } from "react-router-dom";
import NavBurger from "./NavBurger";
import NavAvatar from "./NavAvatar";

const NavBar = () => {
  const items = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Tools", to: "/tools" },
    { label: "progressify-react", to: "/progressify-react" },
  ];
  return (
    <nav className="p-4 text-lg" role="navigation" aria-label="Main Navigation">
      <div className="container max-w-6xl mx-auto flex justify-between items-center">
        <NavLink
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          to={"/"}
          className="text-3xl font-bold hover:text-rose-300"
        >
          Sizeable
        </NavLink>

        <ul className="space-x-4 hidden md:flex items-center">
          {items.map((item) => (
            <li key={item.to}>
              <NavLink
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to={item.to}
                className={({ isActive }) =>
                  `relative block px-4 py-2  font-medium transition-all duration-300 ${
                    isActive
                      ? "text-rose-300"
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavAvatar />
          </li>
        </ul>

        <NavBurger items={items} />
      </div>
    </nav>
  );
};

export default NavBar;
