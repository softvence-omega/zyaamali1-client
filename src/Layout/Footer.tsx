import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logoo.svg";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f8f9fb] text-gray-700 px-6 md:px-16 pt-12 pb-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 text-sm">
        {/* Logo and Description */}
        <div className="space-y-4">
          <Link to={"/"} className="text-xl flex flex-row items-center gap-2 ">
            <img
              src={logo}
              className="w-[20px] h-[20px] cursor-pointer"
              alt="Logo"
            />
            <h1 className="font-bold pop">adelo</h1>
          </Link>
          <p className="text-sm text-gray-500">
            Smarter, faster marketing — powered by AI. Automate ad campaigns,
            generate content, and optimize performance with ease.
          </p>
          <div className="flex gap-4 pt-2 text-xl text-[#6c63ff]">
            <a href="#" className="hover:text-black">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-black">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-black">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-black">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Platform */}
        <div>
          <h6 className="font-semibold mb-3 text-gray-800">Platform</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-black">
                How It Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h6 className="font-semibold mb-3 text-gray-800">Resources</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-black">
                Help Center
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="font-semibold mb-3 text-gray-800">Company</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-black">
                About Us
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-black">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="font-semibold mb-3 text-gray-800">Legal</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-black">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Cookie Preferences
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
