import { Link, NavLink } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";

export default function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F7F3E9]/90 backdrop-blur-md border-b border-[#D8CBB8]">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
        >
          <div className="w-12 h-12 rounded-full bg-[#2F5D50] flex items-center justify-center shadow-md">
            <span className="text-[#F7F3E9] text-xl font-bold">
              F
            </span>
          </div>

          <div>
            <h1 className="font-bold text-lg text-[#2F5D50]">
              Fatema
            </h1>
            <p className="text-xs text-[#8B6B4A] flex items-center gap-1">
              <FaLeaf />
              Portfolio
            </p>
          </div>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative font-medium transition-all duration-300 ${
                    isActive
                      ? "text-[#2F5D50]"
                      : "text-[#3E3228] hover:text-[#2F5D50]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    <span
                      className={`absolute left-0 -bottom-2 h-0.5 bg-[#8B6B4A] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="hidden md:flex items-center px-5 py-2.5 rounded-full bg-[#2F5D50] text-[#F7F3E9] hover:bg-[#25493F] transition"
        >
          Let's Talk
        </Link>
      </nav>
    </header>
  );
}