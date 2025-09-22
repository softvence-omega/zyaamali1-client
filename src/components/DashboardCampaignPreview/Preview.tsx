import { useState } from 'react';
import mobile from '../../assets/mobile-preview.png'; // Replace with correct paths if you have desktop version too
import { FiEdit2 } from 'react-icons/fi';

const Preview = () => {
  const [view, setView] = useState("mobile");

  return (
    <>
      <div className="p-4 sm:p-6 bg-[#E6E6E8] rounded-xl border border-gray-300 w-full max-w-md md:max-w-lg lg:max-w-md xl:max-w-md mx-auto">
        {/* Heading */}
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">Ad Preview</h1>

        {/* Toggle Buttons aligned right */}
        <div className="flex justify-end mb-4">
          <div className="flex rounded-full overflow-hidden text-sm font-medium shadow-md">
            <button
              onClick={() => setView("mobile")}
              className={`px-4 py-1.5 ${view === "mobile" ? "bg-[#8b5cf6] text-white" : "bg-[#E6E6E8] text-black"
                } transition duration-150`}
            >
              Mobile
            </button>
            <button
              onClick={() => setView("desktop")}
              className={`px-4 py-1.5 ${view === "desktop" ? "bg-[#8b5cf6] text-white" : "bg-[#E6E6E8] text-black"
                } transition duration-150`}
            >
              Desktop
            </button>
          </div>
        </div>

        {/* Image Preview */}
        <div className="w-full">
          <img
            src={view === "mobile" ? mobile : mobile} // Replace with desktop preview image if available
            alt="Ad Preview"
            className="w-full h-auto rounded-md object-contain"
          />
        </div>
      </div>
      <div className='flex justify-center mt-5'>
        <button className="flex items-center gap-2 text-[#8E6EFF] border border-[#8E6EFF] rounded-md px-4 py-1 text-[18px] font-medium hover:bg-[#8E6EFF10] transition duration-150">
          Edit Ad Content <FiEdit2 className="w-6 h-6" />
        </button>
      </div>
    </>
  );
};

export default Preview;