import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/Adelo_black.svg";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f8f9fb] text-gray-700 px-6 md:px-16 pt-12 pb-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 text-sm">
        {/* Logo and Description */}

        <div className="space-y-4">
          <img src={logo} alt="Footer Logo" className="w-24 h-auto" />
          <p className="text-sm">Smarter, faster marketing — powered by AI. Automate ad campaigns, generate content, and optimize performance with ease.</p>
          <div className="flex gap-4 pt-2 text-xl text-[#6c63ff]">

            <a href="https://www.instagram.com/adelo.ai?igsh=MTQzejVsamVrZmt4ZQ==" className="hover:text-black text-4xl" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/adeloai/" className="hover:text-black text-4xl" target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Platform */}
        <div>
          <h6 className="font-semibold mb-3 text-gray-800">Platform</h6>
          <ul className="space-y-2">
            <li>
              <Link to="/#how-it-works" className="hover:text-black">
                How It Works
              </Link>
            </li>
            <li>
              <Link to='/services/campaign' className="hover:text-black">
                Services
              </Link>
            </li>
            <li>
              <Link to='/#pricing' className="hover:text-black">
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h6 className="font-semibold mb-3 text-gray-800">Resources</h6>
          <ul className="space-y-2">
            <li>
              <Link to='/dashboard/help' className="hover:text-black">
                Help Center
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="font-semibold mb-3 text-gray-800">Company</h6>
          <ul className="space-y-2">
            <li>
              <Link to='/about' className="hover:text-black">About Us</Link>
            </li>
            <li>
              <Link to='/contact' className="hover:text-black">Contact</Link>
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
