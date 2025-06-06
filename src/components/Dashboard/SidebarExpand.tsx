import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChartBar } from "react-icons/fa";
import { RiMegaphoneFill } from "react-icons/ri";
import { MdMessage, MdVideoLibrary } from "react-icons/md";
import dashboardHeader from "../../assets/dashboard-header.png";
import { LuLayoutGrid } from "react-icons/lu";
import { BiWallet } from "react-icons/bi";
import user from "../../assets/user.png";
const SidebarExpand = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const navigate = useNavigate();

  const navItems = [
    {
      icon: <LuLayoutGrid className="h-6 w-6" />,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <RiMegaphoneFill className="h-6 w-6" />,
      label: "Ad Campaign",
      path: "/dashboard/campaign",
    },
    {
      icon: <MdVideoLibrary className="h-6 w-6" />,
      label: "Content Library",
      path: "/dashboard/content",
    },
    {
      icon: <FaChartBar className="h-6 w-6" />,
      label: "Analytics & Reports",
      path: "/dashboard/analytics",
    },
    {
      icon: <BiWallet className="h-6 w-6" />,
      label: "Billing & Subscription",
      path: "/dashboard/subscription", // You might need to create this route if not present
    },
    {
      icon: <MdMessage className="h-6 w-6" />,
      label: "Help & Support",
      path: "/dashboard/help", // You might need to create this route if not present
    },
  ];

  const handleNavClick = (label: string, path: string) => {
    setActiveItem(label);
    navigate(path);
  };
  const handleprof = () => {
    navigate("/dashboard/userprofile");
  };

  return (
    <div className="bg-[#020817] sticky top-8 rounded-[40px] p-6 flex flex-col items-center justify-between w-full lg:w-60 h-full lg:min-h-[600px] shadow-lg">
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
          {navItems.map(({ icon, label, path }) => (
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
              <p className="text-sm font-medium">{label}</p>
            </div>
          ))}
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
          className="rounded-full h-10 w-10 border-2"
        />
        <p className="text-sm font-medium text-white">Sohag</p>
      </div>
    </div>
  );
};

export default SidebarExpand;
