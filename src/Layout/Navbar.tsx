import React from "react";
import { Link, NavLink} from "react-router-dom";


import CommonWrapper from "@/common/CommonWrapper";
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
 

  

  const link = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-medium transition-colors duration-300 ease-in-out px-3 py-2 rounded-md
            ${isActive ? "text-[#8E6EFF] bg-[#F4F1FF]" : "text-[#4F4D73]"}
            ${isActive ? "" : "hover:text-gray-600"}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `font-medium transition-colors duration-300 ease-in-out px-3 py-2 rounded-md
            ${isActive ? "text-[#8E6EFF] bg-[#F4F1FF]" : "text-[#4F4D73]"}
            ${isActive ? "" : "hover:text-gray-600"}`
          }
        >
          About Us
        </NavLink>
      </li>
      <li className="relative group">
        <NavLink
          to="/services/chat"
          className={({ isActive }) =>
            `font-medium transition-colors duration-300 ease-in-out px-3 py-2 rounded-md
            ${isActive ? "text-[#8E6EFF] bg-[#F4F1FF]" : "text-[#4F4D73]"}
            ${isActive ? "" : "hover:text-gray-600"}`
          }
        >
          Services
        </NavLink>

        {/* Desktop Dropdown on hover */}
        <ul className="absolute mt-8 left-0 z-20 w-48 bg-white shadow-lg rounded-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 ease-in-out pointer-events-none group-hover:pointer-events-auto">
          <li>
            <NavLink
              to="/services/campaign"
              className="block px-4 py-2 text-sm text-[#4F4D73] hover:bg-[#F4F1FF] hover:text-[#8E6EFF]"
            >
              Campaign
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services/copy"
              className="block px-4 py-2 text-sm text-[#4F4D73] hover:bg-[#F4F1FF] hover:text-[#8E6EFF]"
            >
              Content
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services/feedback"
              className="block px-4 py-2 text-sm text-[#4F4D73] hover:bg-[#F4F1FF] hover:text-[#8E6EFF]"
            >
              Feedback
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services/marketing"
              className="block px-4 py-2 text-sm text-[#4F4D73] hover:bg-[#F4F1FF] hover:text-[#8E6EFF]"
            >
              Template
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `font-medium transition-colors duration-300 ease-in-out px-3 py-2 rounded-md
            ${isActive ? "text-[#8E6EFF] bg-[#F4F1FF]" : "text-[#4F4D73]"}
            ${isActive ? "" : "hover:text-gray-600"}`
          }
        >
          Contact
        </NavLink>
      </li>
     
    </>
  );

  // For mobile dropdown menu, flatten the "Services" subitems directly inside the dropdown menu
  const mobileLinks = (
    <>
      <li>
        <NavLink to="/" className="font-medium px-3 py-2 rounded-md text-[#4F4D73] hover:text-[#8E6EFF]">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="font-medium px-3 py-2 rounded-md text-[#4F4D73] hover:text-[#8E6EFF]">
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/services/chat" className="font-medium px-3 py-2 rounded-md text-[#4F4D73] hover:text-[#8E6EFF]">
          Services
        </NavLink>
      </li>
      {/* Insert service sub-links directly in mobile menu */}
      <li>
        <NavLink to="/services/campaign" className="font-medium px-6 py-2 rounded-md text-[#4F4D73] hover:text-[#8E6EFF]">
          Campaign
        </NavLink>
      </li>
      <li>
        <NavLink to="/services/copy" className="font-medium px-6 py-2 rounded-md text-[#4F4D73] hover:text-[#8E6EFF]">
          Content
        </NavLink>
      </li>
      <li>
        <NavLink to="/services/feedback" className="font-medium px-6 py-2 rounded-md text-[#4F4D73] hover:text-[#8E6EFF]">
          Feedback
        </NavLink>
      </li>
      <li>
        <NavLink to="/services/marketing" className="font-medium px-6 py-2 rounded-md text-[#4F4D73] hover:text-[#8E6EFF]">
          Template
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="font-medium px-3 py-2 rounded-md text-[#4F4D73] hover:text-[#8E6EFF]">
          Contact
        </NavLink>
      </li>
      
    </>
  );

  return (
    <div className="absolute top-0 left-0 right-0 z-50 mt-12 shadow-md bg-white rounded-4xl max-w-6xl mx-auto">
      <CommonWrapper>
        <div className="relative h-16">
          <div className="absolute inset-0 flex items-center px-8 rounded-4xl">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow-lg"
                >
                  {mobileLinks}
                </ul>
              </div>
              <Link to={"/"} className="text-xl">
                <img src={logo} className="w-28 h-12 cursor-pointer" alt="Logo" />
              </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{link}</ul>
            </div>

            <div className="navbar-end">
              <Link to={"/auth/login"} className="cursor-pointer">
                <button className="px-4 py-2 rounded-4xl bg-gradient-to-r from-[#654FAE] via-[#C0AFFA] to-[#8E6EFF] hover:brightness-110 transition text-white font-bold">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Navbar;
