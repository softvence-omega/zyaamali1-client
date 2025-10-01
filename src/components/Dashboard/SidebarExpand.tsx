import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChartBar } from "react-icons/fa";
import { RiMegaphoneFill } from "react-icons/ri";
import {  MdVideoLibrary } from "react-icons/md";
import dashboardHeader from "../../assets/dashboard-header.png";
import { LuLayoutGrid } from "react-icons/lu";
import { BiWallet } from "react-icons/bi";
import user from "../../assets/user.png";
import { MessageCircleMore, Settings } from "lucide-react";
import ThemeToggleButton from "@/context/ThemeToggleButton";

const SidebarExpand = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // New state to handle mobile sidebar toggle
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); // State to handle Settings visibility
  const navigate = useNavigate();

  const navItems = [
    {
      icon: <LuLayoutGrid className="h-6 w-6" />,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <RiMegaphoneFill className="h-6 w-6" />,
      label: "Campaigns",
      path: "/dashboard/campaign",
    },
    {
      icon: <MdVideoLibrary className="h-6 w-6" />,
      label: "Assets",
      path: "/dashboard/content",
    },
    {
      icon: <MessageCircleMore  className="h-6 w-6" />,
      label: "Sterling",
      path: "/dashboard/generate-content",
    },
    {
      icon: <FaChartBar className="h-6 w-6" />,
      label: "Analytics & Reports",
      path: "/dashboard/analytics",
    },
  
    // {
    //   icon: <MdMessage className="h-6 w-6" />,
    //   label: "Help & Support",
    //   path: "/dashboard/help",
    // },
      {
      icon: <Settings  className="h-6 w-6" />,
      label: "Setting",
      path: "/dashboard/subscription",
      group: "Settings", // Grouping under Settings
    },
  ];

  const handleNavClick = (label: string, path: string) => {
    setActiveItem(label);
    navigate(path);
  };

  const handleprof = () => {
    navigate("/dashboard/userprofile");
  };

  // Toggle Sidebar for Mobile
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Toggle Settings visibility
  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div
      className={`bg-[#020817] sticky top-8 rounded-[40px] p-6 flex flex-col items-center justify-between w-full lg:w-60 h-full lg:min-h-[600px] shadow-lg ${
        isSidebarOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex flex-col items-start w-full">
        {/* Logo/Header */}
        <Link to="/">
          <div className="mb-8 p-3 shadow-lg flex items-center gap-3 w-full">
            <img
              src={dashboardHeader}
              alt="Dashboard Logo"
              className="h-10 w-10"
            />
            <h1 className="text-2xl font-bold text-white">ADELO</h1>
          </div>
        </Link>

        {/* Navigation Items */}
        <div className="flex flex-col gap-6 w-full text-white">
          {/* Loop through navigation items */}
          {navItems.map(({ icon, label, path, group }) => {
            // If the item is "Settings", handle its visibility
            if (group === "Settings") {
              return (
                <div key={label}>
                  {/* Settings Section Toggle */}
                  <div
                    onClick={toggleSettings} // Toggle visibility of settings
                    className={`flex items-center gap-3 cursor-pointer transition-colors duration-200 ${
                      activeItem === label
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {icon}
                    <p className="hidden lg:block text-sm font-medium">{label}</p>
                  </div>

                  {/* Settings Dropdown (only show when isSettingsOpen is true) */}
                  {isSettingsOpen && (
                    <div className="ml-6 mt-2">
                      <div
                        onClick={() => handleNavClick("Billing & Subscription", path)}
                        className={`flex items-center gap-3 cursor-pointer transition-colors duration-200 ${
                          activeItem === "Billing & Subscription"
                            ? "text-white"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        <BiWallet className="h-6 w-6" />
                        <p className="hidden lg:block text-sm font-medium">
                          Billing & Subscription
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            // For all other items
            return (
              <div
                key={label}
                onClick={() => handleNavClick(label, path)}
                className={`flex items-center gap-3 cursor-pointer transition-colors duration-200 ${
                  activeItem === label
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {icon}
                <p className="hidden lg:block text-sm font-medium">{label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* User Avatar */}
      <div
        onClick={handleprof}
        className="flex items-center gap-3 cursor-pointer hover:text-white text-gray-400 transition-colors duration-200 mt-8 w-full"
      >
        <img
          src={user}
          alt="User Avatar"
          className="rounded-full w-8 h-8 border-2"
        />
        <p className="hidden lg:block text-sm font-medium  text-white">Sohaggg</p>
      </div>

  
      {/* Sidebar toggle button for mobile */}
      <button
        className="lg:hidden absolute top-4 right-4 bg-[#020817] p-2 rounded-full text-white shadow-lg"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? "Close" : "Open"}
      </button>
    </div>
  );
};

export default SidebarExpand;
