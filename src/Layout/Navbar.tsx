import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import CommonWrapper from "@/common/CommonWrapper";
import logo from "../assets/Adelo_black.svg";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const mobileLinks = (
    <>
      {[
        { to: "/", label: "Home" },
        { to: "/about", label: "About Us" },
        { to: "/services/chat", label: "Services" },
        { to: "/services/campaign", label: "Campaign", indent: true },
        { to: "/services/copy", label: "Content", indent: true },
        { to: "/services/feedback", label: "Feedback", indent: true },
        { to: "/services/marketing", label: "Template", indent: true },
        { to: "/contact", label: "Contact" },
      ].map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.to}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`font-medium py-2 rounded-md text-[#4F4D73] hover:text-[#8E6EFF] ${
              item.indent ? "pl-6" : "px-3"
            }`}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </>
  );

  const desktopLinks = (
    <>
      {[
        { to: "/", label: "Home" },
        { to: "/about", label: "About Us" },
        { to: "/contact", label: "Contact" },
      ].map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.to}
            className={({ isActive }) =>
              `font-medium transition-colors duration-300 ease-in-out px-3 py-2 rounded-md ${
                isActive ? "text-[#8E6EFF] bg-[#F4F1FF]" : "text-[#4F4D73] hover:text-gray-600"
              }`
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}

      <li className="relative group">
        <NavLink
          to="/services/chat"
          className={({ isActive }) =>
            `font-medium transition-colors duration-300 ease-in-out px-3 py-2 rounded-md ${
              isActive ? "text-[#8E6EFF] bg-[#F4F1FF]" : "text-[#4F4D73] hover:text-gray-600"
            }`
          }
        >
          Services
        </NavLink>

        {/* Desktop hover dropdown */}
        <ul className="absolute mt-8 left-0 z-20 w-48 bg-white shadow-lg rounded-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 ease-in-out pointer-events-none group-hover:pointer-events-auto">
          <li>
            <NavLink to="/services/campaign" className="block px-4 py-2 text-sm text-[#4F4D73] hover:bg-[#F4F1FF] hover:text-[#8E6EFF]">
              Campaign
            </NavLink>
          </li>
          <li>
            <NavLink to="/services/copy" className="block px-4 py-2 text-sm text-[#4F4D73] hover:bg-[#F4F1FF] hover:text-[#8E6EFF]">
              Content
            </NavLink>
          </li>
          <li>
            <NavLink to="/services/feedback" className="block px-4 py-2 text-sm text-[#4F4D73] hover:bg-[#F4F1FF] hover:text-[#8E6EFF]">
              Feedback
            </NavLink>
          </li>
          <li>
            <NavLink to="/services/marketing" className="block px-4 py-2 text-sm text-[#4F4D73] hover:bg-[#F4F1FF] hover:text-[#8E6EFF]">
              Template
            </NavLink>
          </li>
        </ul>
      </li>
    </>
  );

  return (
    <div className="absolute top-0 left-0 right-0 z-50 mt-12 shadow-md bg-white rounded-4xl max-w-6xl mx-auto">
      <CommonWrapper>
        <div className="relative h-16">
          <div className="absolute inset-0 flex items-center px-8 rounded-4xl">
            {/* Start */}
            <div className="navbar-start">
              <div className="relative lg:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="btn btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </button>

                {/* Mobile Dropdown */}
                {isMobileMenuOpen && (
                  <ul
                    ref={dropdownRef}
                    className="absolute left-0 mt-3 w-52 p-2 shadow-lg menu menu-sm dropdown-content bg-white rounded-box z-10"
                  >
                    {mobileLinks}
                  </ul>
                )}
              </div>

              <Link to="/" className="text-xl flex flex-row items-center gap-2 ml-2">
                <img src={logo} className="h-18 w-18" alt="Logo" />
              </Link>
            </div>

            {/* Center */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{desktopLinks}</ul>
            </div>

            {/* End */}
            <div className="navbar-end">
              <Link to="/auth/login">
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
