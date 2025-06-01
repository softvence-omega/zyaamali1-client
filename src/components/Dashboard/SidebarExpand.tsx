import { useState } from "react";
import { FaChartBar } from "react-icons/fa";
import { RiMegaphoneFill } from "react-icons/ri";
import { MdMessage, MdVideoLibrary } from "react-icons/md";
import dashboardHeader from "../../assets/dashboard-header.png";
import { LuLayoutGrid } from "react-icons/lu";
import { BiWallet } from "react-icons/bi";

const SidebarExpand = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const navItems = [
    { icon: <LuLayoutGrid className="h-6 w-6" />, label: "Dashboard" },
    { icon: <RiMegaphoneFill className="h-6 w-6" />, label: "Ad Campaign" },
    { icon: <MdVideoLibrary className="h-6 w-6" />, label: "Content Library" },
    { icon: <FaChartBar className="h-6 w-6" />, label: "Analytics & Reports" },
    { icon: <BiWallet className="h-6 w-6" />, label: "Billing & Subscription" },
    { icon: <MdMessage className="h-6 w-6" />, label: "Help & Support" },
  ];

  return (
    <div className="bg-black rounded-[40px] p-6 flex flex-col items-center justify-between w-full lg:w-60 h-full lg:min-h-[600px] shadow-lg">
      <div className="flex flex-col items-start w-full">
        {/* Logo/Header */}
        <div className="mb-8 p-3 shadow-lg flex items-center gap-3 w-full">
          <img
            src={dashboardHeader}
            alt="Dashboard Logo"
            className="h-10 w-10"
          />
          <h1 className="text-2xl font-bold text-white">ADELO</h1>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col gap-6 w-full text-white">
          {navItems.map(({ icon, label }) => (
            <div
              key={label}
              onClick={() => setActiveItem(label)}
              className={`flex items-center gap-3 cursor-pointer transition-colors duration-200 ${
                activeItem === label
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {icon}
              <p className="text-sm font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* User Avatar */}
      <div className="flex items-center gap-3 cursor-pointer hover:text-white text-gray-400 transition-colors duration-200 mt-8 w-full">
        <img
          src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
          alt="User Avatar"
          className="rounded-full h-10 w-10 border-2"
        />
        <p className="text-sm font-medium text-white">Sohag</p>
      </div>
    </div>
  );
};

export default SidebarExpand;
