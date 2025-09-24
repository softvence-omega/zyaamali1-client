/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { FaSearch } from "react-icons/fa";

type SidebarProps = {
  templateType: string;
  setTemplateType: (val: string) => void;
  selectedPlatforms: string[];
  setSelectedPlatforms: (val: string[]) => void;
  searchTerm: string;
  setSearchTerm: (val: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({
  templateType,
  setTemplateType,
  selectedPlatforms,
  // setSelectedPlatforms,
  searchTerm,
  setSearchTerm,
}) => {
  const platforms = [
    "facebook",
    "google",
    "amazon",
    "linkedin",
    "tiktok",
    "youtube",
  ];

  // const handlePlatformChange = (platform: any) => {
  //   setSelectedPlatforms((prev) => {
  //     const platformSet = new Set(prev); // create a Set for easy add/remove
  //     if (platformSet.has(platform)) {
  //       platformSet.delete(platform); // remove if already selected
  //     } else {
  //       platformSet.add(platform); // add if not selected
  //     }
  //     return Array.from(platformSet); // convert back to array
  //   });
  // };

  return (
    <div className="p-4 md:p-6 w-full md:w-64 lg:w-72 flex-shrink-0 rounded-lg bg-white shadow-md">
      {/* 🔍 Search */}
      <div className="relative mb-6">
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
      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        Template Type
      </h3>
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-gray-700">
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
        <label className="flex items-center gap-2 text-gray-700">
          <input
            type="radio"
            name="templateType"
            value="video"
            checked={templateType === "video"}
            onChange={() => setTemplateType("video")}
            className="form-radio h-4 w-4 text-blue-600"
          />
          Video
        </label>
      </div>

      {/* 🌐 Platforms */}
      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
        Platform
      </h3>
      <div className="space-y-2">
        {platforms.map((platform) => (
          <label
            key={platform}
            className="flex items-center gap-2 text-gray-700"
          >
            <input
              type="checkbox"
              checked={selectedPlatforms.includes(platform)}
              // onChange={() => handlePlatformChange(platform)}
              className="form-checkbox h-4 w-4 text-blue-600 rounded"
            />
            {platform.charAt(0).toUpperCase() + platform.slice(1)}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
