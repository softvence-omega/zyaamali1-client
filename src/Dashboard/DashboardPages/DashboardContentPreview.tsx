"use client";
import { FiDownload, FiShare, FiChevronDown } from "react-icons/fi";
import { IoArrowBack } from "react-icons/io5";

import orange from "../../assets/Orange.png";
import media1 from "../../assets/media-1.png";
import media2 from "../../assets/media-2.png";
import media3 from "../../assets/media-3.png";
import media4 from "../../assets/media-4.png";
import group from "../../assets/Group.png";
import picicon from "../../assets/picicon.png";

export default function DashboardContentPreview() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-200">
        <button
          onClick={() => window.history.back()}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-400 text-T-50 hover:bg-blue-500 transition"
          aria-label="Go back"
        >
          <IoArrowBack className="w-5 h-5" />
        </button>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            className="flex items-center gap-2 bg-gradient-to-r from-[#654FAE] via-[#A891FB] to-[#654FAE] text-white font-bold px-4 py-2 rounded-2xl hover:opacity-90 transition"
            aria-label="Share button"
          >
            <FiShare className="w-5 h-5" />
            Share
          </button>
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-[#654FAE] via-[#A891FB] to-[#654FAE] text-white hover:opacity-90 transition"
            aria-label="Download button"
          >
            <FiDownload className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-12">
        {/* Sidebar */}
        <aside className="bg-white p-6 sm:p-8 lg:p-12 lg:col-span-4 border-gray-200 space-y-8 max-w-full">
          {/* Prompt */}
          <section>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Prompt</h3>
            <textarea
              placeholder="Create an engaging ad copy for a summer sale offering 40% off."
              className="w-full text-sm text-gray-700 border border-gray-300 bg-gray-100 rounded-md px-3 py-2 h-48 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </section>

          {/* Status */}
          <section>
            <div className="flex items-center justify-around mb-3 w-full max-w-xs bg-gray-100 p-2 rounded">
              {/* Square h1 */}
              <h1 className="text-T-800">Square</h1>

              {/* Checkbox with label */}
              <label className="flex items-center gap-1 text-xs text-gray-800 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-purple-600 w-3.5 h-3.5"
                />
                1:1
              </label>

              {/* Dropdown icon */}
              <FiChevronDown className="w-4 h-4 text-gray-600" />
            </div>

            <button className="flex flex-row items-center justify-center gap-4 px-4 py-2 rounded-full text-sm transition bg-gradient-to-r from-[#654FAE] via-[#A891FB] to-[#654FAE] text-T-50 font-bold w-full max-w-xs">
              Re Generate <img src={group} alt="" />
            </button>
          </section>

          {/* Reference */}
          <section className="p-6 bg-T-300 rounded-2xl">
            <h3 className="text-sm text-gray-600 mb-3 flex flex-row gap-1 items-center">
              <img src={picicon} alt="" />
              Reference
            </h3>
            <div className="flex flex-col items-center justify-center gap-1">
              <button className="px-6 py-3 bg-gradient-to-r from-[#654FAE] via-[#A891FB] to-[#654FAE] text-T-50 font-bold rounded-full text-sm transition w-full max-w-xs">
                Add reference image
              </button>
              <button className="px-8 py-3 border border-blue-500 text-purple-700 rounded-full text-sm transition w-full max-w-xs mt-2">
                Reference upload
              </button>
            </div>
          </section>
        </aside>

        {/* Main Content */}
        <section className="lg:col-span-8 flex flex-col w-full px-4 sm:px-8 lg:px-12">
          {/* Canvas */}
          <div className="flex items-center justify-center px-4 sm:px-8 py-8 sm:py-12 bg-[#020817]">
            <img
              src={orange}
              alt="Orange Banner"
              className="max-w-full h-auto"
            />
          </div>

          {/* My Media Section */}
          <div className="bg-gray-900 p-4 sm:p-6 w-full overflow-x-auto">
            <h2 className="text-white text-xl font-semibold mb-4">My Media</h2>
            <div className="flex flex-col gap-4">
              {/* Row 1 */}
              <div className="grid grid-cols-6 gap-2 sm:gap-4 w-full min-w-[300px]">
                {/* First 3 normal images */}
                <div className="h-36 rounded-lg overflow-hidden bg-gray-800 col-span-1">
                  <img
                    src={media1}
                    alt="Media 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-36 rounded-lg overflow-hidden bg-gray-800 col-span-1">
                  <img
                    src={media2}
                    alt="Media 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-36 rounded-lg overflow-hidden bg-gray-800 col-span-1">
                  <img
                    src={media3}
                    alt="Media 3"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Last image: fill the rest of the width, same height */}
                <div className="h-36 rounded-lg overflow-hidden bg-gray-800 col-span-3">
                  <img
                    src={media4}
                    alt="Media 4"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-6 gap-2 sm:gap-4 w-full min-w-[300px]">
                {/* First 3 normal images */}
                <div className="h-36 rounded-lg overflow-hidden bg-gray-800 col-span-1">
                  <img
                    src={media1}
                    alt="Media 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-36 rounded-lg overflow-hidden bg-gray-800 col-span-1">
                  <img
                    src={media2}
                    alt="Media 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-36 rounded-lg overflow-hidden bg-gray-800 col-span-1">
                  <img
                    src={media3}
                    alt="Media 3"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Last image: fill the rest of the width, same height */}
                <div className="h-36 rounded-lg overflow-hidden bg-gray-800 col-span-3">
                  <img
                    src={media4}
                    alt="Media 4"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-6 gap-2 sm:gap-4 w-full min-w-[300px]">
                {/* First 3 normal images */}
                <div className="h-36 rounded-lg overflow-hidden bg-gray-800 col-span-1">
                  <img
                    src={media1}
                    alt="Media 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-36 rounded-lg overflow-hidden bg-gray-800 col-span-1">
                  <img
                    src={media2}
                    alt="Media 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-36 rounded-lg overflow-hidden bg-gray-800 col-span-1">
                  <img
                    src={media3}
                    alt="Media 3"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Last image: fill the rest of the width, same height */}
                <div className="h-36 rounded-lg overflow-hidden bg-gray-800 col-span-3">
                  <img
                    src={media4}
                    alt="Media 4"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
