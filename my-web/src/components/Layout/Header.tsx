import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const links = [
    { name: "About", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Competitions", path: "/competitions" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/50 backdrop-blur-md shadow-sm z-50">
      <nav className="max-w-5xl mx-auto flex justify-between items-center py-3 px-6">
        <h1 className="text-xl font-semibold text-blue-600">Pimonput</h1>
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`transition-all ${
                  location.pathname === link.path
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
