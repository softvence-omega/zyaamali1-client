import { FaChartBar } from "react-icons/fa";
import { RiMegaphoneFill } from "react-icons/ri";
import { MdMessage, MdVideoLibrary } from "react-icons/md";
import dashboardHeader from "../../assets/dashboard-header.png";
import { LuLayoutGrid } from "react-icons/lu";
import { BiWallet } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import user from "../../assets/user.png"
const Sidebar = () => {
  const navigate = useNavigate();
  const handleprof = () => {
    navigate("/dashboard/userprofile");
  };

  return (
    <div className="bg-[#020817] rounded-[40px] p-4 flex flex-col items-center justify-between w-full lg:w-24 h-full lg:min-h-[600px] shadow-lg">
      <div className="flex flex-col items-center w-full">
        <Link to="/">
          <div className="mb-8 p-3 shadow-lg">
            <img src={dashboardHeader} alt="" />
          </div>
        </Link>

        {/* Navigation Icons */}
        <div className="flex flex-col items-center gap-6 w-full">
          <Link to="/dashboard">
            <LuLayoutGrid className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
          </Link>
          <Link to="/dashboard/campaign">
            <RiMegaphoneFill className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
          </Link>
          <Link to="/dashboard/content">
            <MdVideoLibrary className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
          </Link>
          <Link to="/dashboard/analytics">
            <FaChartBar className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
          </Link>
          <Link to="/dashboard/subscription">
            <BiWallet className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
          </Link>
          <Link to="/dashboard/help">
            <MdMessage className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
          </Link>
        </div>
      </div>

      <div onClick={handleprof} className="mt-auto pt-4 md:pt-8">
        <img
          src={user}
          alt="User Avatar"
          className="rounded-full w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 border-2 border-gray-600 hover:border-white transition-colors duration-200"
        />
      </div>
    </div>
  );
};

export default Sidebar;
