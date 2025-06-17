"use client";

import { useState } from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
  FaTwitter,
  FaTiktok,
  FaYoutube,
  FaImage,
  FaMousePointer,
  FaImages,
  FaPlay,
  FaFont,
  FaCog,
  FaVideo,
  FaInstagram,
  FaShoppingCart,
  FaTimes,
} from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { ImBullhorn } from "react-icons/im";
import { IoMagnetSharp } from "react-icons/io5";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import CampaignSubHeader from "@/components/Dashboard/campaign/CampaignSubHeader";
import PrimaryButton from "@/components/ui/PrimaryButton";
import OutlineButton from "@/components/ui/OutlineButton";
import { useNavigate } from "react-router-dom";

const objectives = [
  {
    icon: ImBullhorn,
    label: "Brand Awareness",
    value: "brand-awareness",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: IoMagnetSharp,
    label: "Lead Generation",
    value: " lead-generation",
    color: "bg-gray-100 text-gray-600",
  },
  {
    icon: BsFillBarChartLineFill,
    label: "Sales",
    value: "sales",
    color: "bg-gray-100 text-gray-600",
  },
  {
    icon: FaPeopleGroup,
    label: "Engagement",
    value: "engagement",
    color: "bg-gray-100 text-gray-600",
  },
];

const platforms = [
  { icon: FaFacebookF, color: "text-blue-600", value: "facebook" },
  { icon: FaGoogle, color: "text-red-500", value: "google" },
  { icon: FaLinkedinIn, color: "text-blue-700", value: "linkedin" },
  { icon: FaTwitter, color: "text-black", value: "twitter" },
  { icon: FaTiktok, color: "text-black", value: "tiktok" },
  { icon: FaYoutube, color: "text-red-600", value: "youtube" },
];

const adTypes = [
  { icon: FaImage, label: "Image Ads", value: "image-ads" },
  { icon: FaMousePointer, label: "Interactive Ads", value: "interactive-ads" },
  { icon: FaImages, label: "Carousel Ads", value: "carousel-ads" },
  { icon: FaPlay, label: "Slideshow Ads", value: "slideshow-ads" },
  { icon: FaFont, label: "Text Ads", value: "text-ads" },
  { icon: FaCog, label: "Dynamic Ads", value: "dynamic-ads" },
  { icon: FaVideo, label: "Video Ads", value: "video-ads" },
  { icon: FaInstagram, label: "Story Ads", value: "story-ads" },
  { icon: FaShoppingCart, label: "Shopping Ads", value: "shopping-ads" },
];

const DashboardCampaignCreate = () => {
  const [selected, setSelected] = useState("mobile");
  const navigate = useNavigate();
  const [interests, setInterests] = useState([
    "Fitness",
    "Running",
    "Outdoor Activities",
  ]);

  const removeInterest = (interest: string) => {
    setInterests(interests.filter((i) => i !== interest));
  };

  // state for getting all the value
  const [businessInfo, setBusinessInfo] = useState("");
  const [title, setTitle] = useState("");
  const [selectedObjective, setSelectedObjective] = useState("brand-awareness");
  const [selectedPlatform, setSelectedPlatform] = useState("facebook");
  const [selectedAdType, setSelectedAdType] = useState("");
  const [location, setLocation] = useState("");
  const [ageFrom, setAgeFrom] = useState("");
  const [ageTo, setAgeTo] = useState("");
  const [selectedGender, setSelectedGender] = useState("All");
  const [dailyBudget, setDailyBudget] = useState("");
  const [totalBudget, setTotalBudget] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const handlegenerate = () => {
    navigate("/dashboard/campaign/preview");
  };
  const handleSubmit = () => {
    const data = {
      businessInfo,
      title,
      selectedObjective,
      selectedPlatform,
      selectedAdType,
      location,
      ageFrom,
      ageTo,
      selectedGender,
      dailyBudget,
      totalBudget,
      startDate,
      endDate,
    };
    console.log("Form Data:", data);
  };

  return (
    <div>
      <p className="text-lg ">
        <span>Ad Campaign/</span>
        <span className="ml-1 text-blue-500">Create New Ad</span>
      </p>
      <div className="flex flex-col md:flex-row gap-9 mt-5">
        {/* **********left side section****************************************************************************** */}
        <div className="flex-1 bg-[#F3F4F6] rounded-[20px] p-4 space-y-5">
          <h5 className="text-3xl font-semibold">Create New Ad Campaign</h5>
          <div className="border border-gray-300 my-3" />
          {/* business information section */}
          <div>
            <CampaignSubHeader text="Business Information" />
            <div className="relative w-full">
              <select
                value={businessInfo}
                onChange={(e) => setBusinessInfo(e.target.value)}
                className="appearance-none w-full py-3 px-4 pr-10 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white text-gray-800"
              >
                <option className="bg-white text-gray-700" value="">
                  Select Business
                </option>
                <option className="" value="Acme Sportswear">
                  Acme Sportswear
                </option>
                <option className="" value="Target Audience">
                  Target Audience
                </option>
                <option className="" value="Primary Goals">
                  Primary Goals
                </option>
              </select>

              {/* Custom dropdown arrow (SVG) */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 14a1 1 0 01-.7-.3l-4-4a1 1 0 111.4-1.4L10 11.6l3.3-3.3a1 1 0 111.4 1.4l-4 4a1 1 0 01-.7.3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* title add section */}
          <div>
            <CampaignSubHeader text="Add Title" />
            <div>
              <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="py-2 px-3 border border-gray-300 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          {/* Ad Objective */}

          <div>
            <CampaignSubHeader text="Ad Objective" />

            <div className="grid grid-cols-2 gap-3">
              {objectives.map((objective, index) => (
                <div
                  key={index}
                  className={`flex justify-center  items-center gap-2 p-3 rounded-lg border cursor-pointer ${
                    selectedObjective === objective.value
                      ? "bg-purple-100 border-purple-600"
                      : "bg-[#E6E6E8] border-gray-200"
                  } hover:bg-[#F4F1FF]`}
                  onClick={() => setSelectedObjective(objective.value)}
                >
                  <objective.icon className="text-xl" />
                  <span className="text-sm font-medium text-center">
                    {objective.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Platform Selection */}

          <div>
            <CampaignSubHeader text="Platform Selection" />

            <div className="flex justify-between">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className={`${
                    selectedPlatform === platform.value
                      ? "bg-purple-100 border-purple-600"
                      : "bg-[#E6E6E8]"
                  } px-5 py-3 rounded-lg border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-[#F4F1FF]`}
                  onClick={() => setSelectedPlatform(platform.value)}
                >
                  <platform.icon className={`text-2xl ${platform.color}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Ad Type */}

          <div>
            <CampaignSubHeader text="Ad Type" />
            <div className="grid grid-cols-3 gap-3">
              {adTypes.map((adType, index) => (
                <div
                  key={index}
                  className={`flex items-center p-3 gap-2 rounded-lg border  border-gray-200 cursor-pointer hover:bg-gray-50 ${
                    selectedAdType === adType.value
                      ? "bg-purple-100 border-purple-600"
                      : "bg-[#E6E6E8]"
                  }`}
                  onClick={() => setSelectedAdType(adType.value)}
                >
                  <adType.icon className="text-lg text-gray-600" />
                  <span className="text-xs text-center text-gray-700">
                    {adType.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Audience */}
          <div className="space-y-4">
            <CampaignSubHeader text=" Target Audience" />
            {/* Location */}
            <div>
              <p className="text-sm mb-1">Location</p>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full py-2 px-3 border border-gray-300 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="">Select Location</option>
                <option value="united-states">United States</option>
                <option value="canada">Canada</option>
                <option value="uk">United Kingdom</option>
              </select>
            </div>

            {/* Age range */}
            <div>
              <p className="text-sm">Age range</p>
              <div className="flex items-center gap-2">
                <select
                  value={ageFrom}
                  onChange={(e) => setAgeFrom(e.target.value)}
                  className="w-full py-2 px-3 border border-gray-300 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  <option value="">From</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                </select>
                <p>To</p>
                <select
                  value={ageTo}
                  onChange={(e) => setAgeTo(e.target.value)}
                  className="w-full py-2 px-3 border border-gray-300 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  <option value="">To</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                </select>
              </div>
            </div>

            {/* Gender */}
            <div>
              <CampaignSubHeader text="Gender" />
              <div className="flex space-x-2">
                {["All", "Male", "Female"].map((gender) => (
                  <Button
                    key={gender}
                    variant={selectedGender === gender ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedGender(gender)}
                    className={
                      selectedGender === gender
                        ? "bg-purple-600 hover:bg-purple-700 text-white"
                        : ""
                    }
                  >
                    {gender}
                  </Button>
                ))}
              </div>
            </div>
            {/* Interest */}
            <div>
              <CampaignSubHeader text="Interest" />
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <div
                    key={interest}
                    className="flex items-center bg-[#E6E6E8] text-black px-3 py-1 rounded-full text-sm"
                  >
                    <span>{interest}</span>
                    <button
                      onClick={() => removeInterest(interest)}
                      className="ml-2 text-black hover:text-purple-700 cursor-pointer"
                    >
                      <FaTimes className="text-xs" />
                    </button>
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full w-8 h-8 p-0 text-purple-600 border-purple-300"
                >
                  +
                </Button>
              </div>
            </div>
          </div>

          {/* Budget & Schedule */}
          <div className="space-y-3">
            <CampaignSubHeader text="Budget & Schedule" />
            {/* Daily Budget */}
            <div>
              <p className="text-sm">Daily Budget</p>
              <select
                value={dailyBudget}
                onChange={(e) => setDailyBudget(e.target.value)}
                className="w-full py-2 px-3 border border-gray-300 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="">Select Daily Budget</option>
                <option value="50">$50</option>
                <option value="100">$100</option>
                <option value="150">$150</option>
              </select>
            </div>

            {/* Total Budget */}
            <div>
              <p className="text-sm">Total Budget</p>
              <select
                value={totalBudget}
                onChange={(e) => setTotalBudget(e.target.value)}
                className="w-full py-2 px-3 border border-gray-300 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="">Select Total Budget</option>
                <option value="500">$500</option>
                <option value="1000">$1000</option>
                <option value="1500">$1500</option>
              </select>
            </div>

            {/* date */}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-sm">Start Date</p>
                <Input
                  type="date"
                  onChange={(e) => setStartDate(e.target.value)}
                  value={startDate}
                  className="py-2 px-3 border border-gray-300 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm">End Date</p>
                <Input
                  type="date"
                  onChange={(e) => setEndDate(e.target.value)}
                  value={endDate}
                  className="py-2 px-3 border border-gray-300 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
          </div>
        </div>
        {/* **********right side section****************************************************************************** */}
        <div className="flex-1">
          <div className="flex justify-end items-center gap-5">
            <OutlineButton>Save Draft</OutlineButton>
            <PrimaryButton onClick={handleSubmit}>
              Launch Campaign
            </PrimaryButton>
          </div>
          <div className="border border-gray-300 my-3" />
          {/* prompt section */}
          <div className="flex-1 bg-[#F3F4F6] rounded-[20px] p-4">
            <CampaignSubHeader text="Ad Copy" />
            <div>
              <div>
                <p className="mt-5 text-sm text-T-200">Prompt</p>
                <textarea
                  name="prompt"
                  id=""
                  className="border-[1px] border-[979AA0] w-full rounded-xl px-1 py-2 text-sm"
                  value={
                    "Create an engaging ad copy for a summer sale offering 40% off"
                  }
                ></textarea>
                <button className="px-4 py-2 rounded-3xl bg-[#654FAE] cursor-pointer text-white font-bold">
                  Generate
                </button>
              </div>
              <div>
                <p className="mt-5 text-sm text-T-200">Generated Text</p>
                <textarea
                  name="prompt"
                  id=""
                  className="border-[1px] border-[979AA0] w-full rounded-xl px-1 py-2 text-sm"
                  value={
                    "Lorem ipsum dolor sit amet consectetur. Id feugiat magna lobortis gravida rhoncus neque vehicula. Euismod nullam tincidunt nunc faucibus viverra elit."
                  }
                  rows={4}
                ></textarea>
              </div>
            </div>
          </div>
          {/* media section */}
          <div className="mt-5">
            <CampaignSubHeader text="Ad Media" />
            <div className="bg-black rounded-md flex justify-center items-center gap-2 h-64 mx-6">
              <button className="px-4 py-2 rounded-3xl border border-[#8E6EFF] cursor-pointer text-[#8E6EFF] font-bold">
                Save Draft
              </button>
              <button className="px-4 py-2 rounded-3xl bg-gradient-to-r from-[#654FAE] via-[#C0AFFA] to-[#8E6EFF] cursor-pointer text-white font-bold">
                Browse Templates
              </button>
            </div>
            <div className="flex justify-center items-center py-3">
              <button className="px-4 py-2 rounded-md border cursor-pointer font-bold">
                Add Media +
              </button>
            </div>
          </div>
          {/* ------------write prompt section--------- */}
          <div className="flex items-center w-full p-3 rounded-full bg-[#f5f3ff] shadow-sm">
            {/* Dropdown */}
            <div className="relative text-blue-500">
              <select className="w-[100px] py-4 px-2 border border-gray-300 rounded-md text-sm bg-white">
                <option value="image">Image</option>
                <option value="text">Text</option>
              </select>
            </div>

            {/* Input field */}
            <input
              type="text"
              placeholder="Write Prompt..."
              className="flex-1 mx-3 text-sm bg-transparent outline-none text-gray-700 placeholder-gray-400"
            />

            {/* Icon button */}
            <button className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-md cursor-pointer">
              <FaWandMagicSparkles className="text-white" />
            </button>
          </div>
          {/* ------------preview section--------- */}
          <div className="mt-5">
            <CampaignSubHeader text="Ad Preview" />
            <div className="flex justify-end">
              <div className="inline-flex items-center bg-white border border-gray-300 rounded-full overflow-hidden text-sm font-medium">
                <button
                  onClick={() => setSelected("mobile")}
                  className={`px-4 py-3 transition-colors duration-200 ${
                    selected === "mobile"
                      ? "bg-purple-500 text-white"
                      : "text-black"
                  }`}
                >
                  Mobile
                </button>
                <button
                  onClick={() => setSelected("desktop")}
                  className={`px-4 py-3 transition-colors duration-200 ${
                    selected === "desktop"
                      ? "bg-purple-500 text-white"
                      : "text-black"
                  }`}
                >
                  Desktop
                </button>
              </div>
            </div>
            <div className="mt-7 flex justify-center">
              <img src="/src/assets/mobilepreview.jpg" />
            </div>
            <div className="flex justify-end mt-5">
              <button
                onClick={handlegenerate}
                className="px-3 py-2 text-white
               rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-md cursor-pointer"
              >
                Get AI Optimize Suggestions
                <FaWandMagicSparkles className="text-white ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCampaignCreate;
// okay
