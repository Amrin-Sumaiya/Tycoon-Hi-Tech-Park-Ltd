import React, { useState } from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME PAGE", to: "home" },
    { name: "ABOUT US", to: "about" },
    { name: "PRODUCTS", to: "products" },
    { name: "WHY CHOOSE US", to: "whychooseus" },
    { name: "PRODUCTS PORTFOLIO", to: "productportfolio" },
    { name: "CONTACT US", to: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <img src={logo} alt="Company Logo" className="h-10 w-auto cursor-pointer" />

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full border border-gray-300 rounded-full px-5 py-2 pr-14 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full p-2">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          <div className="relative cursor-pointer">
            <FaShoppingCart className="text-3xl text-black" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2 cursor-pointer text-black">
            <FaUser className="text-2xl" />
            <span className="text-sm font-medium">Login / Register</span>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-orange-800"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Search Bar - Mobile */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full border border-gray-300 rounded-full px-5 py-2 pr-14 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full p-2">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Bottom Menu - Desktop */}
      <div className="hidden md:block border-t">
        <ul className="max-w-7xl mx-auto px-40 py-3 flex gap-8 font-semibold text-black items-center">
          {navItems.map((item) => (
            <li
              key={item.to}
              className="hover:text-red-600 cursor-pointer whitespace-nowrap"
            >
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white">
          <ul className="flex flex-col text-gray-700 font-semibold">
            {navItems.map((item) => (
              <li
                key={item.to}
                className="px-4 py-3 border-b hover:bg-gray-100 cursor-pointer"
              >
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="px-4 py-3 flex items-center gap-2 cursor-pointer">
              <FaUser />
              Login / Register
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
