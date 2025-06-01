import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/footer_logo.png";
import adelo from "../assets/ADELO.png"

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f8f9fb] text-gray-700 px-6 md:px-16 pt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 text-sm">

        {/* Logo and Description */}
        <div className="space-y-4">
          <img src={logo} alt="Footer Logo" className="w-24 h-auto" />
          <p className="text-sm text-gray-500">
            Smarter, faster marketing — powered by AI. Automate ad campaigns,
            generate content, and optimize performance with ease.
          </p>
          <div className="flex gap-4 pt-2 text-xl text-[#6c63ff]">
            <a href="#" className="hover:text-black"><FaFacebook /></a>
            <a href="#" className="hover:text-black"><FaTwitter /></a>
            <a href="#" className="hover:text-black"><FaInstagram /></a>
            <a href="#" className="hover:text-black"><FaLinkedin /></a>
          </div>
        </div>

        {/* Platform */}
        <div>
          <h6 className="font-semibold mb-3 text-gray-800">Platform</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black">How It Works</a></li>
            <li><a href="#" className="hover:text-black">Features</a></li>
            <li><a href="#" className="hover:text-black">Pricing</a></li>
            <li><a href="#" className="hover:text-black">Templates Library</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h6 className="font-semibold mb-3 text-gray-800">Resources</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black">Help Center</a></li>
            <li><a href="#" className="hover:text-black">Blog</a></li>
            <li><a href="#" className="hover:text-black">Case Studies</a></li>
            <li><a href="#" className="hover:text-black">API Documentation</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="font-semibold mb-3 text-gray-800">Company</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black">About Us</a></li>
            <li><a href="#" className="hover:text-black">Careers</a></li>
            <li><a href="#" className="hover:text-black">Contact</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="font-semibold mb-3 text-gray-800">Legal</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black">Terms of Service</a></li>
            <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-black">Cookie Preferences</a></li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center "><img src={adelo} alt="" /></div>
    </footer>
  );
};

export default Footer;
