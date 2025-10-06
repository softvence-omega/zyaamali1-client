import { FiSearch } from "react-icons/fi";
import icon from "../../assets/fi_2676818.png";
import Accordion from "@/components/DashboardHelp/Accordion";
import elipse from "../../assets/Ellipse 5.png";
import TopBar from "@/utils/TopBar";

const DashboardHelp = () => {
  const breadcrumbPaths = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "Support", link: "/dashboard/help" },
  ];

  return (
    <div className="py-10 dark:bg-[#0b1220] transition-colors duration-300">
      <TopBar paths={breadcrumbPaths} />

      {/* Heading Section */}
      <div className="mb-8 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-gray-100">
          Help{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D2DB7] to-[#8D4EF4]">
            Centre
          </span>
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
          Lorem ipsum dolor sit amet consectetur. Dictumst at penatibus vel
          sagittis sed sodales. Lacus velit neque donec quis suspendisse id
          imperdiet augue.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-white dark:bg-[#1e2939] border border-gray-300 dark:border-gray-600 rounded-full px-4 py-2 w-full max-w-3xl mx-auto mt-2 shadow-sm dark:shadow-none">
        <FiSearch className="text-gray-400 dark:text-gray-400 text-lg mr-2 shrink-0" />
        <input
          type="text"
          placeholder="Search..."
          className="text-gray-600 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500 outline-none flex-1 bg-transparent text-sm sm:text-base"
        />
        <div className="w-10 h-10 rounded-full bg-[#ECE4FF] dark:bg-[#2f3a54] flex items-center justify-center ml-2 shrink-0">
          <img src={icon} alt="filter icon" className="w-5 sm:w-6" />
        </div>
      </div>

      {/* Accordion Section */}
      <div className="mt-10">
        <Accordion />
      </div>

      {/* Help Form Section */}
      <div className="mt-12 relative bg-[#010610] dark:bg-[#111827] overflow-hidden rounded-2xl">
        {/* Positioned Ellipse Image */}
        <img
          src={elipse}
          alt=""
          className="absolute left-0 object-contain opacity-80 dark:opacity-50"
        />

        <h2 className="text-xl sm:text-4xl lg:text-7xl font-semibold mb-4 text-center text-white mt-24">
          Need More Help?
        </h2>

        {/* Form Section */}
        <div className="mt-12 max-w-3xl mx-auto bg-white dark:bg-[#1e2939] border border-gray-200 dark:border-gray-600 rounded-lg p-6 shadow-sm dark:shadow-none mb-24">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8D4EF4] text-sm bg-transparent text-gray-700 dark:text-gray-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject of your query"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8D4EF4] text-sm bg-transparent text-gray-700 dark:text-gray-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Details
              </label>
              <textarea
                placeholder="Describe your issue or question..."
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8D4EF4] text-sm resize-none bg-transparent text-gray-700 dark:text-gray-200"
              ></textarea>
            </div>

            <button
              type="submit"
              className="h-[52px] my-2 lg:my-0 rounded-[48px] lg:px-[40px] py-[10px] text-white bg-gradient-to-r from-[#654FAE] via-[#A891FB] to-[#8E6EFF] flex items-center justify-center gap-[10px] hover:opacity-90 transition-all duration-200"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashboardHelp;
