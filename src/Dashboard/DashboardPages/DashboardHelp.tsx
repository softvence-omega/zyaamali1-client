import { FiSearch } from "react-icons/fi";
import icon from "../../assets/fi_2676818.png";
import Accordion from "@/components/DashboardHelp/Accordion";

const DashboardHelp = () => {
  return (
    <div className="py-10">
      {/* Heading Section */}
      <div className="mb-8 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-black">
          Help{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D2DB7] to-[#8D4EF4]">
            Centre
          </span>
        </h1>
        <p className="mt-4 text-gray-600 text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
          Lorem ipsum dolor sit amet consectetur. Dictumst at penatibus vel
          sagittis sed sodales. Lacus velit neque donec quis suspendisse id
          imperdiet augue.
        </p>
      </div>


      {/* Search Bar */}
      <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 w-full max-w-3xl mx-auto mt-2">
        <FiSearch className="text-gray-400 text-lg mr-2 shrink-0" />
        <input
          type="text"
          placeholder="Search..."
          className="text-gray-400 placeholder-gray-400 outline-none flex-1 bg-transparent text-sm sm:text-base"
        />
        <div className="w-10 h-10 rounded-full bg-[#ECE4FF] flex items-center justify-center ml-2 shrink-0">
          <img src={icon} alt="filter icon" className="w-5 sm:w-6" />
        </div>
      </div>

      {/* Accordion Section */}
      <div className="mt-10">
        <Accordion />
      </div>
    </div>
  );
};

export default DashboardHelp;
