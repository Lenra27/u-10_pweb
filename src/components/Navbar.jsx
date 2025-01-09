import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State untuk toggle menu

  // Fungsi untuk mengubah status open/close menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-600 text-white shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">PEMROGRAMAN WEB</h1>

        {/* Tombol burger untuk mobile */}
        <button onClick={toggleMenu} className="lg:hidden flex flex-col space-y-2 burger-button">
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
        </button>

        {/* Menu navbar */}
        <ul className={`lg:flex space-x-4 ${isOpen ? "flex" : "hidden"} lg:block`}>
          <CustomLink to="/home">Home</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
          <CustomLink to="/about">About</CustomLink>
        </ul>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li>
      <Link to={to} {...props} className={`px-4 py-2 rounded-md transition ${isActive ? "bg-white text-gray-600 font-semibold" : "text-white hover:bg-gray-500"}`}>
        {children}
      </Link>
    </li>
  );
}
