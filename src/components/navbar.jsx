import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-customBlue p-4 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center text-white">
        <a href="/">
          <span className="text-2xl font-bold">EMI</span>
          <span className="text-2xl font-bold ml-1">₹</span>
        </a>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-customBlue md:flex md:relative md:top-0 md:left-0 md:w-auto md:space-x-6 text-white`}
      >
        <li className="cursor-pointer py-2 px-4 border-b md:border-none">
          LOAN CALCULATORS, WIDGETS & RATES
        </li>
        <li className="cursor-pointer py-2 px-4 border-b md:border-none">
          ARTICLES
        </li>
        <li className="cursor-pointer py-2 px-4 border-b md:border-none">
          PRODUCT REVIEWS
        </li>
        <li className="cursor-pointer py-2 px-4 md:border-none">
          NEWS & OPINION
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
