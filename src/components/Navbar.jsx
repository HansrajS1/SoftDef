import React, { useState } from "react";
import logo from "../assets/icons/Logo.png";
import Search from "../assets/icons/Search.png";
import Bag from "../assets/icons/Bag.png";
import {Menu, X, ChevronDown } from "lucide-react";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Plants Type", href: "#types", dropdown: true },
    { name: "More", href: "#store" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-[#182015] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl"><img src={logo} alt="FloraVision Logo" className="h-8 w-8" /></span>
            <span className="text-xl font-bold text-gray-100">
              FloraVision.
            </span>
          </a>
          <nav style={{ fontFamily: "'Indie Flower', cursive" }} className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center text-sm font-medium transition duration-150 ${
                  item.name === "Home"
                    ? "text-gray-300"
                    : "text-gray-300 hover:text-green-400"
                }`}
              >
                {item.name}
                {item.dropdown && (
                  <ChevronDown size={16} className="ml-1 text-gray-400" />
                  
                )}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:text-green-400 transition">
              <img src={Search} alt="Search" className="h-5 w-5" />
            </button>
            <button className="p-2 hover:text-green-400 transition">
              <img src={Bag} alt="Bag" className="h-5 w-5" />
            </button>
            <button className="p-2 hover:text-green-400 transition">
              <div className=" w-[31px] my-2 bg-white h-[4px] rounded"></div>
              <div className="mx-2 w-[23px] bg-white h-[4px] rounded"></div>
            </button>
            <button
              className="md:hidden p-2 text-gray-300 hover:text-green-400 transition"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-[#2a302a] border-t border-gray-700">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={toggleMenu}
                className="block px-4 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-green-400 transition"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
