/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaChevronDown } from "react-icons/fa";
import img from "../../assets/dash-content.png"; // Make sure this path is correct
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";

const ContentHeader: React.FC<{
  templateType: string;
  selectedPlatforms: string[];
  searchTerm: string;
  startDate: string;
  endDate: string;
}> = ({ templateType, selectedPlatforms, searchTerm, startDate, endDate }) => {
  const navigate = useNavigate();
  const accessToken = useSelector((state: any) => state.auth.token);
  const user = useSelector((state: any) => state.auth.user);

  const [contentType, setContentType] = useState("image");
  const [prompt, setPrompt] = useState("");
  const [aspectRatio] = useState("1:1");
  const [platfrom, setPlatform] = useState("google");
  const [allContent, setAllContent] = useState<any[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  console.log("all content ", allContent);
  // Fetch all content initially
  const getAllContent = async () => {
    try {
      const res = await fetch(
        "https://zyaamali1-backend.onrender.com/api/v1/content/get-all-content",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();
      setAllContent(data.data.result || []);
    } catch (error) {
      console.error("Error fetching content:", error);
    }
  };

  useEffect(() => {
    getAllContent();
  }, [accessToken]);

  // 🔹 Filter content dynamically
  const filteredContent = allContent.filter((item) => {
    const matchesType = templateType ? item.type === templateType : true;
    const matchesPlatform =
      selectedPlatforms.length === 0 ||
      selectedPlatforms.includes(item.platform.toLowerCase());
    const matchesSearch =
      !searchTerm ||
      item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.prompt?.toLowerCase().includes(searchTerm.toLowerCase());

    // Filter by date range
    const itemDate = new Date(item.createdAt);

    const startDateFilter = startDate ? new Date(startDate) <= itemDate : true;
    const endDateFilter = endDate ? new Date(endDate) >= itemDate : true;

    return (
      matchesType &&
      matchesPlatform &&
      matchesSearch &&
      startDateFilter &&
      endDateFilter
    );
  });

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt");
      return;
    }

    setIsGenerating(true);
    try {
      let response;
      if (contentType === "image") {
        response = await axios.post(
          "http://74.118.168.229:8000/library/generate/image-content",
          {
            prompt,
            platform: platfrom,
          }
        );
        console.log("image  ", response.data);
      } else if (contentType === "video") {
        response = await axios.post(
          `http://74.118.168.229:8000/library/generate/video-content`,
          {
            prompt,
            platform: platfrom,
          }
        );
        console.log("video ", response.data);
      } else {
        console.warn("⚠️ Unsupported content type:", contentType);
        return;
      }

      if (response.data) {
        console.log("saved Generate data request ", {
          type: contentType,
          platform: platfrom,
          ratio: aspectRatio,
          link: response.data.video_urls || response.data.image_urls,
          source: "generated",
          prompt,
          owner: user.userId,
        });
        const result = await axios.post(
          "https://zyaamali1-backend.onrender.com/api/v1/content/post-generated-content",
          {
            type: contentType,
            platform: platfrom,
            ratio: aspectRatio,
            link: response.data.video_urls || response.data.image_urls,
            source: "generated",
            prompt,
            owner: user.userId,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (result.data) {
          toast.success("The content generated successfully");
          // Refresh the content list
          await getAllContent(); // Refresh content after generation
        }
      }
    } catch (error: any) {
      console.error("❌ Error generating content:", error);
      toast.error("Failed to generate content. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGeneratew = (id: string) => {
    navigate(`/contentpreview?contentId=${id}`);
  };

  return (
    <div className="relative mb-8 w-full mt-10">
      {/* Background Image */}
      <img
        src={img}
        className="absolute -top-14 inset-0 w-full h-full object-cover object-center z-0 rounded-b-3xl"
        alt="Content Library Background"
      />

      {/* Overlay */}
      <div className="absolute inset-0 opacity-40 z-0 rounded-b-3xl"></div>

      {/* Header Content */}
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

        {/* Main input row */}
        <div className="bg-opacity-20 p-4 rounded-full flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
          {/* Content Type Dropdown */}
          <div className="relative flex-shrink-0 w-full sm:w-auto">
            <select
              className="appearance-none bg-transparent border border-white border-opacity-50 text-white py-2 px-4 pr-8 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              value={contentType}
              onChange={(e) => setContentType(e.target.value)}
              disabled={isGenerating}
            >
              <option value="image" className="bg-gray-800 text-white">
                Image
              </option>
              <option value="video" className="bg-gray-800 text-white">
                Video
              </option>
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none" />
          </div>

          {/* Prompt Input */}
          <div className="relative flex-grow w-full">
            <input
              type="text"
              placeholder="Write Prompt..."
              className="w-full pl-4 pr-10 py-2 sm:py-3 md:py-4 lg:py-5 bg-transparent border border-white border-opacity-50 text-white placeholder-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={isGenerating}
            />
          </div>

          {/* Generate Button with Loading Spinner */}
          <button
            onClick={handleGenerate}
            className="flex-shrink-0 cursor-pointer px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-200 w-full sm:w-auto disabled:bg-purple-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[120px]"
          >
            {isGenerating ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Generating...</span>
              </>
            ) : (
              "Generate"
            )}
          </button>
        </div>

        {/* Platform Dropdown */}
        <div className="relative inline-block sm:w-auto mt-4 ml-4">
          <select
            className="appearance-none bg-opacity-20 backdrop-filter backdrop-blur-lg border border-white border-opacity-50 text-white py-2 px-4 pr-8 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-40 sm:w-48"
            value={platfrom}
            onChange={(e) => setPlatform(e.target.value)}
            disabled={isGenerating}
          >
            <option value="facebook" className="bg-gray-800 text-white">
              Facebook
            </option>
            <option value="google" className="bg-gray-800 text-white">
              Google
            </option>
            <option value="linkedin" className="bg-gray-800 text-white">
              Linkedin
            </option>
            <option value="tiktok" className="bg-gray-800 text-white">
              Tik Tok
            </option>
            <option value="instagram" className="bg-gray-800 text-white">
              Instagram
            </option>
          </select>
          <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none" />
        </div>

        {/* Loading Overlay for Content Generation */}
        {isGenerating && (
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white/95 rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl border border-white/20">
              <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Generating {contentType === "image" ? "Image" : "Video"}
              </h3>
              <p className="text-gray-600">
                This may take up some seconds. Please wait...
              </p>
              <div className="mt-4 flex justify-center space-x-1">
                <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce delay-150"></div>
                <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce delay-300"></div>
              </div>
            </div>
          </div>
        )}

        {/* Content Grid */}
        <div className="px-4 py-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 space-y-4 mt-12">
              {filteredContent.map((img) => (
                <div
                  onClick={() => handleGeneratew(img._id)}
                  key={img._id}
                  className="cursor-pointer break-inside-avoid overflow-hidden rounded-2xl shadow-md h-40 transition-transform duration-300 relative group hover:scale-105"
                >
                  {img.type === "image" ? (
                    <img
                      src={img.link}
                      alt={img.title || "content"}
                      className="object-cover rounded-2xl w-full h-full"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <video
                        src={img.link}
                        className="object-cover rounded-2xl w-full h-full"
                      />
                      {/* Overlay Play Icon */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-10 h-10 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {filteredContent.length === 0 && (
                <p className="text-gray-500">No results found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
