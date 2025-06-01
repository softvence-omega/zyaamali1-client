import { FaChartBar } from "react-icons/fa";
import { RiMegaphoneFill } from "react-icons/ri";
import { MdMessage, MdVideoLibrary } from "react-icons/md";
import dashboardHeader from "../../assets/dashboard-header.png";
import { LuLayoutGrid } from "react-icons/lu";
import { BiWallet } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 rounded-[40px] p-4 flex flex-col items-center justify-between w-full lg:w-24 h-full lg:min-h-[600px] shadow-lg">
      <div className="flex flex-col items-center w-full">
        <div className="mb-8 p-3 shadow-lg">
          <img src={dashboardHeader} alt="" />
        </div>

        {/* Navigation Icons */}
        <div className="flex flex-col items-center gap-6 w-full">
          <LuLayoutGrid className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
          <RiMegaphoneFill className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
          <MdVideoLibrary className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
          <FaChartBar className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
          <BiWallet className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
          <MdMessage className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
        </div>
      </div>

      <div className="mt-auto pt-8">
        <img
          src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
          alt="User Avatar"
          className="rounded-full h-10 w-10 border-2"
        />
      </div>
    </div>
  );
};

export default Sidebar;
