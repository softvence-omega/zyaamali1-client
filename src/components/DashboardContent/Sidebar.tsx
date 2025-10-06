/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaSearch } from "react-icons/fa";

type SidebarProps = {
  templateType: string;
  setTemplateType: (val: string) => void;
  selectedPlatforms: string[];
  setSelectedPlatforms: (val: string[]) => void;
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  setStartDate: (date: string) => void; // New prop for start date
  setEndDate: (date: string) => void; // New prop for end date
  resetFilters: () => void; // Function to reset all filters
};

const Sidebar: React.FC<SidebarProps> = ({
  templateType,
  setTemplateType,
  selectedPlatforms,
  setSelectedPlatforms,
  searchTerm,
  setSearchTerm,
  setStartDate,
  setEndDate,
  resetFilters
}) => {
  const platforms = [
    "facebook",
    "google",
    "linkedin",
    "tiktok",
    "instagram",
  ];

  const handlePlatformChange = (platform: any) => {
    setSelectedPlatforms((prev) => {
      const platformSet = new Set(prev); // create a Set for easy add/remove
      if (platformSet.has(platform)) {
        platformSet.delete(platform); // remove if already selected
      } else {
        platformSet.add(platform); // add if not selected
      }
      return Array.from(platformSet); // convert back to array
    });
  };

  return (
    <div className="p-4 md:p-6 w-full md:w-64 lg:w-72 flex-shrink-0 rounded-lg bg-white shadow-md dark:bg-[#1e2939] dark:text-gray-300">
      {/* 🔍 Search */}
      <div className="relative ">
        <input
          type="text"
          placeholder="Search template"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* 🖼 Template Type */}
      <h3 className="text-lg font-semibold text-gray-800 mb-3 dark:text-gray-300">Template Type</h3>
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <input
            type="radio"
            name="templateType"
            value="image"
            checked={templateType === "image"}
            onChange={() => setTemplateType("image")}
            className="form-radio h-4 w-4 text-blue-600"
          />
          Image
        </label>
        <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <input
            type="radio"
            name="templateType"
            value="video"
            checked={templateType === "video"}
            onChange={() => setTemplateType("video")}
            className="form-radio h-4 w-4 text-blue-600 dark:text-gray-300"
          />
          Video
        </label>
      </div>

      {/* 🌐 Platforms */}
      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3 dark:text-gray-300">Platform</h3>
      <div className="space-y-2">
        {platforms.map((platform) => (
          <label key={platform} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <input
              type="checkbox"
              checked={selectedPlatforms.includes(platform)}
              onChange={() => handlePlatformChange(platform)}
              className="form-checkbox h-4 w-4 text-blue-600 rounded "
            />
            {platform.charAt(0).toUpperCase() + platform.slice(1)}
          </label>
        ))}
      </div>

      {/* 📅 Date Filter */}
      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3 dark:text-gray-300">Filter by Date</h3>
      <div className="space-y-2">
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Start Date</label>
          <input
            type="date"
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300">End Date</label>
          <input
            type="date"
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Reset Filters Button */}
      <div className="mt-6">
        <button
          onClick={resetFilters} // Reset all filters
          className="w-full p-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-200"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
