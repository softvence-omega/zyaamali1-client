
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/hooks/useRedux";
import { logout } from "@/store/Slices/AuthSlice/authSlice";
import CommonWrapper from "@/common/CommonWrapper";
import logo from "../assets/logo.png"


const Navbar: React.FC = () => {
  const link = <>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `font-medium transition-colors duration-300 ease-in-out px-3 py-2 rounded-md
               ${isActive ? 'text-[#8E6EFF] bg-[#F4F1FF]' : 'text-[#4F4D73]'}
               ${isActive ? '' : 'hover:text-gray-600'} ` /* Optional: hover effect for inactive */
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
                ${isActive ? 'text-[#8E6EFF] bg-[#F4F1FF]' : 'text-[#4F4D73]'}
               ${isActive ? '' : 'hover:text-gray-600'} `
        }
      >
        About Us
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          `font-medium transition-colors duration-300 ease-in-out px-3 py-2 rounded-md
               ${isActive ? 'text-[#8E6EFF] bg-[#F4F1FF]' : 'text-[#4F4D73]'}
               ${isActive ? '' : 'hover:text-gray-600'} `
        }
      >
        Services
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `font-medium transition-colors duration-300 ease-in-out px-3 py-2 rounded-md
                ${isActive ? 'text-[#8E6EFF] bg-[#F4F1FF]' : 'text-[#4F4D73]'}
               ${isActive ? '' : 'hover:text-gray-600'} `
        }
      >
        Contact
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/tutorial"
        className={({ isActive }) =>
          `font-medium transition-colors duration-300 ease-in-out px-3 py-2 rounded-md
                ${isActive ? 'text-[#8E6EFF] bg-[#F4F1FF]' : 'text-[#4F4D73]'}
               ${isActive ? '' : 'hover:text-gray-600'} `
        }
      >
        Tutorial
      </NavLink>
    </li></>
  const navigate = useNavigate();
  // const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (

    <CommonWrapper>
      <div className="navbar bg-base-100 shadow-sm my-12 rounded-4xl px-8  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {link}

            </ul>
          </div>
          <Link to={"/"} className="text-xl"><img src={logo} className="w-28 h-12 cursor-pointer" alt="" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {link}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={"/auth/login"} className="cursor-pointer">
            <button className=" px-4 py-2 rounded-4xl bg-gradient-to-r from-[#654FAE] via-[#C0AFFA] to-[#8E6EFF] cursor-pointer">Sign In</button></Link>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default Navbar;
