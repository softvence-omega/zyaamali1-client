// src/components/ContentLibrary/ContentHeader.tsx
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Assuming react-icons
import img from "../../assets/dash-content.png"; // Make sure this path is correct
import img1 from "../../assets/11.png";
import img2 from "../../assets/12.png";
import img3 from "../../assets/13.png";
import img4 from "../../assets/14.png";
import img5 from "../../assets/15.png";
import img6 from "../../assets/16.png";
import img7 from "../../assets/17.png";
import img8 from "../../assets/18.png";
import img9 from "../../assets/19.png";
import img10 from "../../assets/20.png";
import img11 from "../../assets/21.png";
import img12 from "../../assets/22.png";
import img13 from "../../assets/23.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const ContentHeader: React.FC = () => {
  const navigate = useNavigate();

  const inspirationImages = [
    { id: 1, src: img1, alt: "Inspiration Image 1" },
    { id: 2, src: img2, alt: "Inspiration Image 2" },
    { id: 3, src: img3, alt: "Inspiration Image 3" },
    { id: 4, src: img4, alt: "Inspiration Image 4" },
    { id: 5, src: img5, alt: "Inspiration Image 5" },
    { id: 6, src: img6, alt: "Inspiration Image 6" },
    { id: 7, src: img7, alt: "Inspiration Image 7" },
    { id: 8, src: img8, alt: "Inspiration Image 8" },
    { id: 9, src: img9, alt: "Inspiration Image 9" },
    { id: 10, src: img10, alt: "Inspiration Image 9" },
    { id: 11, src: img11, alt: "Inspiration Image 9" },
    { id: 12, src: img12, alt: "Inspiration Image 9" },
    { id: 13, src: img13, alt: "Inspiration Image 9" },
    { id: 14, src: img12, alt: "Inspiration Image 9" },
    { id: 15, src: img1, alt: "Inspiration Image 9" },
    { id: 16, src: img12, alt: "Inspiration Image 9" },
    { id: 17, src: img9, alt: "Inspiration Image 9" },
    { id: 18, src: img8, alt: "Inspiration Image 9" },
    { id: 19, src: img4, alt: "Inspiration Image 9" },
    { id: 20, src: img1, alt: "Inspiration Image 9" },
  ];
  const [contentType, setContentType] = useState("Image");
  const [prompt, setPrompt] = useState("");
  const [aspectRatio, setAspectRatio] = useState("1:1"); // For the "1:1" dropdown

  const handleGenerate = async () => {
    console.log("Content Type:", contentType);
    console.log("Prompt:", prompt);
    console.log("Aspect Ratio:", aspectRatio);

    try {
      let response;

      if (contentType === "Image") {
        response = await axios.post(
          "http://localhost:5000/api/v1/generate-image",
          {
            prompt,
            aspectRatio,
          }
        );
        console.log("image", response);
      } else if (contentType === "Video") {
        response = await axios.post(
          "http://localhost:5000/api/v1/generate-video",
          {
            prompt,
            aspectRatio,
          }
        );
        console.log("video", response);
      } else {
        console.warn("⚠️ Unsupported content type:", contentType);
        return;
      }

      console.log("✅ API Response:", response.data);

      // Example: navigate to preview page with response
      // navigate("/contentpreview", { state: { data: response.data } });
    } catch (error: any) {
      console.error("❌ Error generating content:", error);
    }
  };

  const handleGeneratew = () => {
    navigate("/contentpreview");
  };

  return (
    <div className="relative mb-8 w-full">
      {/* Background Image */}
      <img
        src={img}
        className="absolute -top-14 inset-0 w-full h-full object-cover object-center z-0 rounded-b-3xl"
        alt="Content Library Background"
      />

      {/* Overlay to darken image slightly and make text more readable */}
      <div className="absolute inset-0  opacity-40 z-0 rounded-b-3xl"></div>

      {/* Content for the header (title and input bar) */}
      <div className="relative z-10 h-full p-4 pb-12 sm:p-6 sm:pb-16 md:p-8 md:pb-20">
        <div className="flex justify-center">
          <h1
            className="bg-gradient-to-r from-[#654FAE] via-[#C0AFFA] to-[#8E6EFF] bg-clip-text                       
          text-transparent                      
          inline-block text-4xl md:text-6xl text-center"
          >
            Content Library
          </h1>
        </div>

        {/* Main input and buttons row */}
        <div className=" bg-opacity-20  p-4 rounded-full flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
          {/* Content Type Dropdown */}
          <div className="relative flex-shrink-0 w-full sm:w-auto">
            <select
              className="appearance-none bg-transparent border border-white border-opacity-50 text-white py-2 px-4 pr-8 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              value={contentType}
              onChange={(e) => setContentType(e.target.value)}
            >
              <option value="Image" className="bg-gray-800 text-white">
                Image
              </option>
              <option value="Video" className="bg-gray-800 text-white">
                Video
              </option>
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none" />
          </div>

          {/* Prompt Input with Search Icon INSIDE */}
          <div className="relative flex-grow w-full">
            <input
              type="text"
              placeholder="Write Prompt..."
              className="w-full pl-4 pr-10 py-2 sm:py-3 md:py-4 lg:py-5 bg-transparent border border-white border-opacity-50 text-white placeholder-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            className="flex-shrink-0 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-200 w-full sm:w-auto"
          >
            Generate
          </button>
        </div>

        {/* Aspect Ratio Dropdown - Moved BELOW the main row */}
        <div className="relative inline-block sm:w-auto mt-4 ml-2">
          {" "}
          {/* Added margin-top for spacing and ml for slight indent */}
          <select
            className="appearance-none  bg-opacity-20 backdrop-filter backdrop-blur-lg border border-white border-opacity-50 text-white py-2 px-4 pr-8 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-40 sm:w-48" // Reduced width
            value={aspectRatio}
            onChange={(e) => setAspectRatio(e.target.value)}
          >
            <option value="1:1" className="bg-gray-800 text-white">
              1:1
            </option>
            <option value="16:9" className="bg-gray-800 text-white">
              16:9
            </option>
            <option value="9:16" className="bg-gray-800 text-white">
              9:16
            </option>
          </select>
          <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none" />
        </div>
        <div className="px-4 py-12">
          <div className="max-w-[1400px] mx-auto">
            {/* Heading */}

            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-2 md:columns-4 gap-4 space-y-4 mt-12">
              {inspirationImages.map((img) => (
                <div
                  onClick={handleGeneratew}
                  key={img.id}
                  className="cursor-pointer break-inside-avoid overflow-hidden rounded-2xl shadow-md  transition-transform duration-300"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center py-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
