import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

function Navbar() {
  return (
    <div className="p-4 flex justify-around items-center bg-white shadow-md">
      <Link to="/">
        <img src={Logo} alt="Logo" className="h-10" />
      </Link>
      <nav>
        <ul className="flex space-x-8 text-gray-800">
          <li>
            <Link to="/" className="hover:text-blue-500 cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="/product" className="hover:text-blue-500 cursor-pointer">
              Product
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500 cursor-pointer">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
